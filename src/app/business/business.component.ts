import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { BusinessService } from './business.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

      // Constructor function
      // @param authservice: authentication service
      // @param router : router service
      // @returns none
      constructor( private auth_service:AuthService, private router:Router, private service:BusinessService ) { }

      // Init function
      // This will initialize the consturctor and validates login
      // @params none
      // @returns void
      ngOnInit(): void {}

}
