const express = require('express')
const db = require('../controllers/nflInformation.js')

const router = express.Router()

router.get('/nflinformation/', async (req, res, next) => {
  try {
    const results = await db.allFromInformation()
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.get('/information/:id', async (req, res, next) => {
  try {
    const results = await db.search(req.params.id)
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
