const express = require('express');
const router = express.Router();

const { mongoose } = require('./../db/mongoose');
const { Post } = require('./../models/Post');
const { User } = require('./../models/User');

router.get('/', (req, res) => {
  var getPostsCount = () => {
    return Post.countDocuments({}).then(posts => {
      return posts;
    });
  }

  var getUserCount = () => {
    return User.countDocuments({}).then(users => {
      return users;
    });
  }

  var getCounts = async () => {
    const posts = await getPostsCount();
    const users = await getUserCount();

    return [posts, users];
  }

  getCounts().then(counts => {
    var posts = counts[0];
    var users = counts[1];
    res.render('home', {
      showTitle: 'Homepage',
      posts,
      users,
      user: req.user
    });
  });
});

// GET /about
router.get('/about', (req, res) => {
  res.render('about', {
    showTitle: 'About page',
    user: req.user
  });
});

// GET /contact
router.get('/contact', (req, res) => {
  res.render('contact', {
    showTitle: 'Contact page',
    user: req.user
  });
});

// GET /contact
router.get('/terms', (req, res) => {
  res.render('terms', {
    showTitle: 'Terms and Conditions page',
    user: req.user
  });
});

module.exports = router;
