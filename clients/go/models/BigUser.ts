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

import { BigUserDeletedGoalsInner } from './BigUserDeletedGoalsInner';
import { Goal } from './Goal';
import { HttpFile } from '../http/http';

export class BigUser {
    'username'?: string;
    'timezone'?: string;
    'updatedAt'?: number;
    'createdAt'?: number;
    'urgencyLoad'?: number;
    'deadbeat'?: boolean;
    'deletedGoals'?: Array<BigUserDeletedGoalsInner>;
    'goals'?: Array<Goal>;

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
            "name": "deletedGoals",
            "baseName": "deleted_goals",
            "type": "Array<BigUserDeletedGoalsInner>",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "Array<Goal>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BigUser.attributeTypeMap;
    }

    public constructor() {
    }
}

