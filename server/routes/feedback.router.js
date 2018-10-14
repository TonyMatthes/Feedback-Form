const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', function (req, res) {
    pool.query(`SELECT * FROM "feedback"
                ORDER BY "id";`)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('ERROR in feedback GET: ', error);
            res.sendStatus(500);
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const post = req.body
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, 
                [post.feeling, post.understanding, post.understanding, post.support, post.comments])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('ERROR in feedback POST:', error);
            res.sendStatus(500);
        })
}) // END POST Route

//DELETE Route
router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "feedback"
                WHERE "id" = $1;`, 
                [req.query.id])
        .then(()=> {
            res.sendStatus(200);
    })
        .catch( error => {
        console.log('ERROR in feedback DELETE:', error);
        res.sendStatus(500);
    });
}); // END DELETE Route

//PUT Route (for flagging feedback in Admin)
router.put('/', (req, res) => {
    pool.query(`UPDATE "feedback"
                SET "flagged" = NOT "flagged"
                WHERE "id" = $1;`, 
                [req.query.id])
        .then(() => {
        res.sendStatus(200);
    })
        .catch( error => {
        console.log('ERROR:', error);
        res.sendStatus(500);
    });
}); //END PUT Route

module.exports = router;