/**
 * Beeminder
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Beeminder provides an endpoint to charge an arbitrary amount to a Beeminder user. The user is inferred from the access_token or auth_token provided.
*/
export class ChargeResponse {
    /**
    * The unique ID of the charge.
    */
    'id'?: string;
    /**
    * The amount of the charge.
    */
    'amount'?: number;
    /**
    * An optional note describing the charge.
    */
    'note'?: string;
    /**
    * The user id this charge was applied to.
    */
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChargeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
