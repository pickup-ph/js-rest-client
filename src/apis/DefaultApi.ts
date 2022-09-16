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


import * as runtime from '../runtime';

/**
 * DefaultApi - interface
 * 
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * 
     * @summary Get server information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    appControllerGetServerInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     * Get server information
     */
    appControllerGetServerInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * Get server information
     */
    async appControllerGetServerInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get server information
     */
    async appControllerGetServerInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.appControllerGetServerInfoRaw(initOverrides);
        return await response.value();
    }

}
