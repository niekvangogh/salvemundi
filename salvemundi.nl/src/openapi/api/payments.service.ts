/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 1.1.1-beta1
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

import { PaymentDTO } from "../model/paymentDTO";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class PaymentsService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * membership
     * This call is creates a payment for a new membership
     * @param id 
     
     */
    public createPaymentForMembership(id: number, observe?: 'body', headers?: Headers): Observable<PaymentDTO>;
    public createPaymentForMembership(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentDTO>>;
    public createPaymentForMembership(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling createPaymentForMembership.');
        }

        let queryParameters: string[] = [];
        if (id !== undefined) {
            queryParameters.push("id="+encodeURIComponent(String(id)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<PaymentDTO>> = this.httpClient.get(`${this.basePath}/payments/membership?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <PaymentDTO>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * membership
     * This call is creates a payment for a new membership
     * @param token 
     
     */
    public createPaymentForRenewalMembership(token: string, observe?: 'body', headers?: Headers): Observable<PaymentDTO>;
    public createPaymentForRenewalMembership(token: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentDTO>>;
    public createPaymentForRenewalMembership(token: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (token === null || token === undefined){
            throw new Error('Required parameter token was null or undefined when calling createPaymentForRenewalMembership.');
        }

        let queryParameters: string[] = [];
        if (token !== undefined) {
            queryParameters.push("token="+encodeURIComponent(String(token)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<PaymentDTO>> = this.httpClient.get(`${this.basePath}/payments/membership-renewal?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <PaymentDTO>(httpResponse.response))
               );
        }
        return response;
    }

}
