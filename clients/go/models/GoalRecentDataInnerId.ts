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

export class GoalRecentDataInnerId {
    'oid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "oid",
            "baseName": "$oid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoalRecentDataInnerId.attributeTypeMap;
    }

    public constructor() {
    }
}

