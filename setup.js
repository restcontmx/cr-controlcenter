
var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    logger        = require( 'morgan' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    path          = require( 'path' ),
    http          = require( 'http' ),  
    app           = express();
    
// API file for interacting
const auth = require('./server/routes/auth');
const business = require('./server/routes/business');
const user = require('./server/routes/user');
const location = require('./server/routes/location');
const permission = require('./server/routes/permission');
const subscription = require('./server/routes/subscription');
const monitor = require('./server/routes/monitor');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use( '/auth', auth );
app.use( '/business', business );
app.use( '/user', user );
app.use( '/location', location );
app.use( '/permission', permission );
app.use( '/subscription', subscription );
app.use( '/monitor', monitor );

module.exports = app;