# CreateDatapointRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **float32** |  | [optional] 
**Timestamp** | Pointer to **NullableInt32** | The unix time (in seconds) of the datapoint. | [optional] 
**Daystamp** | Pointer to **NullableString** | The date of the datapoint. Sometimes timestamps are surprising due to goal deadlines, so if you&#39;re looking at Beeminder data, you&#39;re probably interested in the daystamp. | [optional] 
**Comment** | Pointer to **NullableString** | An optional comment about the datapoint. | [optional] 
**RequestId** | Pointer to **NullableString** | string to uniquely identify this datapoint (scoped to this goal. The same requestid can be used for different goals without being considered a duplicate). Clients can use this to verify that Beeminder received a datapoint (important for clients with spotty connectivity). Using requestids also means clients can safely resend datapoints without accidentally creating duplicates. If requestid is included and the datapoint is identical to the existing datapoint with that requestid then the datapoint will be ignored (the API will return \&quot;duplicate datapoint\&quot;). If requestid is included and the datapoint differs from the existing one with the same requestid then the datapoint will be updated. If no datapoint with the requestid exists then the datapoint is simply created. In other words, this is an upsert endpoint and requestid is an idempotency key. | [optional] 

## Methods

### NewCreateDatapointRequest

`func NewCreateDatapointRequest() *CreateDatapointRequest`

NewCreateDatapointRequest instantiates a new CreateDatapointRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateDatapointRequestWithDefaults

`func NewCreateDatapointRequestWithDefaults() *CreateDatapointRequest`

NewCreateDatapointRequestWithDefaults instantiates a new CreateDatapointRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *CreateDatapointRequest) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CreateDatapointRequest) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CreateDatapointRequest) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *CreateDatapointRequest) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetTimestamp

`func (o *CreateDatapointRequest) GetTimestamp() int32`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *CreateDatapointRequest) GetTimestampOk() (*int32, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *CreateDatapointRequest) SetTimestamp(v int32)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *CreateDatapointRequest) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### SetTimestampNil

`func (o *CreateDatapointRequest) SetTimestampNil(b bool)`

 SetTimestampNil sets the value for Timestamp to be an explicit nil

### UnsetTimestamp
`func (o *CreateDatapointRequest) UnsetTimestamp()`

UnsetTimestamp ensures that no value is present for Timestamp, not even an explicit nil
### GetDaystamp

`func (o *CreateDatapointRequest) GetDaystamp() string`

GetDaystamp returns the Daystamp field if non-nil, zero value otherwise.

### GetDaystampOk

`func (o *CreateDatapointRequest) GetDaystampOk() (*string, bool)`

GetDaystampOk returns a tuple with the Daystamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaystamp

`func (o *CreateDatapointRequest) SetDaystamp(v string)`

SetDaystamp sets Daystamp field to given value.

### HasDaystamp

`func (o *CreateDatapointRequest) HasDaystamp() bool`

HasDaystamp returns a boolean if a field has been set.

### SetDaystampNil

`func (o *CreateDatapointRequest) SetDaystampNil(b bool)`

 SetDaystampNil sets the value for Daystamp to be an explicit nil

### UnsetDaystamp
`func (o *CreateDatapointRequest) UnsetDaystamp()`

UnsetDaystamp ensures that no value is present for Daystamp, not even an explicit nil
### GetComment

`func (o *CreateDatapointRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CreateDatapointRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CreateDatapointRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CreateDatapointRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CreateDatapointRequest) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CreateDatapointRequest) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetRequestId

`func (o *CreateDatapointRequest) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *CreateDatapointRequest) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *CreateDatapointRequest) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *CreateDatapointRequest) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *CreateDatapointRequest) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *CreateDatapointRequest) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


