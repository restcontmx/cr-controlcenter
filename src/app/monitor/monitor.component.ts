import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { MonitorService } from './monitor.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html'
})
export class MonitorComponent implements OnInit {

      // Constructor function
      // @param authservice: authentication service
      // @param router : router service
      // @returns none
      constructor( private auth_service:AuthService, private router:Router, private service:MonitorService ) { }

      // Init function
      // This will initialize the consturctor and validates login
      // @params none
      // @returns void
      ngOnInit(): void {}

}
