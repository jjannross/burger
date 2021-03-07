const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

//router.get
router.get('/', (req, res) => {
    burger.selectAll(results => {
      res.render('index', { burgers: results });
    });
  });

//router.post insertOne

//router.put updateOne


// Export routes for server.js to use.
module.exports = router;