# GoalUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | Pointer to **string** |  | [optional] 
**Yaxis** | Pointer to **string** |  | [optional] 
**Tmin** | Pointer to **string** |  | [optional] 
**Tmax** | Pointer to **string** |  | [optional] 
**Secret** | Pointer to **bool** |  | [optional] 
**Datapublic** | Pointer to **bool** |  | [optional] 
**Roadall** | Pointer to **[][]*float32** | Like road but with an additional initial row consisting of [initday, initval, null] and an additional final row consisting of [goaldate, goalval, rate] | [optional] 
**Datasource** | Pointer to **string** | one of {\&quot;api\&quot;, \&quot;ifttt\&quot;, \&quot;zapier\&quot;, or clientname}. Default: none (i.e., \&quot;manual\&quot;). | [optional] [default to "manual"]
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewGoalUpdateRequest

`func NewGoalUpdateRequest() *GoalUpdateRequest`

NewGoalUpdateRequest instantiates a new GoalUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoalUpdateRequestWithDefaults

`func NewGoalUpdateRequestWithDefaults() *GoalUpdateRequest`

NewGoalUpdateRequestWithDefaults instantiates a new GoalUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *GoalUpdateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *GoalUpdateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *GoalUpdateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *GoalUpdateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetYaxis

`func (o *GoalUpdateRequest) GetYaxis() string`

GetYaxis returns the Yaxis field if non-nil, zero value otherwise.

### GetYaxisOk

`func (o *GoalUpdateRequest) GetYaxisOk() (*string, bool)`

GetYaxisOk returns a tuple with the Yaxis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYaxis

`func (o *GoalUpdateRequest) SetYaxis(v string)`

SetYaxis sets Yaxis field to given value.

### HasYaxis

`func (o *GoalUpdateRequest) HasYaxis() bool`

HasYaxis returns a boolean if a field has been set.

### GetTmin

`func (o *GoalUpdateRequest) GetTmin() string`

GetTmin returns the Tmin field if non-nil, zero value otherwise.

### GetTminOk

`func (o *GoalUpdateRequest) GetTminOk() (*string, bool)`

GetTminOk returns a tuple with the Tmin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTmin

`func (o *GoalUpdateRequest) SetTmin(v string)`

SetTmin sets Tmin field to given value.

### HasTmin

`func (o *GoalUpdateRequest) HasTmin() bool`

HasTmin returns a boolean if a field has been set.

### GetTmax

`func (o *GoalUpdateRequest) GetTmax() string`

GetTmax returns the Tmax field if non-nil, zero value otherwise.

### GetTmaxOk

`func (o *GoalUpdateRequest) GetTmaxOk() (*string, bool)`

GetTmaxOk returns a tuple with the Tmax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTmax

`func (o *GoalUpdateRequest) SetTmax(v string)`

SetTmax sets Tmax field to given value.

### HasTmax

`func (o *GoalUpdateRequest) HasTmax() bool`

HasTmax returns a boolean if a field has been set.

### GetSecret

`func (o *GoalUpdateRequest) GetSecret() bool`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *GoalUpdateRequest) GetSecretOk() (*bool, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *GoalUpdateRequest) SetSecret(v bool)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *GoalUpdateRequest) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetDatapublic

`func (o *GoalUpdateRequest) GetDatapublic() bool`

GetDatapublic returns the Datapublic field if non-nil, zero value otherwise.

### GetDatapublicOk

`func (o *GoalUpdateRequest) GetDatapublicOk() (*bool, bool)`

GetDatapublicOk returns a tuple with the Datapublic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatapublic

`func (o *GoalUpdateRequest) SetDatapublic(v bool)`

SetDatapublic sets Datapublic field to given value.

### HasDatapublic

`func (o *GoalUpdateRequest) HasDatapublic() bool`

HasDatapublic returns a boolean if a field has been set.

### GetRoadall

`func (o *GoalUpdateRequest) GetRoadall() [][]*float32`

GetRoadall returns the Roadall field if non-nil, zero value otherwise.

### GetRoadallOk

`func (o *GoalUpdateRequest) GetRoadallOk() (*[][]*float32, bool)`

GetRoadallOk returns a tuple with the Roadall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoadall

`func (o *GoalUpdateRequest) SetRoadall(v [][]*float32)`

SetRoadall sets Roadall field to given value.

### HasRoadall

`func (o *GoalUpdateRequest) HasRoadall() bool`

HasRoadall returns a boolean if a field has been set.

### GetDatasource

`func (o *GoalUpdateRequest) GetDatasource() string`

GetDatasource returns the Datasource field if non-nil, zero value otherwise.

### GetDatasourceOk

`func (o *GoalUpdateRequest) GetDatasourceOk() (*string, bool)`

GetDatasourceOk returns a tuple with the Datasource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasource

`func (o *GoalUpdateRequest) SetDatasource(v string)`

SetDatasource sets Datasource field to given value.

### HasDatasource

`func (o *GoalUpdateRequest) HasDatasource() bool`

HasDatasource returns a boolean if a field has been set.

### GetTags

`func (o *GoalUpdateRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *GoalUpdateRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *GoalUpdateRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *GoalUpdateRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


