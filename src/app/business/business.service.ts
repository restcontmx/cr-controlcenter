import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BusinessService {

    // Constructor function
    // @param http_service : http petttions
    // @returns none
    constructor( private http_service:Http ) {}

    // Get all businesses
    // @params none
    // @returns http get pettition
    getAll = () => this.http_service.get( '/api/business/' )
}