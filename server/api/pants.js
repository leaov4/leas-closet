const router = require('express').Router()
const Pants = require('../db/pants')
//all mounted on pants

//this has to match axios call
router.get('/getpants', async (req, res, next) => {
    try {
      const pants = await Pants.findAll()
      console.log(pants)
      res.json(pants)
    } catch (error) {
      next(error)
    }
  })


router.post('/', async (req, res, next) => {
  console.log("post request pant")
  try {
    const pant = await Pants.create(req.body)
    res.json(pant)
  } catch (error) {
    next(error)
  }
})

module.exports = router