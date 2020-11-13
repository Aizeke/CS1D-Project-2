const express = require('express')
const db = require('../controllers/nflDistances.js')
const router = express.Router()

router.get('/all', async (req, res, next) => {
  try {
    const results = await db.allDistances()
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.get('/id/:id', async (req, res, next) => {
  try {
    const results = await db.searchDistance(req.params.id)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

// router.put for update

// router.delete for delete

// router.post for create

module.exports = router
