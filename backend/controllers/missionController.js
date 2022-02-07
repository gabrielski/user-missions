// Getting missions for users
// @methods: CRUD

const getMissions = (req, res) => {
    res.status(200).json({ message: "Getting missions" })
}

const addMission = (req, res) => {
    res.status(200).json({ message: 'Set a new mission.' })
}

const changeMission = (req, res) => {
    res.status(200).json({ message: `Nice change! Hope your ${(req.params.id)} mission will rock!` })
}

const deleteMission = (req, res) => {
    res.status(200).json({ message: `Pewf! Your ${(req.params.id)} mission magically disappeared...` })
}

module.exports = {
    getMissions,
    addMission,
    changeMission,
    deleteMission
}