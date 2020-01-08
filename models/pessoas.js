const findAll = (dados) => {

    // return new Promise((resolve, reject) => {

    //     connection.query('select * from pessoas', (err, results) => {
    //        if(err){
    //            reject(err)
    //        }else{
    //         resolve(results)
    //        }
            
    //     })

    // })

}

const findById = async(connection, id) => {

    return new Promise((resolve, reject) => {

        connection.query('select * from pessoas where id = '+id, (err, results) => {
           if(err){
               reject(err)
           }else{
               if(results.length>0){
                   resolve(results[0])
               }else{
                resolve({})
               }
            
           }
            
        })

    })

    // const pessoa = await dados('pessoas').where({ id: req.params.id })

    // return pessoa

}

const deleteOne = (dados, id) => {

    return new Promise((resolve, reject) => {
        connection.query('delete from pessoas where id = '+id+' limit 1', (err) => {
            if(err){
                reject(err)
            }else{
             resolve()
            }

        })
    })

}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into pessoas (nome) values ('${data.nome}')`, (err) => {
            if(err){
                reject(err)
            }else{
             resolve()
            }
        }) 
    })
}

const update = (connection, id, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`update pessoas set nome ='${data.nome}' where id='${id}'`, (err) => {
            if(err){
                reject(err)
            }else{
             resolve()
            }
        }) 
    })
}


module.exports = {
    findAll,
    findById,
    deleteOne,
    create, 
    update
}