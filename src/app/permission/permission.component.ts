import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-permission',
    templateUrl: './permission.component.html',
    styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor(    private auth_service:AuthService, 
                    private router:Router   ) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {}

}
