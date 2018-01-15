import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { LocationService } from './location.service'
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../users/user.service'
import { MonitorService } from '../monitor/monitor.service'

@Component({
    selector : 'app-location-detail',
    templateUrl : './location.detail.component.html'
})
export class LocationDetailComponent implements OnInit {

    public business
    public locations : Array<any> = []
    public errors : String = ""
    public status : Array<any> = []
    public location_id : Number
    public success_msj : String 

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @param activated_route : service for getting the route params
    // @param location_service : location service
    // @param user_service : user service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router,
                    private activated_route:ActivatedRoute,
                    private location_service:LocationService    ) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        // initialize page
        this.activated_route.params.subscribe( params => {
            let id = params[ 'id' ]
            this.location_id = id
            this.getStatus( this.location_id )
        })
    }

    // Get status from service
    // @param id - location id
    // @returns none
    getStatus( id ) : void {
        this.location_service.getStatus( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) { 
                    console.log( response )
                    this.status = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    hardUpdate() : void {
        this.location_service.hardUpdate( this.location_id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.success_msj = "Hard Update successful"
                    console.log( this.success_msj )
                    this.getStatus( this.location_id )
                } else {
                    this.errors = response.message
                }
            })
    }

}