/*
Beeminder

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 1.0
Contact: austinrossely@gmail.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// ChargeRequest The HTTP POST schema to create a charge.
type ChargeRequest struct {
	// Username of the user who is getting charged.
	UserId *string `json:"user_id,omitempty"`
	// The amount of the charge.
	Amount *float32 `json:"amount,omitempty"`
	// An optional note describing the charge.
	Note *string `json:"note,omitempty"`
	// If passed, the Charge is not actually created, but the JSON for it is returned as if it were.
	Dryrun *string `json:"dryrun,omitempty"`
}

// NewChargeRequest instantiates a new ChargeRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChargeRequest() *ChargeRequest {
	this := ChargeRequest{}
	var dryrun string = "true"
	this.Dryrun = &dryrun
	return &this
}

// NewChargeRequestWithDefaults instantiates a new ChargeRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChargeRequestWithDefaults() *ChargeRequest {
	this := ChargeRequest{}
	var dryrun string = "true"
	this.Dryrun = &dryrun
	return &this
}

// GetUserId returns the UserId field value if set, zero value otherwise.
func (o *ChargeRequest) GetUserId() string {
	if o == nil || o.UserId == nil {
		var ret string
		return ret
	}
	return *o.UserId
}

// GetUserIdOk returns a tuple with the UserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeRequest) GetUserIdOk() (*string, bool) {
	if o == nil || o.UserId == nil {
		return nil, false
	}
	return o.UserId, true
}

// HasUserId returns a boolean if a field has been set.
func (o *ChargeRequest) HasUserId() bool {
	if o != nil && o.UserId != nil {
		return true
	}

	return false
}

// SetUserId gets a reference to the given string and assigns it to the UserId field.
func (o *ChargeRequest) SetUserId(v string) {
	o.UserId = &v
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *ChargeRequest) GetAmount() float32 {
	if o == nil || o.Amount == nil {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeRequest) GetAmountOk() (*float32, bool) {
	if o == nil || o.Amount == nil {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *ChargeRequest) HasAmount() bool {
	if o != nil && o.Amount != nil {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *ChargeRequest) SetAmount(v float32) {
	o.Amount = &v
}

// GetNote returns the Note field value if set, zero value otherwise.
func (o *ChargeRequest) GetNote() string {
	if o == nil || o.Note == nil {
		var ret string
		return ret
	}
	return *o.Note
}

// GetNoteOk returns a tuple with the Note field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeRequest) GetNoteOk() (*string, bool) {
	if o == nil || o.Note == nil {
		return nil, false
	}
	return o.Note, true
}

// HasNote returns a boolean if a field has been set.
func (o *ChargeRequest) HasNote() bool {
	if o != nil && o.Note != nil {
		return true
	}

	return false
}

// SetNote gets a reference to the given string and assigns it to the Note field.
func (o *ChargeRequest) SetNote(v string) {
	o.Note = &v
}

// GetDryrun returns the Dryrun field value if set, zero value otherwise.
func (o *ChargeRequest) GetDryrun() string {
	if o == nil || o.Dryrun == nil {
		var ret string
		return ret
	}
	return *o.Dryrun
}

// GetDryrunOk returns a tuple with the Dryrun field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeRequest) GetDryrunOk() (*string, bool) {
	if o == nil || o.Dryrun == nil {
		return nil, false
	}
	return o.Dryrun, true
}

// HasDryrun returns a boolean if a field has been set.
func (o *ChargeRequest) HasDryrun() bool {
	if o != nil && o.Dryrun != nil {
		return true
	}

	return false
}

// SetDryrun gets a reference to the given string and assigns it to the Dryrun field.
func (o *ChargeRequest) SetDryrun(v string) {
	o.Dryrun = &v
}

func (o ChargeRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.UserId != nil {
		toSerialize["user_id"] = o.UserId
	}
	if o.Amount != nil {
		toSerialize["amount"] = o.Amount
	}
	if o.Note != nil {
		toSerialize["note"] = o.Note
	}
	if o.Dryrun != nil {
		toSerialize["dryrun"] = o.Dryrun
	}
	return json.Marshal(toSerialize)
}

type NullableChargeRequest struct {
	value *ChargeRequest
	isSet bool
}

func (v NullableChargeRequest) Get() *ChargeRequest {
	return v.value
}

func (v *NullableChargeRequest) Set(val *ChargeRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChargeRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChargeRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChargeRequest(val *ChargeRequest) *NullableChargeRequest {
	return &NullableChargeRequest{value: val, isSet: true}
}

func (v NullableChargeRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChargeRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


