# Go API client for openapi

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 1.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen
For more information, please visit [https://github.com/bvtujo](https://github.com/bvtujo)

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/oauth2
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```golang
import openapi "github.com/bvtujo/gominder/clients/go"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `sw.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), openapi.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `sw.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), openapi.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `sw.ContextOperationServerIndices` and `sw.ContextOperationServerVariables` context maps.

```
ctx := context.WithValue(context.Background(), openapi.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), openapi.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to *https://www.beeminder.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**CancelStepdown**](docs/DefaultApi.md#cancelstepdown) | **Post** /users/{userId}/goals/{goalSlug}/cancel_stepdown.json | Cancel a pending stepdown of a goal&#39;s pledge. The pledge will remain at the current amount.
*DefaultApi* | [**CreateCharge**](docs/DefaultApi.md#createcharge) | **Post** /charges.json | Create a new charge against a user.
*DefaultApi* | [**CreateDatapoint**](docs/DefaultApi.md#createdatapoint) | **Post** /users/{userId}/goals/{goalSlug}/datapoints.json | add a new datapoint to userId&#39;s goal goalSlug.
*DefaultApi* | [**CreateDatapoints**](docs/DefaultApi.md#createdatapoints) | **Post** /users/{userId}/goals/{goalSlug}/datapoints/create_all.json | Add all new datapoints to userId&#39;s goal goalSlug.
*DefaultApi* | [**CreateGoal**](docs/DefaultApi.md#creategoal) | **Post** /users/{userId}/goals.json | Create a new goal for user userId.
*DefaultApi* | [**DeleteDatapoint**](docs/DefaultApi.md#deletedatapoint) | **Delete** /users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json | Delete the datapoint with id.
*DefaultApi* | [**GetArchivedGoals**](docs/DefaultApi.md#getarchivedgoals) | **Get** /users/{userId}/goals/archived.json | 
*DefaultApi* | [**GetDatapoints**](docs/DefaultApi.md#getdatapoints) | **Get** /users/{userId}/goals/{goalSlug}/datapoints.json | Get all the datapoints for userId&#39;s goal goalSlug. beeminder.com/u/g
*DefaultApi* | [**GetGoal**](docs/DefaultApi.md#getgoal) | **Get** /users/{userId}/goals/{goalSlug}.json | 
*DefaultApi* | [**GetGoals**](docs/DefaultApi.md#getgoals) | **Get** /users/{userId}/goals.json | Get user userId&#39;s goals, sorted in descending order of urgency.
*DefaultApi* | [**GetUser**](docs/DefaultApi.md#getuser) | **Get** /users/{userId}.json | 
*DefaultApi* | [**RefreshGraph**](docs/DefaultApi.md#refreshgraph) | **Get** /users/{userId}/goals/{goalSlug}/refresh_graph.json | Analagous to the refresh button on the goal page. Forces a refetch of autodata for goals with automatic data sources. Refreshes the graph image regardless. Please be extremely conservative with this endpoint!
*DefaultApi* | [**ShortCircuit**](docs/DefaultApi.md#shortcircuit) | **Post** /users/{userId}/goals/{goalSlug}/shortcircuit.json | Increase the goal&#39;s pledge level and charge the user the amount of the current pledge.
*DefaultApi* | [**StepDown**](docs/DefaultApi.md#stepdown) | **Post** /users/{userId}/goals/{goalSlug}/stepdown.json | Decrease the goal&#39;s pledge level subject to the akrasia horizon; i.e. not immediately. After a successful request the goal will have a countdown to when it will revert to the lower pledge level.
*DefaultApi* | [**UpdateDatapoint**](docs/DefaultApi.md#updatedatapoint) | **Put** /users/{userId}/goals/{goalSlug}/datapoints/{datapointId}.json | Update the datapoint with id.
*DefaultApi* | [**UpdateGoal**](docs/DefaultApi.md#updategoal) | **Put** /users/{userId}/goals/{goalSlug}.json | Update a goal for a user.


## Documentation For Models

 - [BigUser](docs/BigUser.md)
 - [BigUserDeletedGoalsInner](docs/BigUserDeletedGoalsInner.md)
 - [ChargeRequest](docs/ChargeRequest.md)
 - [ChargeResponse](docs/ChargeResponse.md)
 - [CreateDatapointRequest](docs/CreateDatapointRequest.md)
 - [Datapoint](docs/Datapoint.md)
 - [GetUser200Response](docs/GetUser200Response.md)
 - [Goal](docs/Goal.md)
 - [GoalContract](docs/GoalContract.md)
 - [GoalCreateRequest](docs/GoalCreateRequest.md)
 - [GoalDuebyValue](docs/GoalDuebyValue.md)
 - [GoalRecentDataInner](docs/GoalRecentDataInner.md)
 - [GoalRecentDataInnerId](docs/GoalRecentDataInnerId.md)
 - [GoalUpdateRequest](docs/GoalUpdateRequest.md)
 - [SmallUser](docs/SmallUser.md)
 - [UpdateDatapointRequest](docs/UpdateDatapointRequest.md)


## Documentation For Authorization



### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: auth_token
- **Location**: URL query string

Note, each API key must be added to a map of `map[string]APIKey` where the key is: auth_token and passed in as the auth context for each request.


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author

austinrossely@gmail.com
