const express = require( 'express' );
let router = express.Router();
const pool = require( '../pool' );

router.get( '/', ( req, res )=>{
    console.log( 'in /feedback GET:', req.body );
    let sqlCmd = `SELECT * FROM feedback`;
    pool.query( sqlCmd ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( error )=>{
        console.log( error );
        alert( 'nope, GET route not working' );
    })
})

module.exports = router;