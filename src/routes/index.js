const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});


const { FIPECtrl } = require('../controllers/fipeCtrl');
router.get('/fipe/:tipo', FIPECtrl.marcas);
router.get('/fipe/:tipo/:marca', FIPECtrl.modelos);
router.get('/fipe/:tipo/:marca/:modelo', FIPECtrl.anos);
router.get('/fipe/:tipo/:marca/:modelo/:ano', FIPECtrl.preco);

module.exports = router;
