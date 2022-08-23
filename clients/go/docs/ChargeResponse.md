# ChargeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the charge. | [optional] 
**Amount** | Pointer to **float32** | The amount of the charge. | [optional] 
**Note** | Pointer to **string** | An optional note describing the charge. | [optional] 
**UserId** | Pointer to **string** | The user id this charge was applied to. | [optional] 

## Methods

### NewChargeResponse

`func NewChargeResponse() *ChargeResponse`

NewChargeResponse instantiates a new ChargeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChargeResponseWithDefaults

`func NewChargeResponseWithDefaults() *ChargeResponse`

NewChargeResponseWithDefaults instantiates a new ChargeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChargeResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChargeResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChargeResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ChargeResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAmount

`func (o *ChargeResponse) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ChargeResponse) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ChargeResponse) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ChargeResponse) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetNote

`func (o *ChargeResponse) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChargeResponse) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChargeResponse) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChargeResponse) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetUserId

`func (o *ChargeResponse) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ChargeResponse) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ChargeResponse) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ChargeResponse) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


