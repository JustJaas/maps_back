const { Router } = require("express"); 
const { getData, postData } = require("../controllers/locationController");

const router = Router();

router.get('/getLocations', getData);

router.post('/getLocations', postData);

module.exports = router;