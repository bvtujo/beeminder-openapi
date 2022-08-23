# SmallUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | Pointer to **string** |  | [optional] 
**Timezone** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **int32** |  | [optional] 
**UrgencyLoad** | Pointer to **int32** |  | [optional] 
**Deadbeat** | Pointer to **bool** |  | [optional] 
**Goals** | Pointer to **[]string** |  | [optional] 
**HasAuthorizedFitbit** | Pointer to **bool** |  | [optional] 
**DefaultLeadtime** | Pointer to **int32** |  | [optional] 
**DefaultAlertstart** | Pointer to **int32** |  | [optional] 
**DefaultDeadline** | Pointer to **int32** |  | [optional] 
**Subscription** | Pointer to **string** |  | [optional] 

## Methods

### NewSmallUser

`func NewSmallUser() *SmallUser`

NewSmallUser instantiates a new SmallUser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSmallUserWithDefaults

`func NewSmallUserWithDefaults() *SmallUser`

NewSmallUserWithDefaults instantiates a new SmallUser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *SmallUser) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *SmallUser) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *SmallUser) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *SmallUser) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetTimezone

`func (o *SmallUser) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *SmallUser) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *SmallUser) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *SmallUser) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *SmallUser) GetUpdatedAt() int32`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *SmallUser) GetUpdatedAtOk() (*int32, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *SmallUser) SetUpdatedAt(v int32)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *SmallUser) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *SmallUser) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SmallUser) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SmallUser) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *SmallUser) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUrgencyLoad

`func (o *SmallUser) GetUrgencyLoad() int32`

GetUrgencyLoad returns the UrgencyLoad field if non-nil, zero value otherwise.

### GetUrgencyLoadOk

`func (o *SmallUser) GetUrgencyLoadOk() (*int32, bool)`

GetUrgencyLoadOk returns a tuple with the UrgencyLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrgencyLoad

`func (o *SmallUser) SetUrgencyLoad(v int32)`

SetUrgencyLoad sets UrgencyLoad field to given value.

### HasUrgencyLoad

`func (o *SmallUser) HasUrgencyLoad() bool`

HasUrgencyLoad returns a boolean if a field has been set.

### GetDeadbeat

`func (o *SmallUser) GetDeadbeat() bool`

GetDeadbeat returns the Deadbeat field if non-nil, zero value otherwise.

### GetDeadbeatOk

`func (o *SmallUser) GetDeadbeatOk() (*bool, bool)`

GetDeadbeatOk returns a tuple with the Deadbeat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadbeat

`func (o *SmallUser) SetDeadbeat(v bool)`

SetDeadbeat sets Deadbeat field to given value.

### HasDeadbeat

`func (o *SmallUser) HasDeadbeat() bool`

HasDeadbeat returns a boolean if a field has been set.

### GetGoals

`func (o *SmallUser) GetGoals() []string`

GetGoals returns the Goals field if non-nil, zero value otherwise.

### GetGoalsOk

`func (o *SmallUser) GetGoalsOk() (*[]string, bool)`

GetGoalsOk returns a tuple with the Goals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoals

`func (o *SmallUser) SetGoals(v []string)`

SetGoals sets Goals field to given value.

### HasGoals

`func (o *SmallUser) HasGoals() bool`

HasGoals returns a boolean if a field has been set.

### GetHasAuthorizedFitbit

`func (o *SmallUser) GetHasAuthorizedFitbit() bool`

GetHasAuthorizedFitbit returns the HasAuthorizedFitbit field if non-nil, zero value otherwise.

### GetHasAuthorizedFitbitOk

`func (o *SmallUser) GetHasAuthorizedFitbitOk() (*bool, bool)`

GetHasAuthorizedFitbitOk returns a tuple with the HasAuthorizedFitbit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAuthorizedFitbit

`func (o *SmallUser) SetHasAuthorizedFitbit(v bool)`

SetHasAuthorizedFitbit sets HasAuthorizedFitbit field to given value.

### HasHasAuthorizedFitbit

`func (o *SmallUser) HasHasAuthorizedFitbit() bool`

HasHasAuthorizedFitbit returns a boolean if a field has been set.

### GetDefaultLeadtime

`func (o *SmallUser) GetDefaultLeadtime() int32`

GetDefaultLeadtime returns the DefaultLeadtime field if non-nil, zero value otherwise.

### GetDefaultLeadtimeOk

`func (o *SmallUser) GetDefaultLeadtimeOk() (*int32, bool)`

GetDefaultLeadtimeOk returns a tuple with the DefaultLeadtime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultLeadtime

`func (o *SmallUser) SetDefaultLeadtime(v int32)`

SetDefaultLeadtime sets DefaultLeadtime field to given value.

### HasDefaultLeadtime

`func (o *SmallUser) HasDefaultLeadtime() bool`

HasDefaultLeadtime returns a boolean if a field has been set.

### GetDefaultAlertstart

`func (o *SmallUser) GetDefaultAlertstart() int32`

GetDefaultAlertstart returns the DefaultAlertstart field if non-nil, zero value otherwise.

### GetDefaultAlertstartOk

`func (o *SmallUser) GetDefaultAlertstartOk() (*int32, bool)`

GetDefaultAlertstartOk returns a tuple with the DefaultAlertstart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultAlertstart

`func (o *SmallUser) SetDefaultAlertstart(v int32)`

SetDefaultAlertstart sets DefaultAlertstart field to given value.

### HasDefaultAlertstart

`func (o *SmallUser) HasDefaultAlertstart() bool`

HasDefaultAlertstart returns a boolean if a field has been set.

### GetDefaultDeadline

`func (o *SmallUser) GetDefaultDeadline() int32`

GetDefaultDeadline returns the DefaultDeadline field if non-nil, zero value otherwise.

### GetDefaultDeadlineOk

`func (o *SmallUser) GetDefaultDeadlineOk() (*int32, bool)`

GetDefaultDeadlineOk returns a tuple with the DefaultDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDeadline

`func (o *SmallUser) SetDefaultDeadline(v int32)`

SetDefaultDeadline sets DefaultDeadline field to given value.

### HasDefaultDeadline

`func (o *SmallUser) HasDefaultDeadline() bool`

HasDefaultDeadline returns a boolean if a field has been set.

### GetSubscription

`func (o *SmallUser) GetSubscription() string`

GetSubscription returns the Subscription field if non-nil, zero value otherwise.

### GetSubscriptionOk

`func (o *SmallUser) GetSubscriptionOk() (*string, bool)`

GetSubscriptionOk returns a tuple with the Subscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscription

`func (o *SmallUser) SetSubscription(v string)`

SetSubscription sets Subscription field to given value.

### HasSubscription

`func (o *SmallUser) HasSubscription() bool`

HasSubscription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


