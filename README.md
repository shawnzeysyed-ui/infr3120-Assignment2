### server.js file, code followed through lectures ##
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('assignment2:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    
  debug('Listening on ' + bind);
}


### package.json file, code from lectures ###
{
  "name": "assignment2",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./server.js"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  }
}




### app.js also followed from lecture ###
/* installed 3rd paty packages */
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');
let  logger = require('morgan');

let  indexRouter = require('./routes/index');
let  usersRouter = require('./routes/users');

let  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title:'Error'});
});

module.exports = app;



### View folder contains code for webpage###
### Footer; code used from web project example found in lecture modules##
<footer>
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <h6 class="navbar-text">&copy; Copyright 2025. All rights reserved</h6>
      </nav>
    </footer>
    <script src="/Script/app.js"></script>
  </body>
</html>


##################################################
## Header content found from web project example #####
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/Content/app.css' />
    <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/@fortawesome/fontawesome-free/css/all.min.css">
    <script src="/jquery/dist/jquery.min.js"></script>
    <script src="/bootstrap/dist/js/bootstrap.min.js"></script>
  </head>
  <body>
    <!-- header content here -->



#####
### about.ejs; about me page code used from lasst assignment and help from webproject example ###
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <link rel="stylesheet" href="/public/stylesheet/style.css">
</head>
<body>
  <nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/projects">Projects</a> |
    <a href="/contact">Contact</a>
  </nav>

  <h1>About Me</h1>
 
  <!-- Personal Photo -->
  <img src="/public/images/img.png.png" alt="Shawnzey Syed" id="about-photo">

  <p>I’m a student at Ontario Tech studying Technology Management.</p>
</body>
</html>


## image found on google and used on last assignment ###

### Contact.ejs page is contact information code used by web project and last assignment ###
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title><%= title %></title>
</head>
<body>
  <h1>Contact Me</h1>
  <nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/projects">Projects</a> |
    <a href="/contact">Contact</a>
  </nav>

  <p>Email: shawnzey.syed@ontariotechu.net</p>
  <p>GitHub: <a href="https://github.com/shawnzeysyed-ui">shawnzeysyed-ui</a></p>
</html>


###
### error.ejs also used in view folder created for assignment information overall provided code based on web project example ##
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel="stylesheet" href="/public/stylesheet/style.css">
  </head>
  <body>
    <nav>
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/projects">Projects</a> |
      <a href="/contact">Contact</a>
    </nav>

    <h1>Projects</h1>
    <ul>
    <li>Project 1 – Computer Architecture: for this project I had to write a 10 page essay on 5G and IOT.</li>
    <li>Project 2 – Object Oriented Programming: I created a car booking system which is interactive and can be used to rent and return cars of your choice.</li>
    <!-- Video for Car Rental System -->
      <video width="640" height="360" controls>
        <source src="/public/video/Screen Recording 2025-04-03 155318.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    <li>Project 3 – Express using Java and Node. The current project im working on right now which is this assignmnet! My first time working with express and ejs and using javascript. I always used python so its exciting to learn a new lanaguage.</li>
    <li>Project 4 – Cloud Deployment using AWS: i have used aws in the course introduction to cloud services and this will be the second time im using aws for cloud deployment!</li>
    </ul>
  </body>
</html>


##
#### home.ejs main homepage has a img about my creations, code also from lasst assignment and lectures ###
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <link rel="stylesheet" href="/public/stylesheet/style.css">
</head>
<body>
  <nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/projects">Projects</a> |
    <a href="/contact">Contact</a>
  </nav>

  <h1>Welcome to Shawnzey's Webpage!</h1>
  <p>This website was built for Assignment 2 for course INFR3120.</p>
  <p>I love to learn and create below is a junk journal I created!</p>
<section id="home">
  <h4>A junk journal about red riding hood!</h1>
  <img src="/public/images/ass2img.png" alt="Homepage Image" width="800">
</section>
</body>
</html>


## index.ejs, required when creating this assignment followed throughtput elcture###

<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/public/stylesheet/style.css"> 
</head>
<body>
  <h1>Welcome to Shawnzey's Webpage!</h1>
  <p>This website was built for Assignment 2 for course INFR3120.</p>

  <nav>
    <a href="/">Home</a> |
    <a href="#about">About</a> |
    <a href="#projects">Projects</a> |
    <a href="#contact">Contact</a>
  </nav>

  <section id="about">
    <h2>About Me</h2>
    <p>I’m a student at Ontario Tech studying Technology Management.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>Project 1 – Computer Architecture</li>
      <li>Project 2 – Object Oriented programming</li>
      <li>Project 3 – Express using Java and Node</li>
      <li>Project 4 – Cloud Deployment using AWS</li>
    </ul>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: shawnzey.syed@ontariotechu.net</p>
  </section>

  <footer>
    <p>&copy; <%= new Date().getFullYear() %> Shawnzey Syed</p>
  </footer>
</body>
</html>

##
### project.ejs for project page ###
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <link rel="stylesheet" href="/public/stylesheet/style.css">
</head>
<body>
  <nav>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/projects">Projects</a> |
    <a href="/contact">Contact</a>
  </nav>

  <h1>Projects</h1>
  <ul>
    <li>
      <strong>Project 1 – Computer Architecture:</strong>
      <p>I wrote a 10-page essay on 5G and IoT.</p>
    </li>

    <li>
      <strong>Project 2 – Object Oriented Programming (Car Rental System):</strong>
      <p>I created a car booking system using Python which is interactive and allows users to rent and return cars.</p>

      <!-- Video for Car Rental System -->
      <video width="640" height="360" controls>
        <source src="/public/video/Screen Recording 2025-04-03 155318.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </li>

    <li>
      <strong>Project 3 – Express using Java and Node:</strong>
      <p>This is my current assignment project! My first time using Express, EJS, and JavaScript. Previously, I mostly used Python, so it’s exciting to learn a new language.</p>
    </li>

    <li>
      <strong>Project 4 – Cloud Deployment using AWS:</strong>
      <p>I have used AWS before in a cloud services course; this is the second time I’m using it for cloud deployment.</p>
    </li>
  </ul>
</body>
</html>

###

