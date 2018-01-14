import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BusinessService {

    // Constructor function
    // @param http_service : http petttions
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all businesses
    // @params none
    // @returns http get pettition
    getAll() : Observable<Response> { 
        return this.http_service.get( '/api/business/' )
    }

    // Add new business
    // @param data : business data
    // @returns http response
    add( data ) : Observable<Response> {
        return this.http_service.post( '/api/business/', data )
    }

    // Update business
    // @param data: business data
    // @returns http response
    update( data ) : Observable<Response> {
        return this.http_service.put( '/api/business/' + data.id, data )
    }

    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    detail( id ) : Observable<Response> {
        return this.http_service.get( '/api/business/' + id )
    }

    // Delete business by id
    // @param id : the location id
    // @returns Observable response
    delete( id ): Observable<Response> {
        return this.http_service.delete( '/api/business/' + id  )
    }

    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    subCancel( id ) : Observable<Response> {
        return this.http_service.get( '/api/subscription/cancel/' + id )
    }

    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    subPending( id ) : Observable<Response> {
        return this.http_service.get( '/api/subscription/pending/' + id )
    }

    // Retrieve the business by id
    // @param id : the business id
    // @returns Observable response
    subPay( id ) : Observable<Response> {
        return this.http_service.get( '/api/subscription/pay/' + id )
    }
}