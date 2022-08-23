# .DefaultApi

All URIs are relative to *https://www.beeminder.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chargesJsonPost**](DefaultApi.md#chargesJsonPost) | **POST** /charges.json | Create a new charge against a user.
[**usersUserIdGoalsArchivedJsonGet**](DefaultApi.md#usersUserIdGoalsArchivedJsonGet) | **GET** /users/{userId}/goals/archived.json | 
[**usersUserIdGoalsGoalSlugCancelStepdownJsonPost**](DefaultApi.md#usersUserIdGoalsGoalSlugCancelStepdownJsonPost) | **POST** /users/{userId}/goals/{goalSlug}/cancel_stepdown.json | Cancel a pending stepdown of a goal&#39;s pledge. The pledge will remain at the current amount.
[**usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost**](DefaultApi.md#usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost) | **POST** /users/{userId}/goals/{goalSlug}/datapoints/create_all.json | Add all new datapoints to userId&#39;s goal goalSlug.
[**usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete**](DefaultApi.md#usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete) | **DELETE** /users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json | Delete the datapoint with id.
[**usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut**](DefaultApi.md#usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut) | **PUT** /users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json | Update the datapoint with id.
[**usersUserIdGoalsGoalSlugDatapointsJsonGet**](DefaultApi.md#usersUserIdGoalsGoalSlugDatapointsJsonGet) | **GET** /users/{userId}/goals/{goalSlug}/datapoints.json | Get all the datapoints for userId&#39;s goal goalSlug. beeminder.com/u/g
[**usersUserIdGoalsGoalSlugDatapointsJsonPost**](DefaultApi.md#usersUserIdGoalsGoalSlugDatapointsJsonPost) | **POST** /users/{userId}/goals/{goalSlug}/datapoints.json | add a new datapoint to userId&#39;s goal goalSlug.
[**usersUserIdGoalsGoalSlugJsonGet**](DefaultApi.md#usersUserIdGoalsGoalSlugJsonGet) | **GET** /users/{userId}/goals/{goalSlug}.json | 
[**usersUserIdGoalsGoalSlugJsonPut**](DefaultApi.md#usersUserIdGoalsGoalSlugJsonPut) | **PUT** /users/{userId}/goals/{goalSlug}.json | Update a goal for a user.
[**usersUserIdGoalsGoalSlugRefreshGraphJsonGet**](DefaultApi.md#usersUserIdGoalsGoalSlugRefreshGraphJsonGet) | **GET** /users/{userId}/goals/{goalSlug}/refresh_graph.json | Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
[**usersUserIdGoalsGoalSlugShortcircuitJsonPost**](DefaultApi.md#usersUserIdGoalsGoalSlugShortcircuitJsonPost) | **POST** /users/{userId}/goals/{goalSlug}/shortcircuit.json | Increase the goal&#39;s pledge level and charge the user the amount of the current pledge.
[**usersUserIdGoalsGoalSlugStepdownJsonPost**](DefaultApi.md#usersUserIdGoalsGoalSlugStepdownJsonPost) | **POST** /users/{userId}/goals/{goalSlug}/stepdown.json | Decrease the goal&#39;s pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
[**usersUserIdGoalsJsonGet**](DefaultApi.md#usersUserIdGoalsJsonGet) | **GET** /users/{userId}/goals.json | Get user userId&#39;s goals, sorted in descending order of urgency.
[**usersUserIdGoalsJsonPost**](DefaultApi.md#usersUserIdGoalsJsonPost) | **POST** /users/{userId}/goals.json | Create a new goal for user userId.
[**usersUserIdJsonGet**](DefaultApi.md#usersUserIdJsonGet) | **GET** /users/{userId}.json | 


# **chargesJsonPost**
> ChargeResponse chargesJsonPost(chargeRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiChargesJsonPostRequest = {
  // ChargeRequest
  chargeRequest: {
    userId: "userId_example",
    amount: 3.14,
    note: "note_example",
    dryrun: "false",
  },
};

apiInstance.chargesJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeRequest** | **ChargeRequest**|  |


### Return type

**ChargeResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsArchivedJsonGet**
> Array<Goal> usersUserIdGoalsArchivedJsonGet()

Get user userId's archived goals.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsArchivedJsonGetRequest = {
  // string | The username of the user to fetch goals from.
  userId: "userId_example",
};

apiInstance.usersUserIdGoalsArchivedJsonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The username of the user to fetch goals from. | defaults to undefined


### Return type

**Array<Goal>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugCancelStepdownJsonPost**
> Goal usersUserIdGoalsGoalSlugCancelStepdownJsonPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugCancelStepdownJsonPostRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal to cancel step down.
  goalSlug: "goalSlug_example",
};

apiInstance.usersUserIdGoalsGoalSlugCancelStepdownJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to cancel step down. | defaults to undefined


### Return type

**Goal**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost**
> Array<Datapoint> usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(createDatapointRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugDatapointsCreateAllJsonPostRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal to add a datapoint to.
  goalSlug: "goalSlug_example",
  // Array<CreateDatapointRequest>
  createDatapointRequest: [
    {
      value: 3.14,
      timestamp: 1,
      daystamp: "20150831",
      comment: "comment_example",
      requestId: "requestId_example",
    },
  ],
};

apiInstance.usersUserIdGoalsGoalSlugDatapointsCreateAllJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDatapointRequest** | **Array<CreateDatapointRequest>**|  |
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to add a datapoint to. | defaults to undefined


### Return type

**Array<Datapoint>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete**
> Datapoint usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDeleteRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal.
  goalSlug: "goalSlug_example",
  // string | ID of the datapoint to edit.
  datapointId: "datapointId_example",
};

apiInstance.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal. | defaults to undefined
 **datapointId** | [**string**] | ID of the datapoint to edit. | defaults to undefined


### Return type

**Datapoint**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut**
> Datapoint usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(updateDatapointRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPutRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal.
  goalSlug: "goalSlug_example",
  // string | ID of the datapoint to edit.
  datapointId: "datapointId_example",
  // Array<UpdateDatapointRequest>
  updateDatapointRequest: [
    {
      value: 3.14,
      timestamp: 1,
      comment: "comment_example",
    },
  ],
};

apiInstance.usersUserIdGoalsGoalSlugDatapointsDatapointIdJsonPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDatapointRequest** | **Array<UpdateDatapointRequest>**|  |
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal. | defaults to undefined
 **datapointId** | [**string**] | ID of the datapoint to edit. | defaults to undefined


### Return type

**Datapoint**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugDatapointsJsonGet**
> Array<Datapoint> usersUserIdGoalsGoalSlugDatapointsJsonGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugDatapointsJsonGetRequest = {
  // string | User ID from whose goals to fetch datapoints.
  userId: "userId_example",
  // string | Name of the goal to fetch datapoints from.
  goalSlug: "goalSlug_example",
  // string | Which attribute to sort on. Defaults to 'id' if none given. (optional)
  sort: "sort_example",
  // number | Limit results to count number of datapoints. Defaults to all datapoints if parameter is missing. (optional)
  count: 1,
  // number | Used to paginate results. (optional)
  page: 1,
  // number | Number of results per page. Default 25. Ignored without page parameter. (optional)
  per: 1,
};

apiInstance.usersUserIdGoalsGoalSlugDatapointsJsonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID from whose goals to fetch datapoints. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to fetch datapoints from. | defaults to undefined
 **sort** | [**string**] | Which attribute to sort on. Defaults to &#39;id&#39; if none given. | (optional) defaults to undefined
 **count** | [**number**] | Limit results to count number of datapoints. Defaults to all datapoints if parameter is missing. | (optional) defaults to undefined
 **page** | [**number**] | Used to paginate results. | (optional) defaults to undefined
 **per** | [**number**] | Number of results per page. Default 25. Ignored without page parameter. | (optional) defaults to undefined


### Return type

**Array<Datapoint>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugDatapointsJsonPost**
> Datapoint usersUserIdGoalsGoalSlugDatapointsJsonPost(createDatapointRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugDatapointsJsonPostRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal to add a datapoint to.
  goalSlug: "goalSlug_example",
  // CreateDatapointRequest
  createDatapointRequest: {
    value: 3.14,
    timestamp: 1,
    daystamp: "20150831",
    comment: "comment_example",
    requestId: "requestId_example",
  },
};

apiInstance.usersUserIdGoalsGoalSlugDatapointsJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDatapointRequest** | **CreateDatapointRequest**|  |
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to add a datapoint to. | defaults to undefined


### Return type

**Datapoint**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugJsonGet**
> Goal usersUserIdGoalsGoalSlugJsonGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugJsonGetRequest = {
  // string | User ID to fetch a goal from.
  userId: "userId_example",
  // string | Name of the goal to fetch.
  goalSlug: "goalSlug_example",
};

apiInstance.usersUserIdGoalsGoalSlugJsonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID to fetch a goal from. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to fetch. | defaults to undefined


### Return type

**Goal**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugJsonPut**
> Goal usersUserIdGoalsGoalSlugJsonPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugJsonPutRequest = {
  // string | User ID to fetch a goal from.
  userId: "userId_example",
  // string | Name of the goal to update.
  goalSlug: "goalSlug_example",
  // GoalUpdateRequest (optional)
  goalUpdateRequest: {
    title: "title_example",
    yaxis: "yaxis_example",
    tmin: "tmin_example",
    tmax: "tmax_example",
    secret: true,
    datapublic: true,
    roadall: [
      [
        3.14,
      ],
    ],
    datasource: "manual",
    tags: [
      "tags_example",
    ],
  },
};

apiInstance.usersUserIdGoalsGoalSlugJsonPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalUpdateRequest** | **GoalUpdateRequest**|  |
 **userId** | [**string**] | User ID to fetch a goal from. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to update. | defaults to undefined


### Return type

**Goal**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugRefreshGraphJsonGet**
> boolean usersUserIdGoalsGoalSlugRefreshGraphJsonGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugRefreshGraphJsonGetRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal to refresh.
  goalSlug: "goalSlug_example",
};

apiInstance.usersUserIdGoalsGoalSlugRefreshGraphJsonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to refresh. | defaults to undefined


### Return type

**boolean**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugShortcircuitJsonPost**
> Goal usersUserIdGoalsGoalSlugShortcircuitJsonPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugShortcircuitJsonPostRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal to short circuit.
  goalSlug: "goalSlug_example",
};

apiInstance.usersUserIdGoalsGoalSlugShortcircuitJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to short circuit. | defaults to undefined


### Return type

**Goal**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsGoalSlugStepdownJsonPost**
> Goal usersUserIdGoalsGoalSlugStepdownJsonPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsGoalSlugStepdownJsonPostRequest = {
  // string | User ID.
  userId: "userId_example",
  // string | Name of the goal to step down.
  goalSlug: "goalSlug_example",
};

apiInstance.usersUserIdGoalsGoalSlugStepdownJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID. | defaults to undefined
 **goalSlug** | [**string**] | Name of the goal to step down. | defaults to undefined


### Return type

**Goal**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsJsonGet**
> Array<Goal> usersUserIdGoalsJsonGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsJsonGetRequest = {
  // string | The username of the user to fetch goals from.
  userId: "userId_example",
};

apiInstance.usersUserIdGoalsJsonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The username of the user to fetch goals from. | defaults to undefined


### Return type

**Array<Goal>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGoalsJsonPost**
> Goal usersUserIdGoalsJsonPost(goalCreateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdGoalsJsonPostRequest = {
  // string | The username of the user to fetch goals from.
  userId: "userId_example",
  // GoalCreateRequest
  goalCreateRequest: {
    slug: "rapid",
    title: "play at least one game of rapid chess a day.",
    goalType: "hustler",
    gunits: "gunits_example",
    goaldate: 3.14,
    goalval: 3.14,
    rate: 3.14,
    initval: 3.14,
    secret: false,
    datapublic: true,
    datasource: "manual",
    dryrun: false,
    tags: [
      "tags_example",
    ],
  },
};

apiInstance.usersUserIdGoalsJsonPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goalCreateRequest** | **GoalCreateRequest**|  |
 **userId** | [**string**] | The username of the user to fetch goals from. | defaults to undefined


### Return type

**Goal**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdJsonGet**
> UsersUserIdJsonGet200Response usersUserIdJsonGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUsersUserIdJsonGetRequest = {
  // string | User ID to fetch
  userId: "userId_example",
  // boolean | Convenience method to fetch all information about a user. Use sparingly. (optional)
  associations: true,
  // number | Send a Unix timestamp to receive a filtered list of the user's goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user's associations, so you don't need to send both. (optional)
  diffSince: 1,
  // boolean | Only get a subset of attributes and most recent datapoint. Must be used together with `diff_since`. (optional)
  skinny: true,
  // number | Number of datapoints to receive, sorted by updated_at. (optional)
  datapointsCount: 1,
  // string | Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL. (optional)
  redirectToUrl: "redirect_to_url_example",
};

apiInstance.usersUserIdJsonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | User ID to fetch | defaults to undefined
 **associations** | [**boolean**] | Convenience method to fetch all information about a user. Use sparingly. | (optional) defaults to undefined
 **diffSince** | [**number**] | Send a Unix timestamp to receive a filtered list of the user&#39;s goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user&#39;s associations, so you don&#39;t need to send both. | (optional) defaults to undefined
 **skinny** | [**boolean**] | Only get a subset of attributes and most recent datapoint. Must be used together with &#x60;diff_since&#x60;. | (optional) defaults to undefined
 **datapointsCount** | [**number**] | Number of datapoints to receive, sorted by updated_at. | (optional) defaults to undefined
 **redirectToUrl** | [**string**] | Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL. | (optional) defaults to undefined


### Return type

**UsersUserIdJsonGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


