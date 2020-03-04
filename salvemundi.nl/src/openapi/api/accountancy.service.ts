/**
 * Salve mundi API
 * Salve mundi API documentation
 *
<<<<<<< HEAD
 * The version of the OpenAPI document: 1.0.0
=======
 * The version of the OpenAPI document: 1.1.1-beta1
>>>>>>> master
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

import { ActivationLinkDTO } from "../model/activationLinkDTO";
import { AddBalanceDTO } from "../model/addBalanceDTO";
import { AddIncomeStatementDTO } from "../model/addIncomeStatementDTO";
import { AddMutationDTO } from "../model/addMutationDTO";
import { BalanceDTO } from "../model/balanceDTO";
import { ImportMutationDTO } from "../model/importMutationDTO";
import { IncomeStatement } from "../model/incomeStatement";
import { IncomeStatementDTO } from "../model/incomeStatementDTO";
import { Mutation } from "../model/mutation";
import { NotImportedMutationDTO } from "../model/notImportedMutationDTO";
import { PaymentMethod } from "../model/paymentMethod";
import { SaveAuthorizationDTO } from "../model/saveAuthorizationDTO";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class AccountancyService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * Activates the Accountancy api
     * Activates the accountancy api using a Authorization code from the rabo api
     * @param saveAuthorizationDTO 
     
     */
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public activateApi(saveAuthorizationDTO: SaveAuthorizationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (saveAuthorizationDTO === null || saveAuthorizationDTO === undefined){
            throw new Error('Required parameter saveAuthorizationDTO was null or undefined when calling activateApi.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.post(`${this.basePath}/accountancy/activate`, saveAuthorizationDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Adds a balance / payment method
     * 
     * @param addBalanceDTO 
     
     */
    public addBalance(addBalanceDTO: AddBalanceDTO, observe?: 'body', headers?: Headers): Observable<PaymentMethod>;
    public addBalance(addBalanceDTO: AddBalanceDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentMethod>>;
    public addBalance(addBalanceDTO: AddBalanceDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (addBalanceDTO === null || addBalanceDTO === undefined){
            throw new Error('Required parameter addBalanceDTO was null or undefined when calling addBalance.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<PaymentMethod>> = this.httpClient.post(`${this.basePath}/accountancy/balance`, addBalanceDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <PaymentMethod>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Adds an income statement
     * 
     * @param addIncomeStatementDTO 
     
     */
    public addIncomeStatement(addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'body', headers?: Headers): Observable<IncomeStatement>;
    public addIncomeStatement(addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<IncomeStatement>>;
    public addIncomeStatement(addIncomeStatementDTO: AddIncomeStatementDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (addIncomeStatementDTO === null || addIncomeStatementDTO === undefined){
            throw new Error('Required parameter addIncomeStatementDTO was null or undefined when calling addIncomeStatement.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<IncomeStatement>> = this.httpClient.post(`${this.basePath}/accountancy/incomeStatement`, addIncomeStatementDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <IncomeStatement>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Adds a mutation
     * 
     * @param addMutationDTO 
     
     */
    public addMutation(addMutationDTO: AddMutationDTO, observe?: 'body', headers?: Headers): Observable<Mutation>;
    public addMutation(addMutationDTO: AddMutationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<Mutation>>;
    public addMutation(addMutationDTO: AddMutationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (addMutationDTO === null || addMutationDTO === undefined){
            throw new Error('Required parameter addMutationDTO was null or undefined when calling addMutation.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<Mutation>> = this.httpClient.post(`${this.basePath}/accountancy/mutation`, addMutationDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Mutation>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Deletes the balance / payment method
     * 
     * @param id 
     
     */
    public deleteBalance(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public deleteBalance(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public deleteBalance(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling deleteBalance.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.delete(`${this.basePath}/accountancy/balance/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Deletes the income statement
     * 
     * @param id 
     
     */
    public deleteIncomeStatement(id: number, observe?: 'body', headers?: Headers): Observable<any>;
    public deleteIncomeStatement(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public deleteIncomeStatement(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling deleteIncomeStatement.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.delete(`${this.basePath}/accountancy/incomeStatement/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Edits a balance / payment method
     * 
     * @param id 
     * @param addBalanceDTO 
     
     */
    public editBalance(id: number, addBalanceDTO: AddBalanceDTO, observe?: 'body', headers?: Headers): Observable<PaymentMethod>;
    public editBalance(id: number, addBalanceDTO: AddBalanceDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentMethod>>;
    public editBalance(id: number, addBalanceDTO: AddBalanceDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling editBalance.');
        }

        if (addBalanceDTO === null || addBalanceDTO === undefined){
            throw new Error('Required parameter addBalanceDTO was null or undefined when calling editBalance.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<PaymentMethod>> = this.httpClient.put(`${this.basePath}/accountancy/balance/${encodeURIComponent(String(id))}`, addBalanceDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <PaymentMethod>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Edits an income statement
     * 
     * @param id 
     * @param addIncomeStatementDTO 
     
     */
    public editIncomeStatement(id: number, addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'body', headers?: Headers): Observable<IncomeStatement>;
    public editIncomeStatement(id: number, addIncomeStatementDTO: AddIncomeStatementDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<IncomeStatement>>;
    public editIncomeStatement(id: number, addIncomeStatementDTO: AddIncomeStatementDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling editIncomeStatement.');
        }

        if (addIncomeStatementDTO === null || addIncomeStatementDTO === undefined){
            throw new Error('Required parameter addIncomeStatementDTO was null or undefined when calling editIncomeStatement.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<IncomeStatement>> = this.httpClient.put(`${this.basePath}/accountancy/incomeStatement/${encodeURIComponent(String(id))}`, addIncomeStatementDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <IncomeStatement>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Get the activation link from the rabobank api
     * 
     
     */
    public getActivationLink(observe?: 'body', headers?: Headers): Observable<ActivationLinkDTO>;
    public getActivationLink(observe?: 'response', headers?: Headers): Observable<HttpResponse<ActivationLinkDTO>>;
    public getActivationLink(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<ActivationLinkDTO>> = this.httpClient.get(`${this.basePath}/accountancy/activate`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <ActivationLinkDTO>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Gets the balance
     * 
     * @param till 
     * @param name 
     
     */
    public getBalance(till: string, name?: string, observe?: 'body', headers?: Headers): Observable<Array<BalanceDTO>>;
    public getBalance(till: string, name?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<BalanceDTO>>>;
    public getBalance(till: string, name?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (till === null || till === undefined){
            throw new Error('Required parameter till was null or undefined when calling getBalance.');
        }

        let queryParameters: string[] = [];
        if (till !== undefined) {
            queryParameters.push("till="+encodeURIComponent(String(till)));
        }
        if (name !== undefined) {
            queryParameters.push("name="+encodeURIComponent(String(name)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<BalanceDTO>>> = this.httpClient.get(`${this.basePath}/accountancy/balance?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Array<BalanceDTO>>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Gets the income statements
     * 
     * @param till 
     * @param name 
     
     */
    public getIncomeStatements(till: string, name?: string, observe?: 'body', headers?: Headers): Observable<Array<IncomeStatementDTO>>;
    public getIncomeStatements(till: string, name?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<IncomeStatementDTO>>>;
    public getIncomeStatements(till: string, name?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (till === null || till === undefined){
            throw new Error('Required parameter till was null or undefined when calling getIncomeStatements.');
        }

        let queryParameters: string[] = [];
        if (till !== undefined) {
            queryParameters.push("till="+encodeURIComponent(String(till)));
        }
        if (name !== undefined) {
            queryParameters.push("name="+encodeURIComponent(String(name)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<IncomeStatementDTO>>> = this.httpClient.get(`${this.basePath}/accountancy/incomeStatement?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Array<IncomeStatementDTO>>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Gets the mutations that are not imported yet
     * 
     
     */
    public getNotImportedMutations(observe?: 'body', headers?: Headers): Observable<Array<NotImportedMutationDTO>>;
    public getNotImportedMutations(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<NotImportedMutationDTO>>>;
    public getNotImportedMutations(observe: any = 'body', headers: Headers = {}): Observable<any> {
        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<Array<NotImportedMutationDTO>>> = this.httpClient.get(`${this.basePath}/accountancy/import`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <Array<NotImportedMutationDTO>>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * Imports a mutation
     * 
     * @param id 
     * @param importMutationDTO 
     
     */
    public importMutation(id: number, importMutationDTO: ImportMutationDTO, observe?: 'body', headers?: Headers): Observable<any>;
    public importMutation(id: number, importMutationDTO: ImportMutationDTO, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public importMutation(id: number, importMutationDTO: ImportMutationDTO, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling importMutation.');
        }

        if (importMutationDTO === null || importMutationDTO === undefined){
            throw new Error('Required parameter importMutationDTO was null or undefined when calling importMutation.');
        }

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<any>> = this.httpClient.put(`${this.basePath}/accountancy/import/${encodeURIComponent(String(id))}`, importMutationDTO , headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <any>(httpResponse.response))
               );
        }
        return response;
    }

}
