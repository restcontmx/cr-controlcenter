import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from '@angular/http'
import { CookieService } from 'ngx-cookie-service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BusinessComponent } from './business/business.component'
import { LocationsComponent } from './locations/locations.component'

import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './auth/dashboard.component'
import { NavBarComponent } from './menu/navbar.component'
import { SideBarComponent } from './menu/sidebar.component'
import { LoginComponent } from './auth/login.component'
import { AuthService } from './auth/auth.service'
import { BusinessService } from './business/business.service'
import { AlwaysAuthGuard } from './auth/alwaysauthguard.service'
import { BusinessListComponent } from './business/business.list.component'
import { BusinessNewComponent } from './business/business.new.component'
import { BusinessDetailComponent } from './business/business.detail.component'
import { BusinessEditComponent } from './business/business.edit.component'
import { LocationNewComponent } from './locations/location.new.component'
import { UserService } from './users/user.service'
import { LocationService } from './locations/location.service'

import { PermissionComponent } from './permission/permission.component'
import { PermissionDetailComponent } from './permission/permission.detail.component'
import { PermissionListComponent } from './permission/permission.list.component'
import { PermissionService } from './permission/permission.service'
import { PermissionNewComponent } from './permission/permission.new.component'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: '', component: DashboardComponent,
        canActivate: [AlwaysAuthGuard],
        children : [
            {
                path: 'business',
                component: BusinessComponent,
                children : [
                    { path : '', component : BusinessListComponent },
                    { path : 'new', component : BusinessNewComponent },
                    { path : 'detail/:id', component : BusinessDetailComponent },
                    { path : 'edit/:id', component : BusinessEditComponent },
                    { path : 'location/:id', component : LocationNewComponent }
                ]
            },
            {
                path: 'permission',
                component: PermissionComponent,
                children : [
                    { path : '', component : PermissionListComponent },
                    { path : 'new', component : PermissionNewComponent },                    
                    { path : 'detail/:id', component : PermissionDetailComponent }
                ]
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
        LoginComponent,
        NavBarComponent,
        SideBarComponent,
        BusinessListComponent,
        BusinessNewComponent,
        BusinessDetailComponent,
        BusinessEditComponent,
        LocationNewComponent,
        PermissionComponent,
        PermissionListComponent,
        PermissionDetailComponent,
        PermissionNewComponent
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
        AlwaysAuthGuard,
        UserService,
        LocationService,
        PermissionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }