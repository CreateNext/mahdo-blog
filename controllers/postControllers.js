const Post = require('../models/Post');

exports.createBlogPost = async (req, res, next) => {
    try {
        let post = await Post.findOne({title: req.body.title})
        if (post) return res.status(401).json({message: 'post with that title already exists'})

        const blogPost = new Post({
          title: req.body.title,
          banner: req.body.banner,
          body: req.body.body,
          author: req.user._id,
        });

        await blogPost.save()

        res.status(200).json({message: 'Post created successfully', post: blogPost})
    } catch (err) {
        res.status(500).json({message: 'internal server error'})
    }
}

exports.getBlogPost = async (req, res, next) => {
    try {
        let slug = req.params.slug
        let post = Post.findOne({slug: slug})

        if (!post) return res.status(401).json({message: 'Post with that slug does not exist'})

        res.status(200).json({message: 'here is the post', post: post})
    } catch (err) {
        res.status(500).json({message: 'internal server error'})
    }
}

exports.getUserBlogPosts = async (req, res, next) => {
    try {
        let slug = req.params.slug
        let author = req.params.author
        let post = Post.findOne({slug: slug})

        if (!post) return res.status(401).json({message: 'Post with that slug does not exist'})

        res.status(200).json({message: 'here is the post', post: post})
    } catch (err) {
        res.status(500).json({message: 'internal server error'})
    }
}

exports.getBlogPosts = async (req, res, next) => {
    
}

exports.updateBlogPost = async (req, res, next) => {
    
}

exports.deleteBlogPosts = async (req, res, next) => {
    
}