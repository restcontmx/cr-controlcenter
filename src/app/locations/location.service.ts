import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LocationService {

    // Constructor function
    // @param http_service : http petttions
    // @returns none
    constructor(private http_service: Http) { }

    // Get all locationes
    // @params none
    // @returns http get pettition
    getAll(): Observable<Response> {
        return this.http_service.get('/api/location')
    }

    // Add new location
    // @param data : location data
    // @returns http response
    add( data ): Observable<Response> {
        return this.http_service.post('/api/location/', data)
    }

    // Update location
    // @param data: location data
    // @returns http response
    update( data ): Observable<Response> {
        return this.http_service.put('/api/location/' + data.id, data)
    }

    // Retrieve the location by id
    // @param id : the location id
    // @returns Observable response
    detail( id ): Observable<Response> {
        return this.http_service.get('/api/location/' + id)
    }

    // Delete location by id
    // @param id : the location id
    // @returns Observable response
    delete( id ): Observable<Response> {
        return this.http_service.delete( '/api/location/' + id  )
    }

    // Get all locations by business id
    // @params id business_id
    // @returns Observable response
    getLocationsByBusinessId( id ) : Observable<Response> {
        return this.http_service.get( '/api/location/bybusiness?business_id=' + id )
    }
}