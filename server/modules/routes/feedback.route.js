const express = require( 'express' );
let router = express.Router();
const pool = require( '../pool' );

router.get( '/', ( req, res )=>{
    let sqlCmd = `SELECT * FROM feedback`;
    pool.query( sqlCmd ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( error )=>{
        console.log( error );
        alert( 'nope, GET route not working' );
    })
})

router.post( '/', ( req, res )=>{
    console.log( 'in POST route', req. body );
    let sqlPost = `INSERT INTO "feedback" (feeling, understading, support, comments ) VALUES ( $1, $2, $3, $4 )`
    pool.query( sqlPost, [ req.body.feeling, req.body.understading, req.body.support, req.body.comments ]).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( error )=>{
        console.log( error );
        alert( 'nope, POST route error' );
    })
})

module.exports = router;