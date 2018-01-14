import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { BusinessService } from './business.service'
import { LocationService } from '../locations/location.service'
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../users/user.service'
import { MonitorService } from '../monitor/monitor.service'

declare var jquery: any;
declare var $: any;
declare var Chart: any

@Component({
    selector: 'app-business-detail',
    templateUrl: './business.detail.component.html'
})
export class BusinessDetailComponent implements OnInit {

    public business
    public locations: Array<any> = []
    public errors: String = ""
    public successes: String = ""
    public camaleonadmin: Array<any> = []
    public user_reports: Array<any> = []
    public activity_page: Number
    public error_reports_page: Number
    public activity: Array<any> = []
    public error_reports: Array<any> = []
    public errorreport_reports: Array<any> = []
    public activity_reports: Array<any> = []

    public single: any[];
    public multi: any[];
    public data: any[];

    public view: any[] = [500,0];

    public showXAxis = true;
    public showYAxis = true;
    public gradient = false;
    public showLegend = true;
    public showXAxisLabel = true;
    public xAxisLabel = 'Date';
    public showYAxisLabel = true;
    public yAxisLabel = 'Reports';

    public colorScheme = {
        domain: ['#A10A28', '#5AA454']
    };

    public autoScale = true;

    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @param activated_route : service for getting the route params
    // @param location_service : location service
    // @param user_service : user service
    // @returns none
    constructor(    private auth_service: AuthService,
                    private router: Router,
                    private service: BusinessService,
                    private activated_route: ActivatedRoute,
                    private location_service: LocationService,
                    private user_service: UserService,
                    private monitor_service: MonitorService) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {

        // initialize page
        this.activity_page = 0
        this.error_reports_page = 0
        this.activated_route.params.subscribe(params => {
            let id = params['id']
            this.getBusiness(id)
            // Get the start date and the end date
            let d1 = ' 00:00:00',
                d2 = ' 23:59:59',
                today = new Date(),
                last_today = new Date();
            last_today.setDate( last_today.getDate() - 30 );

            d1 = ( last_today.getMonth() + 1 ) + '/' + last_today.getDate() + '/' + last_today.getFullYear() + d1;
            d2 = ( today.getMonth() + 1 ) + '/' + today.getDate() + '/' + today.getFullYear() + d2;
            
            // Get monitor reports by business_id, date1( start ) and date2( end )
            this.getMonitorReports(id, d1, d2)

        })

    }

    // Get business by id
    // @params id the business id
    // @returns none
    getBusiness(id): void {
        this.service.detail(id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.business = response.data
                    this.getLocations(id)
                    this.getUsers(id)
                    this.getActivity(id)
                    this.getErrorReports(id)
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get activity
    // Will get business activities
    // @params id integer - business id
    // @returns none
    getActivity(id): void {
        this.monitor_service.getActivityByBusiness(id, this.activity_page)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.activity = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get error reports
    // This will get the error reports on the system only in the api
    // @params id integer - business id
    // @returns none
    getErrorReports(id): void {
        this.monitor_service.getErrorReportsByBusiness(id, this.error_reports_page)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.error_reports = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get locations by business id
    // @params id business id
    // @returns none
    getLocations(id): void {
        this.location_service.getLocationsByBusinessId(id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.locations = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // Get all the users by business id
    // @params id
    // @returns none
    getUsers(id: Number): void {
        this.user_service.getUsersByBusinessId(id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.user_reports = response.data.userreports
                    this.camaleonadmin = response.data.camaleonadmin
                } else {
                    this.errors = response.message
                }
            })
    }

    // Delete function
    // this will delete a business on the service
    // @params none
    // @returns none
    delete(): void {
        this.service.delete(this.business.id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.router.navigateByUrl('/business')
                } else {
                    this.errors = response.message
                }
            })
    }

    // Cancel subscription
    // this will change the subscription status to canceled
    // @params id integer -  the business id
    // @returns none
    cancelSubscription(id): void {
        this.service.subCancel(id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.business = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // Pending subscription
    // this will change the subscription status to pending
    // @param id integer - business id
    // @returns none
    pendingSubscription(id): void {
        this.service.subPending(id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.business = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // Pay Subscription
    // This will change the subscription status to paid
    // @param id integer - business id
    // @returns none
    paySubscription(id): void {
        this.service.subPay(id)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.business = response.data
                } else {
                    this.errors = response.message
                }
            })
    }

    // getMonitorReports
    // returns all the activity and error reports
    // @param business_id : integer - Business id
    // @param date1 : string - the start date
    // @param date2 : string - the end date
    getMonitorReports(id, d1, d2): void {
        this.monitor_service.getReports(id, d1, d2)
            .map(res => res.json())
            .subscribe(response => {
                if (!response.error) {
                    this.activity_reports = response.data.activity_reports
                    this.errorreport_reports = response.data.error_reports
                    this.initCharts( this.errorreport_reports, this.activity_reports );
                } else {
                    this.errors = response.message
                }
            })
    }

    // InitCharts
    // This will initialize the charts on the comp
    // @param e_reports : array - error reports
    // @param a_reports : array - activity reports
    // @returns none
    initCharts( e_reports, a_reports ): void {

        this.multi = [
            {
                "name" : "Errors",
                "series" : []
            },
            {
                "name" : "Activities",
                "series" : []
            }
        ];

        e_reports.forEach( e_r => {
            this.multi[0].series.push( { "name" : e_r.timestamp, "value" : e_r.count } )
        });

        a_reports.forEach( a_r => {
            this.multi[1].series.push( { "name" : a_r.timestamp, "value" : a_r.count } )
        });

        let errs = e_reports.reduce( ( a, b ) => ( a + b.count ), 0 );
        let alts = a_reports.reduce( ( a, b ) => ( a + b.count ), 0 );

        this.data = [
            {
              "name": "Errors",
              "value": errs 
            },
            {
              "name": "Alerts",
              "value": alts
            }
        ];
    }

    onSelect(event) {
        console.log(event);
    }
}