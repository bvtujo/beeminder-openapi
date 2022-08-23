# Datapoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique ID, used to identify a datapoint when deleting or editing it. | [optional] 
**Timestamp** | Pointer to **int32** | The unix time (in seconds) of the datapoint. | [optional] 
**Canonical** | Pointer to **NullableString** | The canonical \&quot;data entry format\&quot; of the datapoint. | [optional] 
**Daystamp** | Pointer to **string** | The date of the datapoint. Sometimes timestamps are surprising due to goal deadlines, so if you&#39;re looking at Beeminder data, you&#39;re probably interested in the daystamp. | [optional] 
**Value** | Pointer to **float32** | The value, e.g., how much you weighed on the day indicated by the timestamp. | [optional] 
**Comment** | Pointer to **NullableString** | An optional comment about the datapoint. | [optional] 
**UpdatedAt** | Pointer to **int32** | The unix time that this datapoint was entered or last updated. | [optional] 
**Requestid** | Pointer to **NullableString** | If a datapoint was created via the API and this parameter was included, it will be echoed back. | [optional] 
**Origin** | Pointer to **string** | Parameter for datapoint representation in goals | [optional] 
**Fulltext** | Pointer to **string** |  | [optional] 

## Methods

### NewDatapoint

`func NewDatapoint() *Datapoint`

NewDatapoint instantiates a new Datapoint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatapointWithDefaults

`func NewDatapointWithDefaults() *Datapoint`

NewDatapointWithDefaults instantiates a new Datapoint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Datapoint) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Datapoint) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Datapoint) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Datapoint) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTimestamp

`func (o *Datapoint) GetTimestamp() int32`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Datapoint) GetTimestampOk() (*int32, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Datapoint) SetTimestamp(v int32)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *Datapoint) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetCanonical

`func (o *Datapoint) GetCanonical() string`

GetCanonical returns the Canonical field if non-nil, zero value otherwise.

### GetCanonicalOk

`func (o *Datapoint) GetCanonicalOk() (*string, bool)`

GetCanonicalOk returns a tuple with the Canonical field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanonical

`func (o *Datapoint) SetCanonical(v string)`

SetCanonical sets Canonical field to given value.

### HasCanonical

`func (o *Datapoint) HasCanonical() bool`

HasCanonical returns a boolean if a field has been set.

### SetCanonicalNil

`func (o *Datapoint) SetCanonicalNil(b bool)`

 SetCanonicalNil sets the value for Canonical to be an explicit nil

### UnsetCanonical
`func (o *Datapoint) UnsetCanonical()`

UnsetCanonical ensures that no value is present for Canonical, not even an explicit nil
### GetDaystamp

`func (o *Datapoint) GetDaystamp() string`

GetDaystamp returns the Daystamp field if non-nil, zero value otherwise.

### GetDaystampOk

`func (o *Datapoint) GetDaystampOk() (*string, bool)`

GetDaystampOk returns a tuple with the Daystamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaystamp

`func (o *Datapoint) SetDaystamp(v string)`

SetDaystamp sets Daystamp field to given value.

### HasDaystamp

`func (o *Datapoint) HasDaystamp() bool`

HasDaystamp returns a boolean if a field has been set.

### GetValue

`func (o *Datapoint) GetValue() float32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Datapoint) GetValueOk() (*float32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Datapoint) SetValue(v float32)`

SetValue sets Value field to given value.

### HasValue

`func (o *Datapoint) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetComment

`func (o *Datapoint) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Datapoint) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Datapoint) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Datapoint) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *Datapoint) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *Datapoint) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetUpdatedAt

`func (o *Datapoint) GetUpdatedAt() int32`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Datapoint) GetUpdatedAtOk() (*int32, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Datapoint) SetUpdatedAt(v int32)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Datapoint) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetRequestid

`func (o *Datapoint) GetRequestid() string`

GetRequestid returns the Requestid field if non-nil, zero value otherwise.

### GetRequestidOk

`func (o *Datapoint) GetRequestidOk() (*string, bool)`

GetRequestidOk returns a tuple with the Requestid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestid

`func (o *Datapoint) SetRequestid(v string)`

SetRequestid sets Requestid field to given value.

### HasRequestid

`func (o *Datapoint) HasRequestid() bool`

HasRequestid returns a boolean if a field has been set.

### SetRequestidNil

`func (o *Datapoint) SetRequestidNil(b bool)`

 SetRequestidNil sets the value for Requestid to be an explicit nil

### UnsetRequestid
`func (o *Datapoint) UnsetRequestid()`

UnsetRequestid ensures that no value is present for Requestid, not even an explicit nil
### GetOrigin

`func (o *Datapoint) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *Datapoint) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *Datapoint) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *Datapoint) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### GetFulltext

`func (o *Datapoint) GetFulltext() string`

GetFulltext returns the Fulltext field if non-nil, zero value otherwise.

### GetFulltextOk

`func (o *Datapoint) GetFulltextOk() (*string, bool)`

GetFulltextOk returns a tuple with the Fulltext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFulltext

`func (o *Datapoint) SetFulltext(v string)`

SetFulltext sets Fulltext field to given value.

### HasFulltext

`func (o *Datapoint) HasFulltext() bool`

HasFulltext returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


