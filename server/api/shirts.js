const router = require('express').Router()
const Shirt = require('../db/shirt')
//all mounted on shirts

//this has to match axios call
router.get('/getshirts', async (req, res, next) => {
    try {
      const shirts = await Shirt.findAll()
      console.log(shirts)
      res.json(shirts)
    } catch (error) {
      next(error)
    }
  })


router.post('/', (req, res, next) => {
  console.log("in post")
  console.log(req.body)
  Shirt.create(req.body)
    .then(shirt => res.json(shirt))
    .catch(next)
})

//extra comments in new feature!
//Testing 123
//Extra comments in first feature. will try to merge these to main.

module.exports = router