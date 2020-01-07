/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 2.4.1-beta14
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

import { Committee } from "../model/committee";
import { CreateCommissionDto } from "../model/createCommissionDto";
import { UpdateCommissionDto } from "../model/updateCommissionDto";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class CommitteeService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * create
     * This call is used to create a committee
     * @param createCommissionDto 
     
     */
    public committeeCreateOne(createCommissionDto: CreateCommissionDto, observe?: 'body', headers?: Headers): Observable<Committee>;
    public committeeCreateOne(createCommissionDto: CreateCommissionDto, observe?: 'response', headers?: Headers): Observable<HttpResponse<Committee>>;
    public committeeCreateOne(createCommissionDto: CreateCommissionDto, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (createCommissionDto === null || createCommissionDto === undefined){
            throw new Error('Required parameter createCommissionDto was null or undefined when calling committeeCreateOne.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<Committee>> = this.httpClient.post(`${this.basePath}/committee`, createCommissionDto , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Committee>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * delete
     * This call is used to delete a committee
     * @param id 
     
     */
    public committeeDeleteOne(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public committeeDeleteOne(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public committeeDeleteOne(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling committeeDeleteOne.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.delete(`${this.basePath}/committee/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * getAll
     * This call is used to get a summary of all the committees
     * @param skip 
     * @param take 
     
     */
    public committeeReadAll(skip: number, take: number, observe?: 'body', headers?: Headers): Observable<Array<Committee>>;
    public committeeReadAll(skip: number, take: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<Committee>>>;
    public committeeReadAll(skip: number, take: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (skip === null || skip === undefined){
            throw new Error('Required parameter skip was null or undefined when calling committeeReadAll.');
        }

        if (take === null || take === undefined){
            throw new Error('Required parameter take was null or undefined when calling committeeReadAll.');
        }

        let queryParameters: string[] = [];
        if (skip !== undefined) {
            queryParameters.push("skip="+encodeURIComponent(String(skip)));
        }
        if (take !== undefined) {
            queryParameters.push("take="+encodeURIComponent(String(take)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<Committee>>> = this.httpClient.get(`${this.basePath}/committee?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Array<Committee>>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * getOne
     * This call is used to get a specific committee
     * @param id 
     
     */
    public committeeReadOne(id: number, observe?: 'body', headers?: Headers): Observable<Committee>;
    public committeeReadOne(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Committee>>;
    public committeeReadOne(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling committeeReadOne.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Committee>> = this.httpClient.get(`${this.basePath}/committee/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Committee>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * update
     * This call is used to update a committee
     * @param updateCommissionDto 
     
     */
    public committeeUpdateOne(updateCommissionDto: UpdateCommissionDto, observe?: 'body', headers?: Headers): Observable<Committee>;
    public committeeUpdateOne(updateCommissionDto: UpdateCommissionDto, observe?: 'response', headers?: Headers): Observable<HttpResponse<Committee>>;
    public committeeUpdateOne(updateCommissionDto: UpdateCommissionDto, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (updateCommissionDto === null || updateCommissionDto === undefined){
            throw new Error('Required parameter updateCommissionDto was null or undefined when calling committeeUpdateOne.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<Committee>> = this.httpClient.put(`${this.basePath}/committee`, updateCommissionDto , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Committee>(httpResponse.response))
               );
        }
        return response;
    }

}
