// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ChargeRequest } from '../models/ChargeRequest';
import { ChargeResponse } from '../models/ChargeResponse';
import { CreateDatapointRequest } from '../models/CreateDatapointRequest';
import { Datapoint } from '../models/Datapoint';
import { Goal } from '../models/Goal';
import { GoalCreateRequest } from '../models/GoalCreateRequest';
import { GoalUpdateRequest } from '../models/GoalUpdateRequest';
import { UpdateDatapointRequest } from '../models/UpdateDatapointRequest';
import { UsersUserIdJsonGet200Response } from '../models/UsersUserIdJsonGet200Response';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new charge against a user.
     * @param chargeRequest 
     */
    public async chargesJsonPost(chargeRequest: ChargeRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chargeRequest' is not null or undefined
        if (chargeRequest === null || chargeRequest === undefined) {
            throw new RequiredError("DefaultApi", "chargesJsonPost", "chargeRequest");
        }


        // Path Params
        const localVarPath = '/charges.json';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(chargeRequest, "ChargeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get user userId's archived goals.
     * @param userId The username of the user to fetch goals from.
     */
    public async usersUserIdGoalsArchivedJsonGet(userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsArchivedJsonGet", "userId");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/archived.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Cancel a pending stepdown of a goal's pledge. The pledge will remain at the current amount.
     * @param userId User ID.
     * @param goalSlug Name of the goal to cancel step down.
     */
    public async usersUserIdGoalsGoalSlugCancelStepdownJsonPost(userId: string, goalSlug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugCancelStepdownJsonPost", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugCancelStepdownJsonPost", "goalSlug");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/cancel_stepdown.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add all new datapoints to userId's goal goalSlug.
     * @param userId User ID.
     * @param goalSlug Name of the goal to add a datapoint to.
     * @param createDatapointRequest 
     */
    public async usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(userId: string, goalSlug: string, createDatapointRequest: Array<CreateDatapointRequest>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost", "goalSlug");
        }


        // verify required parameter 'createDatapointRequest' is not null or undefined
        if (createDatapointRequest === null || createDatapointRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost", "createDatapointRequest");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/datapoints/create_all.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createDatapointRequest, "Array<CreateDatapointRequest>", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete the datapoint with id.
     * @param userId User ID.
     * @param goalSlug Name of the goal.
     * @param datapointId ID of the datapoint to edit.
     */
    public async usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(userId: string, goalSlug: string, datapointId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete", "goalSlug");
        }


        // verify required parameter 'datapointId' is not null or undefined
        if (datapointId === null || datapointId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete", "datapointId");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)))
            .replace('{' + 'datapointId' + '}', encodeURIComponent(String(datapointId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the datapoint with id.
     * @param userId User ID.
     * @param goalSlug Name of the goal.
     * @param datapointId ID of the datapoint to edit.
     * @param updateDatapointRequest 
     */
    public async usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(userId: string, goalSlug: string, datapointId: string, updateDatapointRequest: Array<UpdateDatapointRequest>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut", "goalSlug");
        }


        // verify required parameter 'datapointId' is not null or undefined
        if (datapointId === null || datapointId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut", "datapointId");
        }


        // verify required parameter 'updateDatapointRequest' is not null or undefined
        if (updateDatapointRequest === null || updateDatapointRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut", "updateDatapointRequest");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)))
            .replace('{' + 'datapointId' + '}', encodeURIComponent(String(datapointId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDatapointRequest, "Array<UpdateDatapointRequest>", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all the datapoints for userId's goal goalSlug. beeminder.com/u/g
     * @param userId User ID from whose goals to fetch datapoints.
     * @param goalSlug Name of the goal to fetch datapoints from.
     * @param sort Which attribute to sort on. Defaults to &#39;id&#39; if none given.
     * @param count Limit results to count number of datapoints. Defaults to all datapoints if parameter is missing.
     * @param page Used to paginate results.
     * @param per Number of results per page. Default 25. Ignored without page parameter.
     */
    public async usersUserIdGoalsGoalSlugDatapointsJsonGet(userId: string, goalSlug: string, sort?: string, count?: number, page?: number, per?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsJsonGet", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsJsonGet", "goalSlug");
        }






        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/datapoints.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "string", ""));
        }

        // Query Params
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (per !== undefined) {
            requestContext.setQueryParam("per", ObjectSerializer.serialize(per, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * add a new datapoint to userId's goal goalSlug.
     * @param userId User ID.
     * @param goalSlug Name of the goal to add a datapoint to.
     * @param createDatapointRequest 
     */
    public async usersUserIdGoalsGoalSlugDatapointsJsonPost(userId: string, goalSlug: string, createDatapointRequest: CreateDatapointRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsJsonPost", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsJsonPost", "goalSlug");
        }


        // verify required parameter 'createDatapointRequest' is not null or undefined
        if (createDatapointRequest === null || createDatapointRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugDatapointsJsonPost", "createDatapointRequest");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/datapoints.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createDatapointRequest, "CreateDatapointRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param userId User ID to fetch a goal from.
     * @param goalSlug Name of the goal to fetch.
     */
    public async usersUserIdGoalsGoalSlugJsonGet(userId: string, goalSlug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugJsonGet", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugJsonGet", "goalSlug");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a goal for a user.
     * @param userId User ID to fetch a goal from.
     * @param goalSlug Name of the goal to update.
     * @param goalUpdateRequest 
     */
    public async usersUserIdGoalsGoalSlugJsonPut(userId: string, goalSlug: string, goalUpdateRequest?: GoalUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugJsonPut", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugJsonPut", "goalSlug");
        }



        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(goalUpdateRequest, "GoalUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
     * @param userId User ID.
     * @param goalSlug Name of the goal to refresh.
     */
    public async usersUserIdGoalsGoalSlugRefreshGraphJsonGet(userId: string, goalSlug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugRefreshGraphJsonGet", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugRefreshGraphJsonGet", "goalSlug");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/refresh_graph.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Increase the goal's pledge level and charge the user the amount of the current pledge.
     * @param userId User ID.
     * @param goalSlug Name of the goal to short circuit.
     */
    public async usersUserIdGoalsGoalSlugShortcircuitJsonPost(userId: string, goalSlug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugShortcircuitJsonPost", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugShortcircuitJsonPost", "goalSlug");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/shortcircuit.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Decrease the goal's pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
     * @param userId User ID.
     * @param goalSlug Name of the goal to step down.
     */
    public async usersUserIdGoalsGoalSlugStepdownJsonPost(userId: string, goalSlug: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugStepdownJsonPost", "userId");
        }


        // verify required parameter 'goalSlug' is not null or undefined
        if (goalSlug === null || goalSlug === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsGoalSlugStepdownJsonPost", "goalSlug");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals/{goalSlug}/stepdown.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'goalSlug' + '}', encodeURIComponent(String(goalSlug)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get user userId's goals, sorted in descending order of urgency.
     * @param userId The username of the user to fetch goals from.
     */
    public async usersUserIdGoalsJsonGet(userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsJsonGet", "userId");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new goal for user userId.
     * @param userId The username of the user to fetch goals from.
     * @param goalCreateRequest 
     */
    public async usersUserIdGoalsJsonPost(userId: string, goalCreateRequest: GoalCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsJsonPost", "userId");
        }


        // verify required parameter 'goalCreateRequest' is not null or undefined
        if (goalCreateRequest === null || goalCreateRequest === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdGoalsJsonPost", "goalCreateRequest");
        }


        // Path Params
        const localVarPath = '/users/{userId}/goals.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(goalCreateRequest, "GoalCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param userId User ID to fetch
     * @param associations Convenience method to fetch all information about a user. Use sparingly.
     * @param diffSince Send a Unix timestamp to receive a filtered list of the user&#39;s goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user&#39;s associations, so you don&#39;t need to send both.
     * @param skinny Only get a subset of attributes and most recent datapoint. Must be used together with &#x60;diff_since&#x60;.
     * @param datapointsCount Number of datapoints to receive, sorted by updated_at.
     * @param redirectToUrl Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL.
     */
    public async usersUserIdJsonGet(userId: string, associations?: boolean, diffSince?: number, skinny?: boolean, datapointsCount?: number, redirectToUrl?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("DefaultApi", "usersUserIdJsonGet", "userId");
        }







        // Path Params
        const localVarPath = '/users/{userId}.json'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer.serialize(associations, "boolean", ""));
        }

        // Query Params
        if (diffSince !== undefined) {
            requestContext.setQueryParam("diff_since", ObjectSerializer.serialize(diffSince, "number", ""));
        }

        // Query Params
        if (skinny !== undefined) {
            requestContext.setQueryParam("skinny", ObjectSerializer.serialize(skinny, "boolean", ""));
        }

        // Query Params
        if (datapointsCount !== undefined) {
            requestContext.setQueryParam("datapoints_count", ObjectSerializer.serialize(datapointsCount, "number", ""));
        }

        // Query Params
        if (redirectToUrl !== undefined) {
            requestContext.setQueryParam("redirect_to_url", ObjectSerializer.serialize(redirectToUrl, "string", "url"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to chargesJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async chargesJsonPost(response: ResponseContext): Promise<ChargeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ChargeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeResponse", ""
            ) as ChargeResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChargeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChargeResponse", ""
            ) as ChargeResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsArchivedJsonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsArchivedJsonGet(response: ResponseContext): Promise<Array<Goal> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Goal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Goal>", ""
            ) as Array<Goal>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Goal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Goal>", ""
            ) as Array<Goal>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugCancelStepdownJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugCancelStepdownJsonPost(response: ResponseContext): Promise<Goal > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(response: ResponseContext): Promise<Array<Datapoint> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Array<Datapoint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Datapoint>", ""
            ) as Array<Datapoint>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Datapoint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Datapoint>", ""
            ) as Array<Datapoint>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(response: ResponseContext): Promise<Datapoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Datapoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Datapoint", ""
            ) as Datapoint;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Datapoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Datapoint", ""
            ) as Datapoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(response: ResponseContext): Promise<Datapoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Datapoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Datapoint", ""
            ) as Datapoint;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Datapoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Datapoint", ""
            ) as Datapoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugDatapointsJsonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugDatapointsJsonGet(response: ResponseContext): Promise<Array<Datapoint> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Datapoint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Datapoint>", ""
            ) as Array<Datapoint>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Datapoint> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Datapoint>", ""
            ) as Array<Datapoint>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugDatapointsJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugDatapointsJsonPost(response: ResponseContext): Promise<Datapoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Datapoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Datapoint", ""
            ) as Datapoint;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Datapoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Datapoint", ""
            ) as Datapoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugJsonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugJsonGet(response: ResponseContext): Promise<Goal > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugJsonPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugJsonPut(response: ResponseContext): Promise<Goal > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugRefreshGraphJsonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugRefreshGraphJsonGet(response: ResponseContext): Promise<boolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugShortcircuitJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugShortcircuitJsonPost(response: ResponseContext): Promise<Goal > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsGoalSlugStepdownJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsGoalSlugStepdownJsonPost(response: ResponseContext): Promise<Goal > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsJsonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsJsonGet(response: ResponseContext): Promise<Array<Goal> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Goal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Goal>", ""
            ) as Array<Goal>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Goal> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Goal>", ""
            ) as Array<Goal>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdGoalsJsonPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdGoalsJsonPost(response: ResponseContext): Promise<Goal > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Goal = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Goal", ""
            ) as Goal;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersUserIdJsonGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersUserIdJsonGet(response: ResponseContext): Promise<UsersUserIdJsonGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsersUserIdJsonGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersUserIdJsonGet200Response", ""
            ) as UsersUserIdJsonGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UsersUserIdJsonGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsersUserIdJsonGet200Response", ""
            ) as UsersUserIdJsonGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
