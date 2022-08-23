# UpdateDatapointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **NullableFloat32** |  | [optional] 
**Timestamp** | Pointer to **NullableInt32** | The unix time (in seconds) of the datapoint. | [optional] 
**Comment** | Pointer to **NullableString** | An optional comment about the datapoint. | [optional] 

## Methods

### NewUpdateDatapointRequest

`func NewUpdateDatapointRequest() *UpdateDatapointRequest`

NewUpdateDatapointRequest instantiates a new UpdateDatapointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateDatapointRequestWithDefaults

`func NewUpdateDatapointRequestWithDefaults() *UpdateDatapointRequest`

NewUpdateDatapointRequestWithDefaults instantiates a new UpdateDatapointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *UpdateDatapointRequest) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *UpdateDatapointRequest) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *UpdateDatapointRequest) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *UpdateDatapointRequest) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *UpdateDatapointRequest) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *UpdateDatapointRequest) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetTimestamp

`func (o *UpdateDatapointRequest) GetTimestamp() int32`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *UpdateDatapointRequest) GetTimestampOk() (*int32, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *UpdateDatapointRequest) SetTimestamp(v int32)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *UpdateDatapointRequest) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### SetTimestampNil

`func (o *UpdateDatapointRequest) SetTimestampNil(b bool)`

 SetTimestampNil sets the value for Timestamp to be an explicit nil

### UnsetTimestamp
`func (o *UpdateDatapointRequest) UnsetTimestamp()`

UnsetTimestamp ensures that no value is present for Timestamp, not even an explicit nil
### GetComment

`func (o *UpdateDatapointRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *UpdateDatapointRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *UpdateDatapointRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *UpdateDatapointRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *UpdateDatapointRequest) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *UpdateDatapointRequest) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


