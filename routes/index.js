const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

module.exports = router;
