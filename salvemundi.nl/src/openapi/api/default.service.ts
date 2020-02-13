/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ict@salvemundi.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";


import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class DefaultService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * 
     * 
     
     */
    public confirmWebhookMembership(observe?: 'body', headers?: Headers): Observable<any>;
    public confirmWebhookMembership(observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public confirmWebhookMembership(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/webhook/membership`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * 
     * 
     * @param body 
     
     */
    public createEvent(body: object, observe?: 'body', headers?: Headers): Observable<any>;
    public createEvent(body: object, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public createEvent(body: object, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (body === null || body === undefined){
            throw new Error('Required parameter body was null or undefined when calling createEvent.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/events/create`, body , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * 
     * 
     * @param body 
     
     */
    public signup(body: object, observe?: 'body', headers?: Headers): Observable<any>;
    public signup(body: object, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public signup(body: object, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (body === null || body === undefined){
            throw new Error('Required parameter body was null or undefined when calling signup.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/events/signup`, body , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * 
     * 
     
     */
    public updateEvent(observe?: 'body', headers?: Headers): Observable<any>;
    public updateEvent(observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public updateEvent(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.put(`${this.basePath}/events/update`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }

}
