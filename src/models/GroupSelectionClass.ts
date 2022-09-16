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
/**
 * 
 * @export
 * @interface GroupSelectionClass
 */
export interface GroupSelectionClass {
    /**
     * The unique bson identifier of the extra, to be used on the create cart endpoint
     * @type {string}
     * @memberof GroupSelectionClass
     */
    id?: string;
    /**
     * Nominated position of the extra in a list
     * @type {number}
     * @memberof GroupSelectionClass
     */
    position: number;
    /**
     * Random unique identifier for extras
     * @type {string}
     * @memberof GroupSelectionClass
     */
    extraCode: string;
    /**
     * Pertains to the regular price of the extra
     * @type {string}
     * @memberof GroupSelectionClass
     */
    price: string;
    /**
     * The name of the extra
     * @type {string}
     * @memberof GroupSelectionClass
     */
    name: string;
}

/**
 * Check if a given object implements the GroupSelectionClass interface.
 */
export function instanceOfGroupSelectionClass(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "position" in value;
    isInstance = isInstance && "extraCode" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GroupSelectionClassFromJSON(json: any): GroupSelectionClass {
    return GroupSelectionClassFromJSONTyped(json, false);
}

export function GroupSelectionClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupSelectionClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'position': json['position'],
        'extraCode': json['extra_code'],
        'price': json['price'],
        'name': json['name'],
    };
}

export function GroupSelectionClassToJSON(value?: GroupSelectionClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'position': value.position,
        'extra_code': value.extraCode,
        'price': value.price,
        'name': value.name,
    };
}

