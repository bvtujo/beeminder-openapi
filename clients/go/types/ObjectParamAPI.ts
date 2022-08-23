import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BigUser } from '../models/BigUser';
import { BigUserDeletedGoalsInner } from '../models/BigUserDeletedGoalsInner';
import { ChargeRequest } from '../models/ChargeRequest';
import { ChargeResponse } from '../models/ChargeResponse';
import { CreateDatapointRequest } from '../models/CreateDatapointRequest';
import { Datapoint } from '../models/Datapoint';
import { Goal } from '../models/Goal';
import { GoalContract } from '../models/GoalContract';
import { GoalCreateRequest } from '../models/GoalCreateRequest';
import { GoalDuebyValue } from '../models/GoalDuebyValue';
import { GoalRecentDataInner } from '../models/GoalRecentDataInner';
import { GoalRecentDataInnerId } from '../models/GoalRecentDataInnerId';
import { GoalUpdateRequest } from '../models/GoalUpdateRequest';
import { SmallUser } from '../models/SmallUser';
import { UpdateDatapointRequest } from '../models/UpdateDatapointRequest';
import { UsersUserIdJsonGet200Response } from '../models/UsersUserIdJsonGet200Response';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiChargesJsonPostRequest {
    /**
     * 
     * @type ChargeRequest
     * @memberof DefaultApichargesJsonPost
     */
    chargeRequest: ChargeRequest
}

export interface DefaultApiUsersUserIdGoalsArchivedJsonGetRequest {
    /**
     * The username of the user to fetch goals from.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsArchivedJsonGet
     */
    userId: string
}

export interface DefaultApiUsersUserIdGoalsGoalSlugCancelStepdownJsonPostRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugCancelStepdownJsonPost
     */
    userId: string
    /**
     * Name of the goal to cancel step down.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugCancelStepdownJsonPost
     */
    goalSlug: string
}

export interface DefaultApiUsersUserIdGoalsGoalSlugDatapointsCreateAllJsonPostRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost
     */
    userId: string
    /**
     * Name of the goal to add a datapoint to.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost
     */
    goalSlug: string
    /**
     * 
     * @type Array&lt;CreateDatapointRequest&gt;
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost
     */
    createDatapointRequest: Array<CreateDatapointRequest>
}

export interface DefaultApiUsersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDeleteRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete
     */
    userId: string
    /**
     * Name of the goal.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete
     */
    goalSlug: string
    /**
     * ID of the datapoint to edit.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete
     */
    datapointId: string
}

export interface DefaultApiUsersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPutRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut
     */
    userId: string
    /**
     * Name of the goal.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut
     */
    goalSlug: string
    /**
     * ID of the datapoint to edit.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut
     */
    datapointId: string
    /**
     * 
     * @type Array&lt;UpdateDatapointRequest&gt;
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut
     */
    updateDatapointRequest: Array<UpdateDatapointRequest>
}

export interface DefaultApiUsersUserIdGoalsGoalSlugDatapointsJsonGetRequest {
    /**
     * User ID from whose goals to fetch datapoints.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonGet
     */
    userId: string
    /**
     * Name of the goal to fetch datapoints from.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonGet
     */
    goalSlug: string
    /**
     * Which attribute to sort on. Defaults to &#39;id&#39; if none given.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonGet
     */
    sort?: string
    /**
     * Limit results to count number of datapoints. Defaults to all datapoints if parameter is missing.
     * @type number
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonGet
     */
    count?: number
    /**
     * Used to paginate results.
     * @type number
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonGet
     */
    page?: number
    /**
     * Number of results per page. Default 25. Ignored without page parameter.
     * @type number
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonGet
     */
    per?: number
}

export interface DefaultApiUsersUserIdGoalsGoalSlugDatapointsJsonPostRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonPost
     */
    userId: string
    /**
     * Name of the goal to add a datapoint to.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonPost
     */
    goalSlug: string
    /**
     * 
     * @type CreateDatapointRequest
     * @memberof DefaultApiusersUserIdGoalsGoalSlugDatapointsJsonPost
     */
    createDatapointRequest: CreateDatapointRequest
}

export interface DefaultApiUsersUserIdGoalsGoalSlugJsonGetRequest {
    /**
     * User ID to fetch a goal from.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugJsonGet
     */
    userId: string
    /**
     * Name of the goal to fetch.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugJsonGet
     */
    goalSlug: string
}

export interface DefaultApiUsersUserIdGoalsGoalSlugJsonPutRequest {
    /**
     * User ID to fetch a goal from.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugJsonPut
     */
    userId: string
    /**
     * Name of the goal to update.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugJsonPut
     */
    goalSlug: string
    /**
     * 
     * @type GoalUpdateRequest
     * @memberof DefaultApiusersUserIdGoalsGoalSlugJsonPut
     */
    goalUpdateRequest?: GoalUpdateRequest
}

export interface DefaultApiUsersUserIdGoalsGoalSlugRefreshGraphJsonGetRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugRefreshGraphJsonGet
     */
    userId: string
    /**
     * Name of the goal to refresh.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugRefreshGraphJsonGet
     */
    goalSlug: string
}

export interface DefaultApiUsersUserIdGoalsGoalSlugShortcircuitJsonPostRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugShortcircuitJsonPost
     */
    userId: string
    /**
     * Name of the goal to short circuit.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugShortcircuitJsonPost
     */
    goalSlug: string
}

export interface DefaultApiUsersUserIdGoalsGoalSlugStepdownJsonPostRequest {
    /**
     * User ID.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugStepdownJsonPost
     */
    userId: string
    /**
     * Name of the goal to step down.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsGoalSlugStepdownJsonPost
     */
    goalSlug: string
}

export interface DefaultApiUsersUserIdGoalsJsonGetRequest {
    /**
     * The username of the user to fetch goals from.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsJsonGet
     */
    userId: string
}

export interface DefaultApiUsersUserIdGoalsJsonPostRequest {
    /**
     * The username of the user to fetch goals from.
     * @type string
     * @memberof DefaultApiusersUserIdGoalsJsonPost
     */
    userId: string
    /**
     * 
     * @type GoalCreateRequest
     * @memberof DefaultApiusersUserIdGoalsJsonPost
     */
    goalCreateRequest: GoalCreateRequest
}

export interface DefaultApiUsersUserIdJsonGetRequest {
    /**
     * User ID to fetch
     * @type string
     * @memberof DefaultApiusersUserIdJsonGet
     */
    userId: string
    /**
     * Convenience method to fetch all information about a user. Use sparingly.
     * @type boolean
     * @memberof DefaultApiusersUserIdJsonGet
     */
    associations?: boolean
    /**
     * Send a Unix timestamp to receive a filtered list of the user&#39;s goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user&#39;s associations, so you don&#39;t need to send both.
     * @type number
     * @memberof DefaultApiusersUserIdJsonGet
     */
    diffSince?: number
    /**
     * Only get a subset of attributes and most recent datapoint. Must be used together with &#x60;diff_since&#x60;.
     * @type boolean
     * @memberof DefaultApiusersUserIdJsonGet
     */
    skinny?: boolean
    /**
     * Number of datapoints to receive, sorted by updated_at.
     * @type number
     * @memberof DefaultApiusersUserIdJsonGet
     */
    datapointsCount?: number
    /**
     * Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL.
     * @type string
     * @memberof DefaultApiusersUserIdJsonGet
     */
    redirectToUrl?: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new charge against a user.
     * @param param the request object
     */
    public chargesJsonPost(param: DefaultApiChargesJsonPostRequest, options?: Configuration): Promise<ChargeResponse> {
        return this.api.chargesJsonPost(param.chargeRequest,  options).toPromise();
    }

    /**
     * Get user userId's archived goals.
     * @param param the request object
     */
    public usersUserIdGoalsArchivedJsonGet(param: DefaultApiUsersUserIdGoalsArchivedJsonGetRequest, options?: Configuration): Promise<Array<Goal>> {
        return this.api.usersUserIdGoalsArchivedJsonGet(param.userId,  options).toPromise();
    }

    /**
     * Cancel a pending stepdown of a goal's pledge. The pledge will remain at the current amount.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugCancelStepdownJsonPost(param: DefaultApiUsersUserIdGoalsGoalSlugCancelStepdownJsonPostRequest, options?: Configuration): Promise<Goal> {
        return this.api.usersUserIdGoalsGoalSlugCancelStepdownJsonPost(param.userId, param.goalSlug,  options).toPromise();
    }

    /**
     * Add all new datapoints to userId's goal goalSlug.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(param: DefaultApiUsersUserIdGoalsGoalSlugDatapointsCreateAllJsonPostRequest, options?: Configuration): Promise<Array<Datapoint>> {
        return this.api.usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(param.userId, param.goalSlug, param.createDatapointRequest,  options).toPromise();
    }

    /**
     * Delete the datapoint with id.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(param: DefaultApiUsersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDeleteRequest, options?: Configuration): Promise<Datapoint> {
        return this.api.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(param.userId, param.goalSlug, param.datapointId,  options).toPromise();
    }

    /**
     * Update the datapoint with id.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(param: DefaultApiUsersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPutRequest, options?: Configuration): Promise<Datapoint> {
        return this.api.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(param.userId, param.goalSlug, param.datapointId, param.updateDatapointRequest,  options).toPromise();
    }

    /**
     * Get all the datapoints for userId's goal goalSlug. beeminder.com/u/g
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugDatapointsJsonGet(param: DefaultApiUsersUserIdGoalsGoalSlugDatapointsJsonGetRequest, options?: Configuration): Promise<Array<Datapoint>> {
        return this.api.usersUserIdGoalsGoalSlugDatapointsJsonGet(param.userId, param.goalSlug, param.sort, param.count, param.page, param.per,  options).toPromise();
    }

    /**
     * add a new datapoint to userId's goal goalSlug.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugDatapointsJsonPost(param: DefaultApiUsersUserIdGoalsGoalSlugDatapointsJsonPostRequest, options?: Configuration): Promise<Datapoint> {
        return this.api.usersUserIdGoalsGoalSlugDatapointsJsonPost(param.userId, param.goalSlug, param.createDatapointRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugJsonGet(param: DefaultApiUsersUserIdGoalsGoalSlugJsonGetRequest, options?: Configuration): Promise<Goal> {
        return this.api.usersUserIdGoalsGoalSlugJsonGet(param.userId, param.goalSlug,  options).toPromise();
    }

    /**
     * Update a goal for a user.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugJsonPut(param: DefaultApiUsersUserIdGoalsGoalSlugJsonPutRequest, options?: Configuration): Promise<Goal> {
        return this.api.usersUserIdGoalsGoalSlugJsonPut(param.userId, param.goalSlug, param.goalUpdateRequest,  options).toPromise();
    }

    /**
     * Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugRefreshGraphJsonGet(param: DefaultApiUsersUserIdGoalsGoalSlugRefreshGraphJsonGetRequest, options?: Configuration): Promise<boolean> {
        return this.api.usersUserIdGoalsGoalSlugRefreshGraphJsonGet(param.userId, param.goalSlug,  options).toPromise();
    }

    /**
     * Increase the goal's pledge level and charge the user the amount of the current pledge.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugShortcircuitJsonPost(param: DefaultApiUsersUserIdGoalsGoalSlugShortcircuitJsonPostRequest, options?: Configuration): Promise<Goal> {
        return this.api.usersUserIdGoalsGoalSlugShortcircuitJsonPost(param.userId, param.goalSlug,  options).toPromise();
    }

    /**
     * Decrease the goal's pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
     * @param param the request object
     */
    public usersUserIdGoalsGoalSlugStepdownJsonPost(param: DefaultApiUsersUserIdGoalsGoalSlugStepdownJsonPostRequest, options?: Configuration): Promise<Goal> {
        return this.api.usersUserIdGoalsGoalSlugStepdownJsonPost(param.userId, param.goalSlug,  options).toPromise();
    }

    /**
     * Get user userId's goals, sorted in descending order of urgency.
     * @param param the request object
     */
    public usersUserIdGoalsJsonGet(param: DefaultApiUsersUserIdGoalsJsonGetRequest, options?: Configuration): Promise<Array<Goal>> {
        return this.api.usersUserIdGoalsJsonGet(param.userId,  options).toPromise();
    }

    /**
     * Create a new goal for user userId.
     * @param param the request object
     */
    public usersUserIdGoalsJsonPost(param: DefaultApiUsersUserIdGoalsJsonPostRequest, options?: Configuration): Promise<Goal> {
        return this.api.usersUserIdGoalsJsonPost(param.userId, param.goalCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersUserIdJsonGet(param: DefaultApiUsersUserIdJsonGetRequest, options?: Configuration): Promise<UsersUserIdJsonGet200Response> {
        return this.api.usersUserIdJsonGet(param.userId, param.associations, param.diffSince, param.skinny, param.datapointsCount, param.redirectToUrl,  options).toPromise();
    }

}
