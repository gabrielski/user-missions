const express = require('express')
const router = express.Router()
const { getMissions, addMission, changeMission, deleteMission } = require('../controllers/missionController')
const env = require('dotenv').config()

// @endpoint /api/missions
router.route('/').get(getMissions).post(addMission)
router.route('/:id').put(changeMission).delete(deleteMission)

module.exports = router