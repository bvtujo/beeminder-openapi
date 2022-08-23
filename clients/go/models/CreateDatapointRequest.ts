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

export class CreateDatapointRequest {
    'value'?: number;
    /**
    * The unix time (in seconds) of the datapoint.
    */
    'timestamp'?: number;
    /**
    * The date of the datapoint. Sometimes timestamps are surprising due to goal deadlines, so if you're looking at Beeminder data, you're probably interested in the daystamp.
    */
    'daystamp'?: string;
    /**
    * An optional comment about the datapoint.
    */
    'comment'?: string;
    /**
    * string to uniquely identify this datapoint (scoped to this goal. The same requestid can be used for different goals without being considered a duplicate). Clients can use this to verify that Beeminder received a datapoint (important for clients with spotty connectivity). Using requestids also means clients can safely resend datapoints without accidentally creating duplicates. If requestid is included and the datapoint is identical to the existing datapoint with that requestid then the datapoint will be ignored (the API will return \"duplicate datapoint\"). If requestid is included and the datapoint differs from the existing one with the same requestid then the datapoint will be updated. If no datapoint with the requestid exists then the datapoint is simply created. In other words, this is an upsert endpoint and requestid is an idempotency key.
    */
    'requestId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "daystamp",
            "baseName": "daystamp",
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
            "name": "requestId",
            "baseName": "requestId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateDatapointRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

