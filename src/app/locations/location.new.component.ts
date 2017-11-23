import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { LocationService } from './location.service'
import { NgForm } from '@angular/forms'

@Component({
    selector : 'app-business-location-new',
    templateUrl : './location.new.component.html'
})
export class LocationNewComponent implements OnInit {

    public location

    // Constructor
    // @param service : location service
    // @param router : router service
    // @param activated route : activated route
    // @returns none
    constructor(    public service:LocationService,
                    public router:Router,
                    public activated_route:ActivatedRoute ) { }

    // When init function
    // Init location
    // get id from route
    ngOnInit() : void {
        this.location = {
            location_name : "",
            bussines_id : 0
        }
        this.activated_route.params.subscribe( params => {
            let id = params['id']
            this.location.bussines_id = id
        })
    }

    // Adds the location to the service
    // @params location form : ng form
    // @returns none
    add( locationForm : NgForm ) : void {
        if( locationForm.valid ) {
            this.location.location_name = locationForm.value.name
            this.service.add( this.location )
                .map( res => res.json() )
                .subscribe( response => {
                    if( !response.error ) {
                        this.router.navigate( ['/business/detail', this.location.bussines_id ] )
                    } else {
                        console.log( "There was an error adding the location ", response.message )
                    }
                })
        }
    }
}