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

export class GoalContract {
    'amount'?: number;
    'stepdownAmount'?: number;
    'pendingAmount'?: number;
    'pendingAt'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "stepdownAmount",
            "baseName": "stepdown_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "pendingAmount",
            "baseName": "pending_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "pendingAt",
            "baseName": "pending_at",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoalContract.attributeTypeMap;
    }

    public constructor() {
    }
}

