# GetUser200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | Pointer to **string** |  | [optional] 
**Timezone** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **int32** |  | [optional] 
**UrgencyLoad** | Pointer to **int32** |  | [optional] 
**Deadbeat** | Pointer to **bool** |  | [optional] 
**Goals** | Pointer to [**[]Goal**](Goal.md) |  | [optional] 
**HasAuthorizedFitbit** | Pointer to **bool** |  | [optional] 
**DefaultLeadtime** | Pointer to **int32** |  | [optional] 
**DefaultAlertstart** | Pointer to **int32** |  | [optional] 
**DefaultDeadline** | Pointer to **int32** |  | [optional] 
**Subscription** | Pointer to **string** |  | [optional] 
**DeletedGoals** | Pointer to [**[]BigUserDeletedGoalsInner**](BigUserDeletedGoalsInner.md) |  | [optional] 

## Methods

### NewGetUser200Response

`func NewGetUser200Response() *GetUser200Response`

NewGetUser200Response instantiates a new GetUser200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUser200ResponseWithDefaults

`func NewGetUser200ResponseWithDefaults() *GetUser200Response`

NewGetUser200ResponseWithDefaults instantiates a new GetUser200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *GetUser200Response) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *GetUser200Response) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *GetUser200Response) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *GetUser200Response) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetTimezone

`func (o *GetUser200Response) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *GetUser200Response) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *GetUser200Response) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *GetUser200Response) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *GetUser200Response) GetUpdatedAt() int32`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetUser200Response) GetUpdatedAtOk() (*int32, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetUser200Response) SetUpdatedAt(v int32)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *GetUser200Response) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *GetUser200Response) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetUser200Response) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetUser200Response) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GetUser200Response) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUrgencyLoad

`func (o *GetUser200Response) GetUrgencyLoad() int32`

GetUrgencyLoad returns the UrgencyLoad field if non-nil, zero value otherwise.

### GetUrgencyLoadOk

`func (o *GetUser200Response) GetUrgencyLoadOk() (*int32, bool)`

GetUrgencyLoadOk returns a tuple with the UrgencyLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrgencyLoad

`func (o *GetUser200Response) SetUrgencyLoad(v int32)`

SetUrgencyLoad sets UrgencyLoad field to given value.

### HasUrgencyLoad

`func (o *GetUser200Response) HasUrgencyLoad() bool`

HasUrgencyLoad returns a boolean if a field has been set.

### GetDeadbeat

`func (o *GetUser200Response) GetDeadbeat() bool`

GetDeadbeat returns the Deadbeat field if non-nil, zero value otherwise.

### GetDeadbeatOk

`func (o *GetUser200Response) GetDeadbeatOk() (*bool, bool)`

GetDeadbeatOk returns a tuple with the Deadbeat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadbeat

`func (o *GetUser200Response) SetDeadbeat(v bool)`

SetDeadbeat sets Deadbeat field to given value.

### HasDeadbeat

`func (o *GetUser200Response) HasDeadbeat() bool`

HasDeadbeat returns a boolean if a field has been set.

### GetGoals

`func (o *GetUser200Response) GetGoals() []Goal`

GetGoals returns the Goals field if non-nil, zero value otherwise.

### GetGoalsOk

`func (o *GetUser200Response) GetGoalsOk() (*[]Goal, bool)`

GetGoalsOk returns a tuple with the Goals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoals

`func (o *GetUser200Response) SetGoals(v []Goal)`

SetGoals sets Goals field to given value.

### HasGoals

`func (o *GetUser200Response) HasGoals() bool`

HasGoals returns a boolean if a field has been set.

### GetHasAuthorizedFitbit

`func (o *GetUser200Response) GetHasAuthorizedFitbit() bool`

GetHasAuthorizedFitbit returns the HasAuthorizedFitbit field if non-nil, zero value otherwise.

### GetHasAuthorizedFitbitOk

`func (o *GetUser200Response) GetHasAuthorizedFitbitOk() (*bool, bool)`

GetHasAuthorizedFitbitOk returns a tuple with the HasAuthorizedFitbit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAuthorizedFitbit

`func (o *GetUser200Response) SetHasAuthorizedFitbit(v bool)`

SetHasAuthorizedFitbit sets HasAuthorizedFitbit field to given value.

### HasHasAuthorizedFitbit

`func (o *GetUser200Response) HasHasAuthorizedFitbit() bool`

HasHasAuthorizedFitbit returns a boolean if a field has been set.

### GetDefaultLeadtime

`func (o *GetUser200Response) GetDefaultLeadtime() int32`

GetDefaultLeadtime returns the DefaultLeadtime field if non-nil, zero value otherwise.

### GetDefaultLeadtimeOk

`func (o *GetUser200Response) GetDefaultLeadtimeOk() (*int32, bool)`

GetDefaultLeadtimeOk returns a tuple with the DefaultLeadtime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultLeadtime

`func (o *GetUser200Response) SetDefaultLeadtime(v int32)`

SetDefaultLeadtime sets DefaultLeadtime field to given value.

### HasDefaultLeadtime

`func (o *GetUser200Response) HasDefaultLeadtime() bool`

HasDefaultLeadtime returns a boolean if a field has been set.

### GetDefaultAlertstart

`func (o *GetUser200Response) GetDefaultAlertstart() int32`

GetDefaultAlertstart returns the DefaultAlertstart field if non-nil, zero value otherwise.

### GetDefaultAlertstartOk

`func (o *GetUser200Response) GetDefaultAlertstartOk() (*int32, bool)`

GetDefaultAlertstartOk returns a tuple with the DefaultAlertstart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultAlertstart

`func (o *GetUser200Response) SetDefaultAlertstart(v int32)`

SetDefaultAlertstart sets DefaultAlertstart field to given value.

### HasDefaultAlertstart

`func (o *GetUser200Response) HasDefaultAlertstart() bool`

HasDefaultAlertstart returns a boolean if a field has been set.

### GetDefaultDeadline

`func (o *GetUser200Response) GetDefaultDeadline() int32`

GetDefaultDeadline returns the DefaultDeadline field if non-nil, zero value otherwise.

### GetDefaultDeadlineOk

`func (o *GetUser200Response) GetDefaultDeadlineOk() (*int32, bool)`

GetDefaultDeadlineOk returns a tuple with the DefaultDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDeadline

`func (o *GetUser200Response) SetDefaultDeadline(v int32)`

SetDefaultDeadline sets DefaultDeadline field to given value.

### HasDefaultDeadline

`func (o *GetUser200Response) HasDefaultDeadline() bool`

HasDefaultDeadline returns a boolean if a field has been set.

### GetSubscription

`func (o *GetUser200Response) GetSubscription() string`

GetSubscription returns the Subscription field if non-nil, zero value otherwise.

### GetSubscriptionOk

`func (o *GetUser200Response) GetSubscriptionOk() (*string, bool)`

GetSubscriptionOk returns a tuple with the Subscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscription

`func (o *GetUser200Response) SetSubscription(v string)`

SetSubscription sets Subscription field to given value.

### HasSubscription

`func (o *GetUser200Response) HasSubscription() bool`

HasSubscription returns a boolean if a field has been set.

### GetDeletedGoals

`func (o *GetUser200Response) GetDeletedGoals() []BigUserDeletedGoalsInner`

GetDeletedGoals returns the DeletedGoals field if non-nil, zero value otherwise.

### GetDeletedGoalsOk

`func (o *GetUser200Response) GetDeletedGoalsOk() (*[]BigUserDeletedGoalsInner, bool)`

GetDeletedGoalsOk returns a tuple with the DeletedGoals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedGoals

`func (o *GetUser200Response) SetDeletedGoals(v []BigUserDeletedGoalsInner)`

SetDeletedGoals sets DeletedGoals field to given value.

### HasDeletedGoals

`func (o *GetUser200Response) HasDeletedGoals() bool`

HasDeletedGoals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


