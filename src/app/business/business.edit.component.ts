import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { BusinessService } from './business.service'
import { Router, ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms'
import { UserService } from '../users/user.service'

@Component({
    selector: 'app-business-edit',
    templateUrl: './business.edit.component.html'
})
export class BusinessEditComponent implements OnInit {

    public business
    public errors : String

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router, 
                    private service:BusinessService,
                    private user_service:UserService,
                    private activated_route:ActivatedRoute ) { }

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
                } else {
                    this.errors = response.message
                }
            })
    }

    // add 
    // function for adding a new business
    // Adds the business then the user
    // @params businessForm : Form object
    // @returns none
    update = () => {
        // Add new business
        // Add new user with the bussines_id 
        let business = {
            id : this.business.id,
            name : this.business.name,
            description : this.business.description,
            production_endpoint : this.business.production_endpoint
        }

        this.service.update( business )
                    .map( res => res.json() )
                    .subscribe( response => {
                        if( !response.error ) {
                            console.log( response )
                            this.router.navigateByUrl( `/business/detail/${this.business.id}` )
                        } else {
                            this.errors = `There was an error adding the business; ${response.message}`
                        }
                    })
        
    }
}