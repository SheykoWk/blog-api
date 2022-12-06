const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models')

const initModels = () => {

    //* has model1.hasOne(model2) model 2 tiene la llave foranea

    //* belongs model2.belongsTo(model1) model 2 tiene la llave foranea 

    //? fk = posts
    //? 1 publicacion pertenece a 1 categoria
    Posts.belongsTo(Categories)
    //? 1 categoria tiene 1 publicaciones
    Categories.hasMany(Posts)

}

module.exports = initModels
