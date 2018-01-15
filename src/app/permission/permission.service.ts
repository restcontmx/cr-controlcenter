import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SetupService } from '../auth/setup.service';

@Injectable()
export class PermissionService {

    // Constructor function
    // @param http_service : http petttions
    // @returns none
    constructor(    private http_service:Http,
                    private setup_service:SetupService  ) {}

    // Get all permissiones
    // @params none
    // @returns http get pettition
    getAll( ) : Observable<Response> { 
        return this.http_service.get( this.setup_service.getAPIUri() + 'permission/' )
    }

    // Add new permission
    // @param data : permission data
    // @returns http response
    add( data ) : Observable<Response> {
        return this.http_service.post( this.setup_service.getAPIUri() + 'permission/', data )
    }

    // Update permission
    // @param data: permission data
    // @returns http response
    update( data ) : Observable<Response> {
        return this.http_service.put( this.setup_service.getAPIUri() + 'permission/' + data.id, data )
    }

    // Retrieve the permission by id
    // @param id : the permission id
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( this.setup_service.getAPIUri() + 'permission/' + id )
    }

    // Delete permission by id
    // @param id : the location id
    // @returns Observable response
    delete( id ): Observable<Response> {
        return this.http_service.delete( this.setup_service.getAPIUri() + 'permission/' + id  )
    }
}