import { Injectable } from "@angular/core";
import { Http } from "@angular/http/src/http";

@Injectable()
export class SetupService {

    private DEVELOPMENT_MODE : boolean = false
    private dev_api_uri : string = "http://localhost:3333/api/"
    private prod_api_uri : string = "/api/"

    // Constructor function
    // @returns none
    constructor() {}

    getAPIUri() : String {
        return this.DEVELOPMENT_MODE ? this.dev_api_uri : this.prod_api_uri
    }
    
}