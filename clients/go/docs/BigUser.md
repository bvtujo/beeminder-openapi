# BigUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | Pointer to **string** |  | [optional] 
**Timezone** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **int32** |  | [optional] 
**CreatedAt** | Pointer to **int32** |  | [optional] 
**UrgencyLoad** | Pointer to **int32** |  | [optional] 
**Deadbeat** | Pointer to **bool** |  | [optional] 
**DeletedGoals** | Pointer to [**[]BigUserDeletedGoalsInner**](BigUserDeletedGoalsInner.md) |  | [optional] 
**Goals** | Pointer to [**[]Goal**](Goal.md) |  | [optional] 

## Methods

### NewBigUser

`func NewBigUser() *BigUser`

NewBigUser instantiates a new BigUser object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBigUserWithDefaults

`func NewBigUserWithDefaults() *BigUser`

NewBigUserWithDefaults instantiates a new BigUser object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsername

`func (o *BigUser) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *BigUser) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *BigUser) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *BigUser) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetTimezone

`func (o *BigUser) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *BigUser) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *BigUser) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.

### HasTimezone

`func (o *BigUser) HasTimezone() bool`

HasTimezone returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *BigUser) GetUpdatedAt() int32`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *BigUser) GetUpdatedAtOk() (*int32, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *BigUser) SetUpdatedAt(v int32)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *BigUser) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *BigUser) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *BigUser) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *BigUser) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *BigUser) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUrgencyLoad

`func (o *BigUser) GetUrgencyLoad() int32`

GetUrgencyLoad returns the UrgencyLoad field if non-nil, zero value otherwise.

### GetUrgencyLoadOk

`func (o *BigUser) GetUrgencyLoadOk() (*int32, bool)`

GetUrgencyLoadOk returns a tuple with the UrgencyLoad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrgencyLoad

`func (o *BigUser) SetUrgencyLoad(v int32)`

SetUrgencyLoad sets UrgencyLoad field to given value.

### HasUrgencyLoad

`func (o *BigUser) HasUrgencyLoad() bool`

HasUrgencyLoad returns a boolean if a field has been set.

### GetDeadbeat

`func (o *BigUser) GetDeadbeat() bool`

GetDeadbeat returns the Deadbeat field if non-nil, zero value otherwise.

### GetDeadbeatOk

`func (o *BigUser) GetDeadbeatOk() (*bool, bool)`

GetDeadbeatOk returns a tuple with the Deadbeat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadbeat

`func (o *BigUser) SetDeadbeat(v bool)`

SetDeadbeat sets Deadbeat field to given value.

### HasDeadbeat

`func (o *BigUser) HasDeadbeat() bool`

HasDeadbeat returns a boolean if a field has been set.

### GetDeletedGoals

`func (o *BigUser) GetDeletedGoals() []BigUserDeletedGoalsInner`

GetDeletedGoals returns the DeletedGoals field if non-nil, zero value otherwise.

### GetDeletedGoalsOk

`func (o *BigUser) GetDeletedGoalsOk() (*[]BigUserDeletedGoalsInner, bool)`

GetDeletedGoalsOk returns a tuple with the DeletedGoals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedGoals

`func (o *BigUser) SetDeletedGoals(v []BigUserDeletedGoalsInner)`

SetDeletedGoals sets DeletedGoals field to given value.

### HasDeletedGoals

`func (o *BigUser) HasDeletedGoals() bool`

HasDeletedGoals returns a boolean if a field has been set.

### GetGoals

`func (o *BigUser) GetGoals() []Goal`

GetGoals returns the Goals field if non-nil, zero value otherwise.

### GetGoalsOk

`func (o *BigUser) GetGoalsOk() (*[]Goal, bool)`

GetGoalsOk returns a tuple with the Goals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoals

`func (o *BigUser) SetGoals(v []Goal)`

SetGoals sets Goals field to given value.

### HasGoals

`func (o *BigUser) HasGoals() bool`

HasGoals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


