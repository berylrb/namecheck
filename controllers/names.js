import { names } from '../data/name-data.js'

function index(req, res) {
  res.render('names/index', {
    names: names
  })
}

export {
	index
}