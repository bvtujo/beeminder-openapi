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

export class SmallUser {
    'username'?: string;
    'timezone'?: string;
    'updatedAt'?: number;
    'createdAt'?: number;
    'urgencyLoad'?: number;
    'deadbeat'?: boolean;
    'goals'?: Array<string>;
    'hasAuthorizedFitbit'?: boolean;
    'defaultLeadtime'?: number;
    'defaultAlertstart'?: number;
    'defaultDeadline'?: number;
    'subscription'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "urgencyLoad",
            "baseName": "urgency_load",
            "type": "number",
            "format": ""
        },
        {
            "name": "deadbeat",
            "baseName": "deadbeat",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "hasAuthorizedFitbit",
            "baseName": "has_authorized_fitbit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "defaultLeadtime",
            "baseName": "default_leadtime",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultAlertstart",
            "baseName": "default_alertstart",
            "type": "number",
            "format": ""
        },
        {
            "name": "defaultDeadline",
            "baseName": "default_deadline",
            "type": "number",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SmallUser.attributeTypeMap;
    }

    public constructor() {
    }
}

