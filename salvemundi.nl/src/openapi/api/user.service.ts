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

import { SummaryUserDto } from "../model/summaryUserDto";
import { UpdateUserDto } from "../model/updateUserDto";
import { User } from "../model/user";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class UserService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * 
     * 
     * @param id 
     
     */
    public getPicture(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public getPicture(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public getPicture(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling getPicture.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.get(`${this.basePath}/user/${encodeURIComponent(String(id))}/photo`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * delete
     * This call is used to delete a user
     * @param id 
     
     */
    public userDeleteOne(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public userDeleteOne(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public userDeleteOne(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling userDeleteOne.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.delete(`${this.basePath}/user/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * getAll
     * This call is used to get a summary of all the users
     * @param skip 
     * @param take 
     
     */
    public userReadAll(skip: number, take: number, observe?: 'body', headers?: Headers): Observable<Array<SummaryUserDto>>;
    public userReadAll(skip: number, take: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<SummaryUserDto>>>;
    public userReadAll(skip: number, take: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (skip === null || skip === undefined){
            throw new Error('Required parameter skip was null or undefined when calling userReadAll.');
        }

        if (take === null || take === undefined){
            throw new Error('Required parameter take was null or undefined when calling userReadAll.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<SummaryUserDto>>> = this.httpClient.get(`${this.basePath}/user`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Array<SummaryUserDto>>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * me
     * This call is used to get the current user
     
     */
    public userReadMe(observe?: 'body', headers?: Headers): Observable<User>;
    public userReadMe(observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public userReadMe(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<User>> = this.httpClient.get(`${this.basePath}/user/me`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <User>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * getOne
     * This call is used to get a specific user
     * @param id 
     
     */
    public userReadOne(id: number, observe?: 'body', headers?: Headers): Observable<User>;
    public userReadOne(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public userReadOne(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling userReadOne.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<User>> = this.httpClient.get(`${this.basePath}/user/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <User>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * me
     * This call is used to update the current user
     * @param updateUserDto 
     
     */
    public userUpdateMe(updateUserDto: UpdateUserDto, observe?: 'body', headers?: Headers): Observable<User>;
    public userUpdateMe(updateUserDto: UpdateUserDto, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public userUpdateMe(updateUserDto: UpdateUserDto, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (updateUserDto === null || updateUserDto === undefined){
            throw new Error('Required parameter updateUserDto was null or undefined when calling userUpdateMe.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<User>> = this.httpClient.put(`${this.basePath}/user/me`, updateUserDto , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <User>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * update
     * This call is used to update a user
     * @param updateUserDto 
     
     */
    public userUpdateOne(updateUserDto: UpdateUserDto, observe?: 'body', headers?: Headers): Observable<User>;
    public userUpdateOne(updateUserDto: UpdateUserDto, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public userUpdateOne(updateUserDto: UpdateUserDto, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (updateUserDto === null || updateUserDto === undefined){
            throw new Error('Required parameter updateUserDto was null or undefined when calling userUpdateOne.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<User>> = this.httpClient.put(`${this.basePath}/user`, updateUserDto , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <User>(httpResponse.response))
               );
        }
        return response;
    }

}
