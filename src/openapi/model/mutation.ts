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


export interface Mutation { 
    id: number;
    entryReference: number;
    description: string;
    date: object;
    amount: number;
    debtorIban: string;
    imported: boolean;
    paymentMethod?: object;
    incomeStatement?: object;
}
