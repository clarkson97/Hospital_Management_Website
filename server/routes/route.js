const express = require('express');
const { getPosts, createPost } = require('../controller/post/post');

const Router = express.Router();

Router.get('/', getPosts);

Router.post('/', createPost);

module.exports = Router;
