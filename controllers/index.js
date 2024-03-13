// Controller logic for index routes
const indexController = {
    homePage: (req, res) => {
      res.render('index', { title: 'Home' }); // Render home page view
    },
    aboutPage: (req, res) => {
      res.render('about', { title: 'About' }); // Render about page view
    },
    contactPage: (req, res) => {
      res.render('contact', { title: 'Contact' }); // Render contact page view
    }
  };
  
  module.exports = indexController; // Export controller
  