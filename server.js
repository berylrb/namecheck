import "dotenv/config.js"
import createError from 'http-errors'
import express from 'express'
import { names } from "./data/name-data.js"
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
	
// Connect to the database with Mongoose
import('./config/database.js')

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as namesRouter } from './routes/names.js'

// set up app
const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)



app.get('/', function(req, res) {
  res.redirect('/home')
})
app.get('/home', function(req, res) {
  res.render('home')
})
app.get('/names', function(req, res) {
  res.render('names/index', {names: names})
})



// mounted routers
app.use('/', indexRouter)
app.use('/names', namesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export {
  app
}
