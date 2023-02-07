const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data succesfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send("Serve error");
  }
});

module.exports = router;