const Posts = require('../models/posts.models')
const uuid = require('uuid')
//? Obtenga todos los posts

const findAllPosts = async () => {
    const data = await Posts.findAll()
    return data
}

//? Crear nuevos posts

const createPost = async (obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        title: obj.title,
        content: obj.content,
        userId: obj.userId,
        coverUrl: obj.coverUrl,
        categoryId: obj.categoryId
    })
    return data
}

module.exports = {
    findAllPosts,
    createPost
}
