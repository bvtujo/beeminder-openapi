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

// GoalRecentDataInnerId struct for GoalRecentDataInnerId
type GoalRecentDataInnerId struct {
	Oid *string `json:"$oid,omitempty"`
}

// NewGoalRecentDataInnerId instantiates a new GoalRecentDataInnerId object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGoalRecentDataInnerId() *GoalRecentDataInnerId {
	this := GoalRecentDataInnerId{}
	return &this
}

// NewGoalRecentDataInnerIdWithDefaults instantiates a new GoalRecentDataInnerId object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGoalRecentDataInnerIdWithDefaults() *GoalRecentDataInnerId {
	this := GoalRecentDataInnerId{}
	return &this
}

// GetOid returns the Oid field value if set, zero value otherwise.
func (o *GoalRecentDataInnerId) GetOid() string {
	if o == nil || o.Oid == nil {
		var ret string
		return ret
	}
	return *o.Oid
}

// GetOidOk returns a tuple with the Oid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalRecentDataInnerId) GetOidOk() (*string, bool) {
	if o == nil || o.Oid == nil {
		return nil, false
	}
	return o.Oid, true
}

// HasOid returns a boolean if a field has been set.
func (o *GoalRecentDataInnerId) HasOid() bool {
	if o != nil && o.Oid != nil {
		return true
	}

	return false
}

// SetOid gets a reference to the given string and assigns it to the Oid field.
func (o *GoalRecentDataInnerId) SetOid(v string) {
	o.Oid = &v
}

func (o GoalRecentDataInnerId) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Oid != nil {
		toSerialize["$oid"] = o.Oid
	}
	return json.Marshal(toSerialize)
}

type NullableGoalRecentDataInnerId struct {
	value *GoalRecentDataInnerId
	isSet bool
}

func (v NullableGoalRecentDataInnerId) Get() *GoalRecentDataInnerId {
	return v.value
}

func (v *NullableGoalRecentDataInnerId) Set(val *GoalRecentDataInnerId) {
	v.value = val
	v.isSet = true
}

func (v NullableGoalRecentDataInnerId) IsSet() bool {
	return v.isSet
}

func (v *NullableGoalRecentDataInnerId) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGoalRecentDataInnerId(val *GoalRecentDataInnerId) *NullableGoalRecentDataInnerId {
	return &NullableGoalRecentDataInnerId{value: val, isSet: true}
}

func (v NullableGoalRecentDataInnerId) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGoalRecentDataInnerId) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


