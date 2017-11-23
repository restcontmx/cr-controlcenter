import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { BusinessService } from './business.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { UserService } from '../users/user.service'

@Component({
    selector: 'app-business-new',
    templateUrl: './business.new.component.html'
})
export class BusinessNewComponent implements OnInit {

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router, 
                    private service:BusinessService,
                    private user_service:UserService ) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {}

    // add 
    // function for adding a new business
    // Adds the business then the user
    // @params businessForm : Form object
    // @returns none
    add = (businessForm: NgForm) => {
        if( businessForm.valid ) {
            // Add new business
            // Add new user with the bussines_id 
            let user = {
                    first_name : businessForm.value.user_first_name,
                    last_name : businessForm.value.user_last_name,
                    password : businessForm.value.user_password,
                    email : businessForm.value.user_email,
                    bussines_id : 0
                },
                business = {
                    name : businessForm.value.business_name,
                    description : businessForm.value.business_description,
                    production_endpoint : businessForm.value.business_production_endpoint
                }

            this.service.add( business )
                        .map( res => res.json() )
                        .subscribe( ( response ) => {
                            if( !response.error ) {
                                console.log( response )
                                user.bussines_id = response.data.id
                                this.user_service.addCamaleonAdmin( user )
                                                .map( res => res.json() )
                                                .subscribe( ( response2 ) => {
                                                    if( !response2.error ) {
                                                        console.log( "User successfuly added!" )
                                                        this.router.navigateByUrl( '/business' )
                                                    } else {
                                                        console.log( "There was an error with the user; " + response2.message )
                                                    }
                                                })
                            } else {
                                console.log( "There was an error adding the business; " + response.message )
                            }
                        })
        }
    }
}