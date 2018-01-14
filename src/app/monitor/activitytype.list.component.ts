import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { MonitorService } from './monitor.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-activitytype-list',
    templateUrl: './activitytype.list.component.html'
})
export class ActivityTypeListComponent implements OnInit {

    activity_types : Array<any> = []

    // Constructor function
    // @param service - Monitor service
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router, private service:MonitorService ) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        this.getActivityTypes()
    }

    // Get all the activity types
    // retrieves all the activity types from the server
    // @params none
    // @returns none
    getActivityTypes = () => {
        this.service.getAllActivityType().map( res => res.json() )
            .subscribe( ( response ) => {
                this.activity_types = response.data
            })
    }

}
