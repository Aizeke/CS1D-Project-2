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

router.put('/update/:id/:distance?/:beginningstadium?/:teamname?/:endingstadium?', async (req, res, next) => {
  try {
    const results = await db.update(req.params.id, req.params.distance, req.params.beginningstadium, req.params.teamname, req.params.endingstadium)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

// router.delete for delete

router.delete('/delete/:id', async (req, res, next) => {
  try {
    const results = await db.delete(req.params.id)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

// router.post for create

router.post('/insert/:distance/:beginningstadium/:teamname/:endingstadium', async (req, res, next) => {
  try {
    const results = await db.insert(req.params.distance, req.params.beginningstadium, req.params.teamname, req.params.endingstadium)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router
