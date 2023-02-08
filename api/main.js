const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  try {
    const dirPath = path.join(__dirname, '/index.html');
    res.sendFile(dirPath);
  } catch (error) {
    
  }
})