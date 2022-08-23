import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create a new charge against a user.
     * @param chargeRequest 
     */
    public chargesJsonPost(chargeRequest: ChargeRequest, _options?: Configuration): Observable<ChargeResponse> {
        const requestContextPromise = this.requestFactory.chargesJsonPost(chargeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.chargesJsonPost(rsp)));
            }));
    }

    /**
     * Get user userId's archived goals.
     * @param userId The username of the user to fetch goals from.
     */
    public usersUserIdGoalsArchivedJsonGet(userId: string, _options?: Configuration): Observable<Array<Goal>> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsArchivedJsonGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsArchivedJsonGet(rsp)));
            }));
    }

    /**
     * Cancel a pending stepdown of a goal's pledge. The pledge will remain at the current amount.
     * @param userId User ID.
     * @param goalSlug Name of the goal to cancel step down.
     */
    public usersUserIdGoalsGoalSlugCancelStepdownJsonPost(userId: string, goalSlug: string, _options?: Configuration): Observable<Goal> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugCancelStepdownJsonPost(userId, goalSlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugCancelStepdownJsonPost(rsp)));
            }));
    }

    /**
     * Add all new datapoints to userId's goal goalSlug.
     * @param userId User ID.
     * @param goalSlug Name of the goal to add a datapoint to.
     * @param createDatapointRequest 
     */
    public usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(userId: string, goalSlug: string, createDatapointRequest: Array<CreateDatapointRequest>, _options?: Configuration): Observable<Array<Datapoint>> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(userId, goalSlug, createDatapointRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(rsp)));
            }));
    }

    /**
     * Delete the datapoint with id.
     * @param userId User ID.
     * @param goalSlug Name of the goal.
     * @param datapointId ID of the datapoint to edit.
     */
    public usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(userId: string, goalSlug: string, datapointId: string, _options?: Configuration): Observable<Datapoint> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(userId, goalSlug, datapointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(rsp)));
            }));
    }

    /**
     * Update the datapoint with id.
     * @param userId User ID.
     * @param goalSlug Name of the goal.
     * @param datapointId ID of the datapoint to edit.
     * @param updateDatapointRequest 
     */
    public usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(userId: string, goalSlug: string, datapointId: string, updateDatapointRequest: Array<UpdateDatapointRequest>, _options?: Configuration): Observable<Datapoint> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(userId, goalSlug, datapointId, updateDatapointRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(rsp)));
            }));
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
    public usersUserIdGoalsGoalSlugDatapointsJsonGet(userId: string, goalSlug: string, sort?: string, count?: number, page?: number, per?: number, _options?: Configuration): Observable<Array<Datapoint>> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugDatapointsJsonGet(userId, goalSlug, sort, count, page, per, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugDatapointsJsonGet(rsp)));
            }));
    }

    /**
     * add a new datapoint to userId's goal goalSlug.
     * @param userId User ID.
     * @param goalSlug Name of the goal to add a datapoint to.
     * @param createDatapointRequest 
     */
    public usersUserIdGoalsGoalSlugDatapointsJsonPost(userId: string, goalSlug: string, createDatapointRequest: CreateDatapointRequest, _options?: Configuration): Observable<Datapoint> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugDatapointsJsonPost(userId, goalSlug, createDatapointRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugDatapointsJsonPost(rsp)));
            }));
    }

    /**
     * @param userId User ID to fetch a goal from.
     * @param goalSlug Name of the goal to fetch.
     */
    public usersUserIdGoalsGoalSlugJsonGet(userId: string, goalSlug: string, _options?: Configuration): Observable<Goal> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugJsonGet(userId, goalSlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugJsonGet(rsp)));
            }));
    }

    /**
     * Update a goal for a user.
     * @param userId User ID to fetch a goal from.
     * @param goalSlug Name of the goal to update.
     * @param goalUpdateRequest 
     */
    public usersUserIdGoalsGoalSlugJsonPut(userId: string, goalSlug: string, goalUpdateRequest?: GoalUpdateRequest, _options?: Configuration): Observable<Goal> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugJsonPut(userId, goalSlug, goalUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugJsonPut(rsp)));
            }));
    }

    /**
     * Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
     * @param userId User ID.
     * @param goalSlug Name of the goal to refresh.
     */
    public usersUserIdGoalsGoalSlugRefreshGraphJsonGet(userId: string, goalSlug: string, _options?: Configuration): Observable<boolean> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugRefreshGraphJsonGet(userId, goalSlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugRefreshGraphJsonGet(rsp)));
            }));
    }

    /**
     * Increase the goal's pledge level and charge the user the amount of the current pledge.
     * @param userId User ID.
     * @param goalSlug Name of the goal to short circuit.
     */
    public usersUserIdGoalsGoalSlugShortcircuitJsonPost(userId: string, goalSlug: string, _options?: Configuration): Observable<Goal> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugShortcircuitJsonPost(userId, goalSlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugShortcircuitJsonPost(rsp)));
            }));
    }

    /**
     * Decrease the goal's pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
     * @param userId User ID.
     * @param goalSlug Name of the goal to step down.
     */
    public usersUserIdGoalsGoalSlugStepdownJsonPost(userId: string, goalSlug: string, _options?: Configuration): Observable<Goal> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsGoalSlugStepdownJsonPost(userId, goalSlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsGoalSlugStepdownJsonPost(rsp)));
            }));
    }

    /**
     * Get user userId's goals, sorted in descending order of urgency.
     * @param userId The username of the user to fetch goals from.
     */
    public usersUserIdGoalsJsonGet(userId: string, _options?: Configuration): Observable<Array<Goal>> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsJsonGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsJsonGet(rsp)));
            }));
    }

    /**
     * Create a new goal for user userId.
     * @param userId The username of the user to fetch goals from.
     * @param goalCreateRequest 
     */
    public usersUserIdGoalsJsonPost(userId: string, goalCreateRequest: GoalCreateRequest, _options?: Configuration): Observable<Goal> {
        const requestContextPromise = this.requestFactory.usersUserIdGoalsJsonPost(userId, goalCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGoalsJsonPost(rsp)));
            }));
    }

    /**
     * @param userId User ID to fetch
     * @param associations Convenience method to fetch all information about a user. Use sparingly.
     * @param diffSince Send a Unix timestamp to receive a filtered list of the user&#39;s goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user&#39;s associations, so you don&#39;t need to send both.
     * @param skinny Only get a subset of attributes and most recent datapoint. Must be used together with &#x60;diff_since&#x60;.
     * @param datapointsCount Number of datapoints to receive, sorted by updated_at.
     * @param redirectToUrl Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL.
     */
    public usersUserIdJsonGet(userId: string, associations?: boolean, diffSince?: number, skinny?: boolean, datapointsCount?: number, redirectToUrl?: string, _options?: Configuration): Observable<UsersUserIdJsonGet200Response> {
        const requestContextPromise = this.requestFactory.usersUserIdJsonGet(userId, associations, diffSince, skinny, datapointsCount, redirectToUrl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdJsonGet(rsp)));
            }));
    }

}
