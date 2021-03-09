const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

//router.get
router.get("/", (req, res) => {
  burger.selectAll((results) => {
    res.render("index", { burgers: results });
  });
});

//router.post insertOne
router.post("/api/burgers", (req, res) => {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

//router.put updateOne
router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
