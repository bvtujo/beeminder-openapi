# \DefaultApi

All URIs are relative to *https://www.beeminder.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelStepdown**](DefaultApi.md#CancelStepdown) | **Post** /users/{userId}/goals/{goalSlug}/cancel_stepdown.json | Cancel a pending stepdown of a goal&#39;s pledge. The pledge will remain at the current amount.
[**CreateCharge**](DefaultApi.md#CreateCharge) | **Post** /charges.json | Create a new charge against a user.
[**CreateDatapoint**](DefaultApi.md#CreateDatapoint) | **Post** /users/{userId}/goals/{goalSlug}/datapoints.json | add a new datapoint to userId&#39;s goal goalSlug.
[**CreateDatapoints**](DefaultApi.md#CreateDatapoints) | **Post** /users/{userId}/goals/{goalSlug}/datapoints/create_all.json | Add all new datapoints to userId&#39;s goal goalSlug.
[**CreateGoal**](DefaultApi.md#CreateGoal) | **Post** /users/{userId}/goals.json | Create a new goal for user userId.
[**DeleteDatapoint**](DefaultApi.md#DeleteDatapoint) | **Delete** /users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json | Delete the datapoint with id.
[**GetArchivedGoals**](DefaultApi.md#GetArchivedGoals) | **Get** /users/{userId}/goals/archived.json | 
[**GetDatapoints**](DefaultApi.md#GetDatapoints) | **Get** /users/{userId}/goals/{goalSlug}/datapoints.json | Get all the datapoints for userId&#39;s goal goalSlug. beeminder.com/u/g
[**GetGoal**](DefaultApi.md#GetGoal) | **Get** /users/{userId}/goals/{goalSlug}.json | 
[**GetGoals**](DefaultApi.md#GetGoals) | **Get** /users/{userId}/goals.json | Get user userId&#39;s goals, sorted in descending order of urgency.
[**GetUser**](DefaultApi.md#GetUser) | **Get** /users/{userId}.json | 
[**RefreshGraph**](DefaultApi.md#RefreshGraph) | **Get** /users/{userId}/goals/{goalSlug}/refresh_graph.json | Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
[**ShortCircuit**](DefaultApi.md#ShortCircuit) | **Post** /users/{userId}/goals/{goalSlug}/shortcircuit.json | Increase the goal&#39;s pledge level and charge the user the amount of the current pledge.
[**StepDown**](DefaultApi.md#StepDown) | **Post** /users/{userId}/goals/{goalSlug}/stepdown.json | Decrease the goal&#39;s pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
[**UpdateDatapoint**](DefaultApi.md#UpdateDatapoint) | **Put** /users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json | Update the datapoint with id.
[**UpdateGoal**](DefaultApi.md#UpdateGoal) | **Put** /users/{userId}/goals/{goalSlug}.json | Update a goal for a user.



## CancelStepdown

> Goal CancelStepdown(ctx, userId, goalSlug).Execute()

Cancel a pending stepdown of a goal's pledge. The pledge will remain at the current amount.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal to cancel step down.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.CancelStepdown(context.Background(), userId, goalSlug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.CancelStepdown``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelStepdown`: Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.CancelStepdown`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal to cancel step down. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelStepdownRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateCharge

> ChargeResponse CreateCharge(ctx).ChargeRequest(chargeRequest).Execute()

Create a new charge against a user.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    chargeRequest := *openapiclient.NewChargeRequest() // ChargeRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.CreateCharge(context.Background()).ChargeRequest(chargeRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.CreateCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCharge`: ChargeResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.CreateCharge`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chargeRequest** | [**ChargeRequest**](ChargeRequest.md) |  | 

### Return type

[**ChargeResponse**](ChargeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateDatapoint

> Datapoint CreateDatapoint(ctx, userId, goalSlug).CreateDatapointRequest(createDatapointRequest).Execute()

add a new datapoint to userId's goal goalSlug.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal to add a datapoint to.
    createDatapointRequest := *openapiclient.NewCreateDatapointRequest() // CreateDatapointRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.CreateDatapoint(context.Background(), userId, goalSlug).CreateDatapointRequest(createDatapointRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.CreateDatapoint``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDatapoint`: Datapoint
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.CreateDatapoint`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal to add a datapoint to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateDatapointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **createDatapointRequest** | [**CreateDatapointRequest**](CreateDatapointRequest.md) |  | 

### Return type

[**Datapoint**](Datapoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateDatapoints

> []Datapoint CreateDatapoints(ctx, userId, goalSlug).CreateDatapointRequest(createDatapointRequest).Execute()

Add all new datapoints to userId's goal goalSlug.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal to add a datapoint to.
    createDatapointRequest := []openapiclient.CreateDatapointRequest{*openapiclient.NewCreateDatapointRequest()} // []CreateDatapointRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.CreateDatapoints(context.Background(), userId, goalSlug).CreateDatapointRequest(createDatapointRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.CreateDatapoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDatapoints`: []Datapoint
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.CreateDatapoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal to add a datapoint to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateDatapointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **createDatapointRequest** | [**[]CreateDatapointRequest**](CreateDatapointRequest.md) |  | 

### Return type

[**[]Datapoint**](Datapoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateGoal

> Goal CreateGoal(ctx, userId).GoalCreateRequest(goalCreateRequest).Execute()

Create a new goal for user userId.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | The username of the user to fetch goals from.
    goalCreateRequest := *openapiclient.NewGoalCreateRequest() // GoalCreateRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.CreateGoal(context.Background(), userId).GoalCreateRequest(goalCreateRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.CreateGoal``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateGoal`: Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.CreateGoal`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | The username of the user to fetch goals from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateGoalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **goalCreateRequest** | [**GoalCreateRequest**](GoalCreateRequest.md) |  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDatapoint

> Datapoint DeleteDatapoint(ctx, userId, goalSlug, datapointId).Execute()

Delete the datapoint with id.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal.
    datapointId := "datapointId_example" // string | ID of the datapoint to edit.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.DeleteDatapoint(context.Background(), userId, goalSlug, datapointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.DeleteDatapoint``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDatapoint`: Datapoint
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.DeleteDatapoint`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal. | 
**datapointId** | **string** | ID of the datapoint to edit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDatapointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**Datapoint**](Datapoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetArchivedGoals

> []Goal GetArchivedGoals(ctx, userId).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | The username of the user to fetch goals from.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetArchivedGoals(context.Background(), userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetArchivedGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetArchivedGoals`: []Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetArchivedGoals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | The username of the user to fetch goals from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetArchivedGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDatapoints

> []Datapoint GetDatapoints(ctx, userId, goalSlug).Sort(sort).Count(count).Page(page).Per(per).Execute()

Get all the datapoints for userId's goal goalSlug. beeminder.com/u/g

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID from whose goals to fetch datapoints.
    goalSlug := "goalSlug_example" // string | Name of the goal to fetch datapoints from.
    sort := "sort_example" // string | Which attribute to sort on. Defaults to 'id' if none given. (optional)
    count := int32(56) // int32 | Limit results to count number of datapoints. Defaults to all datapoints if parameter is missing. (optional)
    page := int32(56) // int32 | Used to paginate results. (optional)
    per := int32(56) // int32 | Number of results per page. Default 25. Ignored without page parameter. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetDatapoints(context.Background(), userId, goalSlug).Sort(sort).Count(count).Page(page).Per(per).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetDatapoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDatapoints`: []Datapoint
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetDatapoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID from whose goals to fetch datapoints. | 
**goalSlug** | **string** | Name of the goal to fetch datapoints from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDatapointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **sort** | **string** | Which attribute to sort on. Defaults to &#39;id&#39; if none given. | 
 **count** | **int32** | Limit results to count number of datapoints. Defaults to all datapoints if parameter is missing. | 
 **page** | **int32** | Used to paginate results. | 
 **per** | **int32** | Number of results per page. Default 25. Ignored without page parameter. | 

### Return type

[**[]Datapoint**](Datapoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGoal

> Goal GetGoal(ctx, userId, goalSlug).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID to fetch a goal from.
    goalSlug := "goalSlug_example" // string | Name of the goal to fetch.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetGoal(context.Background(), userId, goalSlug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetGoal``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGoal`: Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetGoal`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID to fetch a goal from. | 
**goalSlug** | **string** | Name of the goal to fetch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGoalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGoals

> []Goal GetGoals(ctx, userId).Execute()

Get user userId's goals, sorted in descending order of urgency.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | The username of the user to fetch goals from.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetGoals(context.Background(), userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetGoals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGoals`: []Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetGoals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | The username of the user to fetch goals from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGoalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUser

> GetUser200Response GetUser(ctx, userId).Associations(associations).DiffSince(diffSince).Skinny(skinny).DatapointsCount(datapointsCount).RedirectToUrl(redirectToUrl).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID to fetch
    associations := true // bool | Convenience method to fetch all information about a user. Use sparingly. (optional)
    diffSince := int32(56) // int32 | Send a Unix timestamp to receive a filtered list of the user's goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user's associations, so you don't need to send both. (optional)
    skinny := true // bool | Only get a subset of attributes and most recent datapoint. Must be used together with `diff_since`. (optional)
    datapointsCount := int32(56) // int32 | Number of datapoints to receive, sorted by updated_at. (optional)
    redirectToUrl := "redirectToUrl_example" // string | Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetUser(context.Background(), userId).Associations(associations).DiffSince(diffSince).Skinny(skinny).DatapointsCount(datapointsCount).RedirectToUrl(redirectToUrl).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUser`: GetUser200Response
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **associations** | **bool** | Convenience method to fetch all information about a user. Use sparingly. | 
 **diffSince** | **int32** | Send a Unix timestamp to receive a filtered list of the user&#39;s goals and datapoints. Only goals and datapoints that have been created or updated since the timestamp will be returned. Sending diff_since implies that you want the user&#39;s associations, so you don&#39;t need to send both. | 
 **skinny** | **bool** | Only get a subset of attributes and most recent datapoint. Must be used together with &#x60;diff_since&#x60;. | 
 **datapointsCount** | **int32** | Number of datapoints to receive, sorted by updated_at. | 
 **redirectToUrl** | **string** | Mutually exclusive with other parameters. Attempts to authenticate the user and if successful, redirects to the given URL. | 

### Return type

[**GetUser200Response**](GetUser200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RefreshGraph

> bool RefreshGraph(ctx, userId, goalSlug).Execute()

Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal to refresh.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.RefreshGraph(context.Background(), userId, goalSlug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.RefreshGraph``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RefreshGraph`: bool
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.RefreshGraph`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal to refresh. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRefreshGraphRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**bool**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ShortCircuit

> Goal ShortCircuit(ctx, userId, goalSlug).Execute()

Increase the goal's pledge level and charge the user the amount of the current pledge.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal to short circuit.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.ShortCircuit(context.Background(), userId, goalSlug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.ShortCircuit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShortCircuit`: Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.ShortCircuit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal to short circuit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiShortCircuitRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StepDown

> Goal StepDown(ctx, userId, goalSlug).Execute()

Decrease the goal's pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal to step down.

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.StepDown(context.Background(), userId, goalSlug).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.StepDown``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StepDown`: Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.StepDown`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal to step down. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStepDownRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDatapoint

> Datapoint UpdateDatapoint(ctx, userId, goalSlug, datapointId).UpdateDatapointRequest(updateDatapointRequest).Execute()

Update the datapoint with id.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID.
    goalSlug := "goalSlug_example" // string | Name of the goal.
    datapointId := "datapointId_example" // string | ID of the datapoint to edit.
    updateDatapointRequest := []openapiclient.UpdateDatapointRequest{*openapiclient.NewUpdateDatapointRequest()} // []UpdateDatapointRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.UpdateDatapoint(context.Background(), userId, goalSlug, datapointId).UpdateDatapointRequest(updateDatapointRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.UpdateDatapoint``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateDatapoint`: Datapoint
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.UpdateDatapoint`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID. | 
**goalSlug** | **string** | Name of the goal. | 
**datapointId** | **string** | ID of the datapoint to edit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDatapointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **updateDatapointRequest** | [**[]UpdateDatapointRequest**](UpdateDatapointRequest.md) |  | 

### Return type

[**Datapoint**](Datapoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateGoal

> Goal UpdateGoal(ctx, userId, goalSlug).GoalUpdateRequest(goalUpdateRequest).Execute()

Update a goal for a user.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userId := "userId_example" // string | User ID to fetch a goal from.
    goalSlug := "goalSlug_example" // string | Name of the goal to update.
    goalUpdateRequest := *openapiclient.NewGoalUpdateRequest() // GoalUpdateRequest |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.UpdateGoal(context.Background(), userId, goalSlug).GoalUpdateRequest(goalUpdateRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.UpdateGoal``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateGoal`: Goal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.UpdateGoal`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userId** | **string** | User ID to fetch a goal from. | 
**goalSlug** | **string** | Name of the goal to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateGoalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **goalUpdateRequest** | [**GoalUpdateRequest**](GoalUpdateRequest.md) |  | 

### Return type

[**Goal**](Goal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

