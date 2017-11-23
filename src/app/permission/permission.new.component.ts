import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { PermissionService} from './permission.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { UserService } from '../users/user.service'

@Component({
    selector: 'app-permission-new',
    templateUrl: './permission.new.component.html'
})
export class PermissionNewComponent implements OnInit {

    public errors : String = ""
    public messages : String = ""

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router, 
                    private service:PermissionService,
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
    add = (permissionForm: NgForm) => {
        if( permissionForm.valid ) {
            // Add new business 
            // Add new user with the bussines_id 
            let permission = {
                    name : permissionForm.value.name,
                    description : permissionForm.value.description,
                    value : permissionForm.value.value,
                    web_url : permissionForm.value.web_url
                }

            this.service.add( permission )
                        .map( res => res.json() )
                        .subscribe( ( response ) => {
                            if( !response.error ) {
                                this.router.navigateByUrl( '/permission' )
                            } else {
                                console.log( "There was an error adding the business; " + response.message )
                            }
                        })
        }
    }
}