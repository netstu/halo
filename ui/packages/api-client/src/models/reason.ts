/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.11-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { ReasonSpec } from './reason-spec';

/**
 * 
 * @export
 * @interface Reason
 */
export interface Reason {
    /**
     * 
     * @type {string}
     * @memberof Reason
     */
    'apiVersion': string;
    /**
     * 
     * @type {string}
     * @memberof Reason
     */
    'kind': string;
    /**
     * 
     * @type {Metadata}
     * @memberof Reason
     */
    'metadata': Metadata;
    /**
     * 
     * @type {ReasonSpec}
     * @memberof Reason
     */
    'spec'?: ReasonSpec;
}

