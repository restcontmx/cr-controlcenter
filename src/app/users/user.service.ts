import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SetupService } from '../auth/setup.service';

@Injectable()
export class UserService {

    // Constructor function
    // @param http_service : Http service
    // @returns none
    constructor(    private http_service:Http,
                    private setup_service:SetupService  ) {}

    // Add new camaleon admin user
    // @params data
    // @returns json user data
    addCamaleonAdmin = ( data ) => {
        return this.http_service.post( this.setup_service.getAPIUri() + 'user/camaleonadmin/', data )
    }

    // Get all the users by business id
    // @params id : integer
    // @returns Observable response
    getUsersByBusinessId( id ) : Observable<Response> {
        return this.http_service.get( `${this.setup_service.getAPIUri()}user/bybusiness/${id}` )
    }
    
}