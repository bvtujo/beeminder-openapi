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

import { GoalRecentDataInnerId } from './GoalRecentDataInnerId';
import { HttpFile } from '../http/http';

export class GoalRecentDataInner {
    'id'?: GoalRecentDataInnerId;
    'fulltext'?: string;
    'canonical'?: string;
    'origin'?: string;
    'urtext'?: string;
    'measuredAt'?: string;
    'createdAt'?: string;
    'comment'?: string;
    'value'?: number;
    'daystamp'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "GoalRecentDataInnerId",
            "format": ""
        },
        {
            "name": "fulltext",
            "baseName": "fulltext",
            "type": "string",
            "format": ""
        },
        {
            "name": "canonical",
            "baseName": "canonical",
            "type": "string",
            "format": ""
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "urtext",
            "baseName": "urtext",
            "type": "string",
            "format": ""
        },
        {
            "name": "measuredAt",
            "baseName": "measured_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "daystamp",
            "baseName": "daystamp",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoalRecentDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}

