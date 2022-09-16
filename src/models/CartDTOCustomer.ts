/* tslint:disable */
/* eslint-disable */
/**
 * Pickup API
 * # Authorization   Pickup API accepts one type of authentication   <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomerDetailDTO } from './CustomerDetailDTO';
import {
    CustomerDetailDTOFromJSON,
    CustomerDetailDTOFromJSONTyped,
    CustomerDetailDTOToJSON,
} from './CustomerDetailDTO';

/**
 * Optional customer details, guest users can input their details on the checkout page
 * @export
 * @interface CartDTOCustomer
 */
export interface CartDTOCustomer {
    /**
     * 
     * @type {string}
     * @memberof CartDTOCustomer
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof CartDTOCustomer
     */
    lastName?: string;
    /**
     * The customer mobile number, does NOT support e164 format
     * @type {string}
     * @memberof CartDTOCustomer
     */
    mobileNumber?: string;
    /**
     * A valid customer personal or work email
     * @type {string}
     * @memberof CartDTOCustomer
     */
    email?: string;
}

/**
 * Check if a given object implements the CartDTOCustomer interface.
 */
export function instanceOfCartDTOCustomer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartDTOCustomerFromJSON(json: any): CartDTOCustomer {
    return CartDTOCustomerFromJSONTyped(json, false);
}

export function CartDTOCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartDTOCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'mobileNumber': !exists(json, 'mobile_number') ? undefined : json['mobile_number'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function CartDTOCustomerToJSON(value?: CartDTOCustomer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'mobile_number': value.mobileNumber,
        'email': value.email,
    };
}

