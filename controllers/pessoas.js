const pessoas = require('../models/pessoas')

const dados = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
})



const index = async (connection, req, res) => {

    const results = await dados('pessoas').select('*')
    res.render('pessoas/index', { pessoas: results })
   
}

const deleteOne = async(connection, req, res) => {
    // await pessoas.deleteOne(connection, req.params.id)
    await dados('pessoas').where({ id: req.params.id }).del()
    res.redirect('/pessoas')
}

const createForm = (req, res) => {  
    res.render('pessoas/create')
}

const createProcess =  async(connection, req, res) => {
    await pessoas.create(connection, req.body)
    // await dados('pessoas').insert({
    //     nome: req.body.nome
    // })
    res.redirect('/pessoas')
}


const updateForm = async(connection, req, res) => {  
    const pessoa = await pessoas.findById(connection, req.params.id)
    res.render('pessoas/update', { pessoa })
}

const updateProcess =  async(connection, req, res) => {
    await pessoas.update(connection, req.params.id,  req.body)
    res.redirect('/pessoas')
}


module.exports = {
    index,
    deleteOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}