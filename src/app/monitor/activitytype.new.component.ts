import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { MonitorService } from './monitor.service'
import { NgForm } from '@angular/forms'

@Component({
    selector : 'app-activitytype-new',
    templateUrl : './activitytype.new.component.html'
})
export class ActivityTypeNewComponent {

    public activity_type
    public errors : string = ""
    public messages : string = ""

    // Constructor
    // @param service : location service
    // @param router : router service
    // @param activated route : activated route
    // @returns none
    constructor(    public service:MonitorService,
                    public router:Router,
                    public activated_route:ActivatedRoute ) { }

    // Adds the activity type to the service
    // @params  activity type form : ng form
    // @returns none
    add( aForm : NgForm ) : void {
        console.log( aForm )
        if( aForm.valid ) {
            this.service.createActivityType( aForm.value )
                .map( res => res.json() )
                .subscribe( response => {
                    if( !response.error ) {
                        this.router.navigate( ['/monitor/'] )
                    } else {
                        console.log( "There was an error adding the Activity Type ", response.message )
                    }
                })
        }
    }
}