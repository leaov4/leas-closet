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


router.post('/', async (req, res, next) => {
  console.log("post request shirt")
  try {
    const shirt = await Shirt.create(req.body)
    res.json(shirt)
  } catch (error) {
    next(error)
  }
})


module.exports = router

//router.post('/', (req, res, next) => {
  //   console.log("in post")
  //   console.log(req.body)
  //   Shirt.create(req.body)
  //     .then(shirt => res.json(shirt))
  //     .catch(next)
  // })