# ChargeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | Pointer to **string** | Username of the user who is getting charged. | [optional] 
**Amount** | Pointer to **float32** | The amount of the charge. | [optional] 
**Note** | Pointer to **string** | An optional note describing the charge. | [optional] 
**Dryrun** | Pointer to **string** | If passed, the Charge is not actually created, but the JSON for it is returned as if it were. | [optional] [default to "true"]

## Methods

### NewChargeRequest

`func NewChargeRequest() *ChargeRequest`

NewChargeRequest instantiates a new ChargeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeRequestWithDefaults

`func NewChargeRequestWithDefaults() *ChargeRequest`

NewChargeRequestWithDefaults instantiates a new ChargeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *ChargeRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ChargeRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ChargeRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ChargeRequest) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetAmount

`func (o *ChargeRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ChargeRequest) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetNote

`func (o *ChargeRequest) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChargeRequest) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChargeRequest) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChargeRequest) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetDryrun

`func (o *ChargeRequest) GetDryrun() string`

GetDryrun returns the Dryrun field if non-nil, zero value otherwise.

### GetDryrunOk

`func (o *ChargeRequest) GetDryrunOk() (*string, bool)`

GetDryrunOk returns a tuple with the Dryrun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDryrun

`func (o *ChargeRequest) SetDryrun(v string)`

SetDryrun sets Dryrun field to given value.

### HasDryrun

`func (o *ChargeRequest) HasDryrun() bool`

HasDryrun returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


