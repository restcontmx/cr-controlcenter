'use strict';

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var urlLib = require( 'url' );
var request = require( 'request' );
var http_helper = require( '../helpers/http_helper_ne' );
var encryption_system = require( '../helpers/encryption_helper' );
var router = express.Router();
var jsonParser = bodyParser.json();

/**
* activity type list petttion
**/
router.get( '/activitytype', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] );  
    request(
        {
            url : http_helper.get_api_uri( 'activitytype/', '' ),
            method : 'GET',
            json : true,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_ok( error, response, body ) ) }
    );
});

/**
* activity type create petttion
**/
router.post( '/activitytype', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] );  
    request(
        {
            url : http_helper.get_api_uri( 'activitytype/', '' ),
            method : 'POST',
            json : true,
            body : req.body,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_created( error, response, body ) ) }
    );
});

/**
* activity list petttion
**/
router.get( '/activity', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] );  
    request(
        {
            url : http_helper.get_api_uri( 'activity/', '' ),
            method : 'GET',
            json : true,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_ok( error, response, body ) ) }
    );
});

/**
* error report list petttion
**/
router.get( '/errorreport', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] );  
    request(
        {
            url : http_helper.get_api_uri( 'errorreport/', '' ),
            method : 'GET',
            json : true,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_ok( error, response, body ) ) }
    );
});

/**
* activity type list petttion
**/
router.get( '/reports/:id', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] ),
        url_parts = urlLib.parse( req.url, true );
    request(
        {
            url : http_helper.get_api_uri( 'monitor/reports/', req.params.id + '?d1=' + url_parts.query.d1 + '&d2=' + url_parts.query.d2 ),
            method : 'GET',
            json : true,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_ok( error, response, body ) ) }
    );
});

/**
* activity list petttion
**/
router.get( '/business/activity/:id', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] ),
        url_parts = urlLib.parse( req.url, true );
    request(
        {
            url : http_helper.get_api_uri( 'business/activity/', req.params.id + '?p=' + url_parts.query.p ),
            method : 'GET',
            json : true,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_ok( error, response, body ) ) }
    );
});

/**
* activity list petttion
**/
router.get( '/business/errorreport/:id', jsonParser, function( req, res ) {
    var userdata = JSON.parse( req.cookies[ 'userdata' ] ),
        url_parts = urlLib.parse( req.url, true );
    request(
        {
            url : http_helper.get_api_uri( 'business/errorreport/', req.params.id + '?p=' + url_parts.query.p ),
            method : 'GET',
            json : true,
            headers : {
                'Authorization' : http_helper.get_basic_auth_w_token( encryption_system.decryptCookie( userdata.auth_data ) )
            }
        },
        ( error, response, body ) => { res.send( http_helper.data_format_ok( error, response, body ) ) }
    );
});

module.exports = router;
