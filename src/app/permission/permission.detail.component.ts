import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { PermissionService } from './permission.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector : 'app-permission-detail',
    templateUrl : './permission.detail.component.html'
})
export class PermissionDetailComponent implements OnInit {

    public permission

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router, 
                    private service:PermissionService,
                    private activated_route:ActivatedRoute  ) { }
    
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        this.activated_route.params.subscribe( params => {
            let id = params[ 'id' ]
            this.getPermission( id )
        })
    }

    // Get permission by id
    // @params id the permission id
    // @returns none
    getPermission( id ) : void {
        this.service.detail( id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.permission = response.data
                } else {
                    console.log( "There was an error" )
                }
            })
    }

    // Delete function
    // this will delete a permission on the service
    // @params none
    // @returns none
    delete() : void {
        this.service.delete( this.permission.id )
            .map( res => res.json() )
            .subscribe( response => {
                if( !response.error ) {
                    this.router.navigateByUrl( '/permission' )
                } else {
                    console.log( "There was an error ", response.message, "." )
                }
            })
    }
}