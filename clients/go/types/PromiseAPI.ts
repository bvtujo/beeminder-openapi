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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new charge against a user.
     * @param chargeRequest 
     */
    public chargesJsonPost(chargeRequest: ChargeRequest, _options?: Configuration): Promise<ChargeResponse> {
        const result = this.api.chargesJsonPost(chargeRequest, _options);
        return result.toPromise();
    }

    /**
     * Get user userId's archived goals.
     * @param userId The username of the user to fetch goals from.
     */
    public usersUserIdGoalsArchivedJsonGet(userId: string, _options?: Configuration): Promise<Array<Goal>> {
        const result = this.api.usersUserIdGoalsArchivedJsonGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Cancel a pending stepdown of a goal's pledge. The pledge will remain at the current amount.
     * @param userId User ID.
     * @param goalSlug Name of the goal to cancel step down.
     */
    public usersUserIdGoalsGoalSlugCancelStepdownJsonPost(userId: string, goalSlug: string, _options?: Configuration): Promise<Goal> {
        const result = this.api.usersUserIdGoalsGoalSlugCancelStepdownJsonPost(userId, goalSlug, _options);
        return result.toPromise();
    }

    /**
     * Add all new datapoints to userId's goal goalSlug.
     * @param userId User ID.
     * @param goalSlug Name of the goal to add a datapoint to.
     * @param createDatapointRequest 
     */
    public usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(userId: string, goalSlug: string, createDatapointRequest: Array<CreateDatapointRequest>, _options?: Configuration): Promise<Array<Datapoint>> {
        const result = this.api.usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(userId, goalSlug, createDatapointRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete the datapoint with id.
     * @param userId User ID.
     * @param goalSlug Name of the goal.
     * @param datapointId ID of the datapoint to edit.
     */
    public usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(userId: string, goalSlug: string, datapointId: string, _options?: Configuration): Promise<Datapoint> {
        const result = this.api.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(userId, goalSlug, datapointId, _options);
        return result.toPromise();
    }

    /**
     * Update the datapoint with id.
     * @param userId User ID.
     * @param goalSlug Name of the goal.
     * @param datapointId ID of the datapoint to edit.
     * @param updateDatapointRequest 
     */
    public usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(userId: string, goalSlug: string, datapointId: string, updateDatapointRequest: Array<UpdateDatapointRequest>, _options?: Configuration): Promise<Datapoint> {
        const result = this.api.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(userId, goalSlug, datapointId, updateDatapointRequest, _options);
        return result.toPromise();
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
    public usersUserIdGoalsGoalSlugDatapointsJsonGet(userId: string, goalSlug: string, sort?: string, count?: number, page?: number, per?: number, _options?: Configuration): Promise<Array<Datapoint>> {
        const result = this.api.usersUserIdGoalsGoalSlugDatapointsJsonGet(userId, goalSlug, sort, count, page, per, _options);
        return result.toPromise();
    }

    /**
     * add a new datapoint to userId's goal goalSlug.
     * @param userId User ID.
     * @param goalSlug Name of the goal to add a datapoint to.
     * @param createDatapointRequest 
     */
    public usersUserIdGoalsGoalSlugDatapointsJsonPost(userId: string, goalSlug: string, createDatapointRequest: CreateDatapointRequest, _options?: Configuration): Promise<Datapoint> {
        const result = this.api.usersUserIdGoalsGoalSlugDatapointsJsonPost(userId, goalSlug, createDatapointRequest, _options);
        return result.toPromise();
    }

    /**
     * @param userId User ID to fetch a goal from.
     * @param goalSlug Name of the goal to fetch.
     */
    public usersUserIdGoalsGoalSlugJsonGet(userId: string, goalSlug: string, _options?: Configuration): Promise<Goal> {
        const result = this.api.usersUserIdGoalsGoalSlugJsonGet(userId, goalSlug, _options);
        return result.toPromise();
    }

    /**
     * Update a goal for a user.
     * @param userId User ID to fetch a goal from.
     * @param goalSlug Name of the goal to update.
     * @param goalUpdateRequest 
     */
    public usersUserIdGoalsGoalSlugJsonPut(userId: string, goalSlug: string, goalUpdateRequest?: GoalUpdateRequest, _options?: Configuration): Promise<Goal> {
        const result = this.api.usersUserIdGoalsGoalSlugJsonPut(userId, goalSlug, goalUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
     * @param userId User ID.
     * @param goalSlug Name of the goal to refresh.
     */
    public usersUserIdGoalsGoalSlugRefreshGraphJsonGet(userId: string, goalSlug: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.usersUserIdGoalsGoalSlugRefreshGraphJsonGet(userId, goalSlug, _options);
        return result.toPromise();
    }

    /**
     * Increase the goal's pledge level and charge the user the amount of the current pledge.
     * @param userId User ID.
     * @param goalSlug Name of the goal to short circuit.
     */
    public usersUserIdGoalsGoalSlugShortcircuitJsonPost(userId: string, goalSlug: string, _options?: Configuration): Promise<Goal> {
        const result = this.api.usersUserIdGoalsGoalSlugShortcircuitJsonPost(userId, goalSlug, _options);
        return result.toPromise();
    }

    /**
     * Decrease the goal's pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
     * @param userId User ID.
     * @param goalSlug Name of the goal to step down.
     */
    public usersUserIdGoalsGoalSlugStepdownJsonPost(userId: string, goalSlug: string, _options?: Configuration): Promise<Goal> {
        const result = this.api.usersUserIdGoalsGoalSlugStepdownJsonPost(userId, goalSlug, _options);
        return result.toPromise();
    }

    /**
     * Get user userId's goals, sorted in descending order of urgency.
     * @param userId The username of the user to fetch goals from.
     */
    public usersUserIdGoalsJsonGet(userId: string, _options?: Configuration): Promise<Array<Goal>> {
        const result = this.api.usersUserIdGoalsJsonGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Create a new goal for user userId.
     * @param userId The username of the user to fetch goals from.
     * @param goalCreateRequest 
     */
    public usersUserIdGoalsJsonPost(userId: string, goalCreateRequest: GoalCreateRequest, _options?: Configuration): Promise<Goal> {
        const result = this.api.usersUserIdGoalsJsonPost(userId, goalCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param userId User ID to fetch
     * @param associations Convenience method to fetch all information about a user. Use sparingly.
     * @param diffSince Send a Unix timestamp to receive a filtered list of the user&#39;s goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user&#39;s associations, so you don&#39;t need to send both.
     * @param skinny Only get a subset of attributes and most recent datapoint. Must be used together with &#x60;diff_since&#x60;.
     * @param datapointsCount Number of datapoints to receive, sorted by updated_at.
     * @param redirectToUrl Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL.
     */
    public usersUserIdJsonGet(userId: string, associations?: boolean, diffSince?: number, skinny?: boolean, datapointsCount?: number, redirectToUrl?: string, _options?: Configuration): Promise<UsersUserIdJsonGet200Response> {
        const result = this.api.usersUserIdJsonGet(userId, associations, diffSince, skinny, datapointsCount, redirectToUrl, _options);
        return result.toPromise();
    }


}



