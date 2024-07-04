var express = require('express');
var router = express.Router();
const pool = require('../db');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = await pool.query('select * from clients').then((data) =>{
    return data.rows
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
