const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', function (req, res) {
    pool.query(`SELECT * FROM "image"
                ORDER BY "id";`)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('Error feedback GET :', error);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
                VALUES ($1, $2, $3, $4);`, [req.body.path, req.body.description,])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error in feedback POST Function:', error);
            res.sendStatus(500);
        })
}) // END POST Route

module.exports = router;