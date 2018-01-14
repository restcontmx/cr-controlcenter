import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MonitorService {

    // Constructor function
    // @param http_service : http pettitions
    // @returns none
    constructor( private http_service:Http ) {}

    // getActivityByBusiness 
    // @param id integer - business id
    // @param p integer - pagination number
    // @returns http_get_pettition
    getActivityByBusiness( id, p ) : Observable<Response> {
        return this.http_service.get( '/api/monitor/business/activity/' + id + '?p=' + p )
    }

    // getErrorReportsByBusiness
    // @param id integer - business id
    // @param p integer - pagination number
    // @reutrns http_get_pettition
    getErrorReportsByBusiness( id, p ) : Observable<Response> {
        return this.http_service.get( '/api/monitor/business/errorreport/' + id + '?p=' + p )
    }

    // createActivityType creates new activity type
    // @params data - activity type body
    // @return observable response
    createActivityType( data ) : Observable<Response> {
        return this.http_service.post( '/api/monitor/activitytype/', data )
    }

    // getAllActivityType returns all the activity types
    // @params none
    // @returns Observable response
    getAllActivityType() : Observable<Response> {
        return this.http_service.get( '/api/monitor/activitytype/' )
    }

    // getReports return all the activity reports and error reports
    // @param business_id : Integer - the business id
    // @param date1 : string - the start date in string
    // @param date2 : string - the end date in string
    // @returns Observable Response
    getReports( business_id, date1, date2 ) : Observable<Response> {
        return this.http_service.get( `/api/monitor/reports/${business_id}?d1=${date1}&d2=${date2}` )
    }
}