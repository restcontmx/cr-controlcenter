import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { LocationsComponent } from './locations/locations.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/dashboard.component';
import { LoginComponent } from './auth/login.component';
import { AuthService } from './auth/auth.service';
import { BusinessService } from './business/business.service'
import { AlwaysAuthGuard } from './auth/alwaysauthguard.service'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', component: DashboardComponent,
    canActivate: [AlwaysAuthGuard],
    children : [
      {
        path: 'businesses',
        component: BusinessComponent
      }
    ]
  },  
];

@NgModule({
    declarations: [
        AppComponent,
        BusinessComponent,
        LocationsComponent,
        DashboardComponent,
        LoginComponent
    ],
    imports: [
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    providers: [
        AuthService,
        CookieService,
        BusinessService,
        AlwaysAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }