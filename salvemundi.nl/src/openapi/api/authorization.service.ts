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

import { ConfirmationDTO } from "../model/confirmationDTO";
import { LoginDTO } from "../model/loginDTO";
import { MeDTO } from "../model/meDTO";
import { User } from "../model/user";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class AuthorizationService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * confirmation
     * This call is used to activate an user. It will return an authorization cookie when succesful
     * @param confirmationDTO 
     
     */
    public confirmEmail(confirmationDTO: ConfirmationDTO, observe?: 'body', headers?: Headers): Observable<User>;
    public confirmEmail(confirmationDTO: ConfirmationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public confirmEmail(confirmationDTO: ConfirmationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (confirmationDTO === null || confirmationDTO === undefined){
            throw new Error('Required parameter confirmationDTO was null or undefined when calling confirmEmail.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<User>> = this.httpClient.post(`${this.basePath}/authorization/confirmation`, confirmationDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <User>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * login
     * This call is used to login an user. It will return an authorization cookie when succesful
     * @param loginDTO 
     
     */
    public login(loginDTO: LoginDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public login(loginDTO: LoginDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public login(loginDTO: LoginDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (loginDTO === null || loginDTO === undefined){
            throw new Error('Required parameter loginDTO was null or undefined when calling login.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/authorization/login`, loginDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * me
     * This call is used to get the user from the FHICT api
     * @param token 
     
     */
    public me(token: string, observe?: 'body', headers?: Headers): Observable<MeDTO>;
    public me(token: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<MeDTO>>;
    public me(token: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (token === null || token === undefined){
            throw new Error('Required parameter token was null or undefined when calling me.');
        }

        let queryParameters: string[] = [];
        if (token !== undefined) {
            queryParameters.push("token="+encodeURIComponent(String(token)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<MeDTO>> = this.httpClient.get(`${this.basePath}/authorization/me?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <MeDTO>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * register
     * This call is used to register an user
     * @param firstName 
     * @param lastName 
     * @param birthday 
     * @param address 
     * @param city 
     * @param postalcode 
     * @param country 
     * @param email 
     * @param phoneNumber 
     * @param pcn 
     * @param profilePicture 
     
     */
    public regiser(firstName: string, lastName: string, birthday: string, address: string, city: string, postalcode: string, country: string, email: string, phoneNumber: string, pcn: string, profilePicture: Blob, observe?: 'body', headers?: Headers): Observable<User>;
    public regiser(firstName: string, lastName: string, birthday: string, address: string, city: string, postalcode: string, country: string, email: string, phoneNumber: string, pcn: string, profilePicture: Blob, observe?: 'response', headers?: Headers): Observable<HttpResponse<User>>;
    public regiser(firstName: string, lastName: string, birthday: string, address: string, city: string, postalcode: string, country: string, email: string, phoneNumber: string, pcn: string, profilePicture: Blob, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (firstName === null || firstName === undefined){
            throw new Error('Required parameter firstName was null or undefined when calling regiser.');
        }

        if (lastName === null || lastName === undefined){
            throw new Error('Required parameter lastName was null or undefined when calling regiser.');
        }

        if (birthday === null || birthday === undefined){
            throw new Error('Required parameter birthday was null or undefined when calling regiser.');
        }

        if (address === null || address === undefined){
            throw new Error('Required parameter address was null or undefined when calling regiser.');
        }

        if (city === null || city === undefined){
            throw new Error('Required parameter city was null or undefined when calling regiser.');
        }

        if (postalcode === null || postalcode === undefined){
            throw new Error('Required parameter postalcode was null or undefined when calling regiser.');
        }

        if (country === null || country === undefined){
            throw new Error('Required parameter country was null or undefined when calling regiser.');
        }

        if (email === null || email === undefined){
            throw new Error('Required parameter email was null or undefined when calling regiser.');
        }

        if (phoneNumber === null || phoneNumber === undefined){
            throw new Error('Required parameter phoneNumber was null or undefined when calling regiser.');
        }

        if (pcn === null || pcn === undefined){
            throw new Error('Required parameter pcn was null or undefined when calling regiser.');
        }

        if (profilePicture === null || profilePicture === undefined){
            throw new Error('Required parameter profilePicture was null or undefined when calling regiser.');
        }

        headers['Accept'] = 'application/json';

        let formData: FormData = new FormData();
        headers['Content-Type'] = 'multipart/form-data';
        if (firstName !== undefined) {
            formData.append('firstName', <any>firstName);
        }
        if (lastName !== undefined) {
            formData.append('lastName', <any>lastName);
        }
        if (birthday !== undefined) {
            formData.append('birthday', <any>birthday);
        }
        if (address !== undefined) {
            formData.append('address', <any>address);
        }
        if (city !== undefined) {
            formData.append('city', <any>city);
        }
        if (postalcode !== undefined) {
            formData.append('postalcode', <any>postalcode);
        }
        if (country !== undefined) {
            formData.append('country', <any>country);
        }
        if (email !== undefined) {
            formData.append('email', <any>email);
        }
        if (phoneNumber !== undefined) {
            formData.append('phoneNumber', <any>phoneNumber);
        }
        if (pcn !== undefined) {
            formData.append('pcn', <any>pcn);
        }
        if (profilePicture !== undefined) {
            formData.append('profilePicture', <any>profilePicture);
        }

        const response: Observable<HttpResponse<User>> = this.httpClient.post(`${this.basePath}/authorization/register`, formData, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <User>(httpResponse.response))
               );
        }
        return response;
    }

}
