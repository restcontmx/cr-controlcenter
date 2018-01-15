
var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    logger        = require( 'morgan' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    path          = require('path'),
    http          = require('http'),
    app           = express();

// API file for interacting with MongoDB
const auth = require('./server/routes/auth');
const business = require('./server/routes/business');
const user = require('./server/routes/user');
const location = require('./server/routes/location');
const permission = require('./server/routes/permission');
const subscription = require('./server/routes/subscription');
const monitor = require('./server/routes/monitor');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use( '/api/auth', auth );
app.use( '/api/business', business );
app.use( '/api/user', user );
app.use( '/api/location', location );
app.use( '/api/permission', permission );
app.use( '/api/subscription', subscription );
app.use( '/api/monitor', monitor );

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const   port = process.env.PORT || '3333';
        app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));