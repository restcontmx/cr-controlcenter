import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { BusinessService } from './business.service'
import { LocationService } from '../locations/location.service'
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../users/user.service'

@Component({
    selector : 'app-business-detail',
    templateUrl : './business.detail.component.html'
})
export class BusinessDetailComponent implements OnInit {

    public business
    public locations : Array<any> = []
    public errors : String = ""
    public successes : String = ""
    public camaleonadmin : Array<any> = []
    public user_reports : Array<any> = []

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @param activated_route : service for getting the route params
    // @param location_service : location service
    // @param user_service : user service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router, 
                    private service:BusinessService,
                    private activated_route:ActivatedRoute,
                    private location_service:LocationService, 
                    private user_service:UserService  ) { }
    
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        this.activated_route.params.subscribe( params => {
            let id = params[ 'id' ]
            this.getBusiness( id )
        })
    }

    // Get business by id
    // @params id the business id
    // @returns none
    getBusiness( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.business = response.data
                    this.getLocations( id )
                    this.getUsers( id )
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get locations by business id
    // @params id business id
    // @returns none
    getLocations( id ) : void {
        this.location_service.getLocationsByBusinessId( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.locations = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get all the users by business id
    // @params id
    // @returns none
    getUsers( id : Number ) : void {
        this.user_service.getUsersByBusinessId( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.user_reports = response.data.userreports
                    this.camaleonadmin = response.data.camaleonadmin
                    console.log( response )
                } else {
                    this.errors = response.message
                }
            })
    }

    // Delete function
    // this will delete a business on the service
    // @params none
    // @returns none
    delete() : void {
        this.service.delete( this.business.id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.router.navigateByUrl( '/business' )
                } else {
                    this.errors = response.message
                }
            })
    }
}