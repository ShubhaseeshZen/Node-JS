// const express = require('express')
// const app = express()

// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(3000)


// const express = require('express')
// const app = express()

// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
// }

// app.use(requestTime)

// app.get('/', (req, res) => {
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
// })
// app.listen(3000)


// const express = require('express')
// const cookieParser = require('cookie-parser')
// const cookieValidator = require('./cookieValidator')

// const app = express()

// async function validateCookies(req, res, next) {
//     await cookieValidator(req.cookies)
//     next()
// }

// app.use(cookieParser())

// app.use(validateCookies)

// // error handler
// app.use((err, req, res, next) => {
//     res.status(400).send(err.message)
// })
// app.listen(3000)



// const express = require('express')
// const app = express()

// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
// })

// app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })


// app.get('/user/:id', (req, res, next) => {
//     res.send('USER')
// })


// app.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })


// app.get('/user/:id', (req, res, next) => {
//     console.log('ID:', req.params.id)
//     next()
// }, (req, res, next) => {
//     res.send('User Info')
// })

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id)
// })


// function logOriginalUrl(req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }

// function logMethod(req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// }

// const logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff, (req, res, next) => {
//     res.send('User Info')
// })


// const express = require('express')
// const app = express()
// const router = express.Router()

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
// })

// // a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })

// // a middleware sub-stack that handles GET requests to the /user/:id path
// router.get('/user/:id', (req, res, next) => {
//     // if the user ID is 0, skip to the next router
//     if (req.params.id === '0') next('route')
//     // otherwise pass control to the next middleware function in this stack
//     else next()
// }, (req, res, next) => {
//     // render a regular page
//     res.render('regular')
// })

// // handler for the /user/:id path, which renders a special page
// router.get('/user/:id', (req, res, next) => {
//     console.log(req.params.id)
//     res.render('special')
// })

// // mount the router on the app
// app.use('/', router)


// const express = require('express')
// const app = express()
// const router = express.Router()

// // predicate the router with a check and bail out when needed
// router.use((req, res, next) => {
//     if (!req.headers['x-auth']) return next('router')
//     next()
// })

// router.get('/user/:id', (req, res) => {
//     res.send('hello, user!')
// })

// // use the router and 401 anything falling through
// app.use('/admin', router, (req, res) => {
//     res.sendStatus(401)
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })




// const pug = require('pug');
// const template = 'strong #{message}';
// const context = { message: 'Hello template!' };
// const fn = pug.compile(template);
// console.log(fn(context));
// const pug = require('pug');
// const fs = require('fs');
// const template = fs.readFileSync('./template.pug');
// const context = { messages: [
//   'You have logged in successfully.',
//   'Welcome back!'
// ]};
// const fn = pug.compile(template);
// console.log(fn(context));
// ul
//   li
//     a(href='http://nodejs.org/') Node.js homepage
//   li
//     a(href='http://npmjs.org/') NPM homepage
//   li
//     a(href='http://nodebits.org/') Nodebits blog
//     ul
//   li: a(href='http://nodejs.org/') Node.js homepage
//   li: a(href='http://npmjs.org/') NPM homepage
//   li: a(href='http://nodebits.org/') Nodebits blog
// h3.contacts-header My Contacts
// if contacts.length
//   each contact in contacts
//     - var fullName = contact.firstName + ' ' + contact.lastName
//     .contact-box
//       p fullName
//       if contact.isEditable
//         p: a(href='/edit/+contact.id) Edit Record
//       p
//         case contact.status
//           when 'Active'
//             strong User is active in the system
//           when 'Inactive'
//             em User is inactive
//           when 'Pending'
//             | User has a pending invitation
// else
//   p You currently do not have any contacts
// const pug = require('pug');
// const fs = require('fs');
// const template = fs.readFileSync('./template.pug');
// const context = { messages: [
//   'You have logged in successfully.',
//   'Welcome back!'
// ]};
// const fn = pug.compile(template);
// console.log(fn(context));
// - messages.forEach(message => {
//   p= message
// - })
//  each message in messages
//   p= message