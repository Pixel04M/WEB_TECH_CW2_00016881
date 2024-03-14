# Local Farmers Market Online Directory

## About the App:
The Local Farmers Market Online Directory is a web-based platform designed to connect local farmers with consumers. Farmers can create listings for their products, providing details such as product name, description, availability, and pricing. Consumers can browse through these listings, read about the products, and place orders directly through the platform. Additionally, farmers have the ability to update product availability and details in real-time and remove listings for products that are sold out or no longer offered.

## How to Run the App Locally:
### Prerequisites:
- Node.js installed on your machine

### Steps to Run the App Locally:
1. Clone the Repository:
   
    git clone <https://github.com/Pixel04M/WEB_TECH_CW2_00016881.git>
 

2. Navigate to the Project Directory:
   
    cd local-farmers-market-directory


3. Install Dependencies:
 
    npm install

4. Start the Application:
   
    npm start
  

5. Access the Application:
    Open your web browser and go to http://localhost:3000 to view the application.

## Application Dependencies:
The Local Farmers Market Online Directory relies on the following dependencies:
- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- Body-parser: Middleware to parse incoming request bodies.
- Pug: Template engine for generating HTML markup.

/local-farmers-market-directory

  app.js -- This is the main file of the application.It sets up an Express server, configures middleware,
 * defines routes, handles errors, and starts the server.

  package.json -- The code is a JSON object that represents a package.json file. It includes dependencies for a web application, such as Express, body-parser, and nodemon. The "start" script is set to run the "app.js" file using nodemon
  .gitignore --

/public -- This folder contains static files such as CSS stylesheets, images, and client-side JavaScript files. These files are publicly accessible and can be used to enhance the web style and details of the application.
    /styles
      style.css - to style web application (.pug fies)
/ data 
    database.json -- to store information about an event ticket. The code represents a JSON object that contains an array with a single object. This object represents a ticket and contains various properties such as      

 /routes
    
  /products-- The code imports the express module, which is a popular framework for building web applications Nodejs
    index.js --  JavaScript file that defines routes for an Express.js application. It exports a router object that handles different HTTP requests
    /api
     /product
       index.js - to define and export an Express router for handling API routes related to products. It is a part of a larger project that involves JavaScript and npm (Node Package Manager)

  /controllers
    index.js --  used to a controller logic for index routes in a Node.js application. It exports an object called indexController with three methods: homePage, aboutPage, and contactPage. Each method renders a different view template with a specified title. The controller is then exported for use in other parts of the application.
    productsController.js --  set of controller functions for handling CRUD operations on products. The functions are responsible for retrieving all products, retrieving a product by ID, creating a new product, updating product details, and deleting a product. They utilize the productsService module to perform the necessary operations on the products.
     /api 
      /product
        index.js -- to define a controller object for handling requests related to products in a JavaScript project.

  /services
    productsService.js -- module for a product service in JavaScript. It exports several functions for managing products, including getting all products, getting a product by ID, creating a new product, updating product details, and deleting a product. The product data is stored in an array called products
    /product
    index.js -- to define a module in JavaScript that exports a service object called ticket_service. This module is intended to be used in a project that involves working with tickets in a mock database.

  /views
    index.pug -- written in Jade (now known as Pug) and it includes a table with some sample data and buttons for editing and deleting
    layout.pug -- writted=n inn JADE which  It includes a doctype declaration, an HTML structure with a head and body section, and a block for content. The file path is specified as "/workspaces/WEB_TECH_CW2_00016881/views/layout.pug"
    head.pug -- written in Jade (now known as Pug) and it represents a basic HTML structure with a form for adding a product. The code includes a doctype declaration, a head section with meta tags and stylesheets, a body section with a container, a heading, and a form. The form includes input fields for product name, description, and price, as well as a submit button
    /products
       products.pug - views of products 
....
