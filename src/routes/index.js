const { Router } = require('express')
const router = Router();

router.get('/test', (req, res) => {
  const data = {
    "name": "Matías",
    "lastname": "Sierra",
  }
  res.json(data)
})


module.exports = router;