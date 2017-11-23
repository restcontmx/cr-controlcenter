import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PermissionService {

    // Constructor function
    // @param http_service : http petttions
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all permissiones
    // @params none
    // @returns http get pettition
    getAll( ) : Observable<Response> { 
        return this.http_service.get( '/api/permission/' )
    }

    // Add new permission
    // @param data : permission data
    // @returns http response
    add( data ) : Observable<Response> {
        return this.http_service.post( '/api/permission/', data )
    }

    // Update permission
    // @param data: permission data
    // @returns http response
    update( data ) : Observable<Response> {
        return this.http_service.put( '/api/permission/' + data.id, data )
    }

    // Retrieve the permission by id
    // @param id : the permission id
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( '/api/permission/' + id )
    }

    // Delete permission by id
    // @param id : the location id
    // @returns Observable response
    delete( id ): Observable<Response> {
        return this.http_service.delete( '/api/permission/' + id  )
    }
}