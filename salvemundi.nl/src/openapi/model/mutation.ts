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
import { IncomeStatement } from './incomeStatement';
import { PaymentMethod } from './paymentMethod';


export interface Mutation { 
    id: number;
    entryReference: number;
    description: string;
    date: object;
    amount: number;
    debtorIban: string;
    imported: boolean;
    paymentMethod?: PaymentMethod;
    incomeStatement?: IncomeStatement;
}