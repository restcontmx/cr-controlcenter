import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { PermissionService } from './permission.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-permission-list',
    templateUrl: './permission.list.component.html'
})
export class PermissionListComponent implements OnInit {

    public permissions : Array<any> = []

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router, 
                    private service:PermissionService ) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        this.getAllPermissions()
    }

    // Get all the permissions
    // retrieves all the permissions from the server
    // @params none
    // @returns none
    getAllPermissions = () => {
        this.service.getAll().map( res => res.json() )
            .subscribe( ( response ) => {
                this.permissions = response.data
            })
    }

}
