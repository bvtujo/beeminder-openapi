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

// SmallUser struct for SmallUser
type SmallUser struct {
	Username *string `json:"username,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
	UpdatedAt *int32 `json:"updated_at,omitempty"`
	CreatedAt *int32 `json:"created_at,omitempty"`
	UrgencyLoad *int32 `json:"urgency_load,omitempty"`
	Deadbeat *bool `json:"deadbeat,omitempty"`
	Goals []string `json:"goals,omitempty"`
	HasAuthorizedFitbit *bool `json:"has_authorized_fitbit,omitempty"`
	DefaultLeadtime *int32 `json:"default_leadtime,omitempty"`
	DefaultAlertstart *int32 `json:"default_alertstart,omitempty"`
	DefaultDeadline *int32 `json:"default_deadline,omitempty"`
	Subscription *string `json:"subscription,omitempty"`
}

// NewSmallUser instantiates a new SmallUser object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSmallUser() *SmallUser {
	this := SmallUser{}
	return &this
}

// NewSmallUserWithDefaults instantiates a new SmallUser object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSmallUserWithDefaults() *SmallUser {
	this := SmallUser{}
	return &this
}

// GetUsername returns the Username field value if set, zero value otherwise.
func (o *SmallUser) GetUsername() string {
	if o == nil || o.Username == nil {
		var ret string
		return ret
	}
	return *o.Username
}

// GetUsernameOk returns a tuple with the Username field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetUsernameOk() (*string, bool) {
	if o == nil || o.Username == nil {
		return nil, false
	}
	return o.Username, true
}

// HasUsername returns a boolean if a field has been set.
func (o *SmallUser) HasUsername() bool {
	if o != nil && o.Username != nil {
		return true
	}

	return false
}

// SetUsername gets a reference to the given string and assigns it to the Username field.
func (o *SmallUser) SetUsername(v string) {
	o.Username = &v
}

// GetTimezone returns the Timezone field value if set, zero value otherwise.
func (o *SmallUser) GetTimezone() string {
	if o == nil || o.Timezone == nil {
		var ret string
		return ret
	}
	return *o.Timezone
}

// GetTimezoneOk returns a tuple with the Timezone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetTimezoneOk() (*string, bool) {
	if o == nil || o.Timezone == nil {
		return nil, false
	}
	return o.Timezone, true
}

// HasTimezone returns a boolean if a field has been set.
func (o *SmallUser) HasTimezone() bool {
	if o != nil && o.Timezone != nil {
		return true
	}

	return false
}

// SetTimezone gets a reference to the given string and assigns it to the Timezone field.
func (o *SmallUser) SetTimezone(v string) {
	o.Timezone = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *SmallUser) GetUpdatedAt() int32 {
	if o == nil || o.UpdatedAt == nil {
		var ret int32
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetUpdatedAtOk() (*int32, bool) {
	if o == nil || o.UpdatedAt == nil {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *SmallUser) HasUpdatedAt() bool {
	if o != nil && o.UpdatedAt != nil {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given int32 and assigns it to the UpdatedAt field.
func (o *SmallUser) SetUpdatedAt(v int32) {
	o.UpdatedAt = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *SmallUser) GetCreatedAt() int32 {
	if o == nil || o.CreatedAt == nil {
		var ret int32
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetCreatedAtOk() (*int32, bool) {
	if o == nil || o.CreatedAt == nil {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *SmallUser) HasCreatedAt() bool {
	if o != nil && o.CreatedAt != nil {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given int32 and assigns it to the CreatedAt field.
func (o *SmallUser) SetCreatedAt(v int32) {
	o.CreatedAt = &v
}

// GetUrgencyLoad returns the UrgencyLoad field value if set, zero value otherwise.
func (o *SmallUser) GetUrgencyLoad() int32 {
	if o == nil || o.UrgencyLoad == nil {
		var ret int32
		return ret
	}
	return *o.UrgencyLoad
}

// GetUrgencyLoadOk returns a tuple with the UrgencyLoad field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetUrgencyLoadOk() (*int32, bool) {
	if o == nil || o.UrgencyLoad == nil {
		return nil, false
	}
	return o.UrgencyLoad, true
}

// HasUrgencyLoad returns a boolean if a field has been set.
func (o *SmallUser) HasUrgencyLoad() bool {
	if o != nil && o.UrgencyLoad != nil {
		return true
	}

	return false
}

// SetUrgencyLoad gets a reference to the given int32 and assigns it to the UrgencyLoad field.
func (o *SmallUser) SetUrgencyLoad(v int32) {
	o.UrgencyLoad = &v
}

// GetDeadbeat returns the Deadbeat field value if set, zero value otherwise.
func (o *SmallUser) GetDeadbeat() bool {
	if o == nil || o.Deadbeat == nil {
		var ret bool
		return ret
	}
	return *o.Deadbeat
}

// GetDeadbeatOk returns a tuple with the Deadbeat field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetDeadbeatOk() (*bool, bool) {
	if o == nil || o.Deadbeat == nil {
		return nil, false
	}
	return o.Deadbeat, true
}

// HasDeadbeat returns a boolean if a field has been set.
func (o *SmallUser) HasDeadbeat() bool {
	if o != nil && o.Deadbeat != nil {
		return true
	}

	return false
}

// SetDeadbeat gets a reference to the given bool and assigns it to the Deadbeat field.
func (o *SmallUser) SetDeadbeat(v bool) {
	o.Deadbeat = &v
}

// GetGoals returns the Goals field value if set, zero value otherwise.
func (o *SmallUser) GetGoals() []string {
	if o == nil || o.Goals == nil {
		var ret []string
		return ret
	}
	return o.Goals
}

// GetGoalsOk returns a tuple with the Goals field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetGoalsOk() ([]string, bool) {
	if o == nil || o.Goals == nil {
		return nil, false
	}
	return o.Goals, true
}

// HasGoals returns a boolean if a field has been set.
func (o *SmallUser) HasGoals() bool {
	if o != nil && o.Goals != nil {
		return true
	}

	return false
}

// SetGoals gets a reference to the given []string and assigns it to the Goals field.
func (o *SmallUser) SetGoals(v []string) {
	o.Goals = v
}

// GetHasAuthorizedFitbit returns the HasAuthorizedFitbit field value if set, zero value otherwise.
func (o *SmallUser) GetHasAuthorizedFitbit() bool {
	if o == nil || o.HasAuthorizedFitbit == nil {
		var ret bool
		return ret
	}
	return *o.HasAuthorizedFitbit
}

// GetHasAuthorizedFitbitOk returns a tuple with the HasAuthorizedFitbit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetHasAuthorizedFitbitOk() (*bool, bool) {
	if o == nil || o.HasAuthorizedFitbit == nil {
		return nil, false
	}
	return o.HasAuthorizedFitbit, true
}

// HasHasAuthorizedFitbit returns a boolean if a field has been set.
func (o *SmallUser) HasHasAuthorizedFitbit() bool {
	if o != nil && o.HasAuthorizedFitbit != nil {
		return true
	}

	return false
}

// SetHasAuthorizedFitbit gets a reference to the given bool and assigns it to the HasAuthorizedFitbit field.
func (o *SmallUser) SetHasAuthorizedFitbit(v bool) {
	o.HasAuthorizedFitbit = &v
}

// GetDefaultLeadtime returns the DefaultLeadtime field value if set, zero value otherwise.
func (o *SmallUser) GetDefaultLeadtime() int32 {
	if o == nil || o.DefaultLeadtime == nil {
		var ret int32
		return ret
	}
	return *o.DefaultLeadtime
}

// GetDefaultLeadtimeOk returns a tuple with the DefaultLeadtime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetDefaultLeadtimeOk() (*int32, bool) {
	if o == nil || o.DefaultLeadtime == nil {
		return nil, false
	}
	return o.DefaultLeadtime, true
}

// HasDefaultLeadtime returns a boolean if a field has been set.
func (o *SmallUser) HasDefaultLeadtime() bool {
	if o != nil && o.DefaultLeadtime != nil {
		return true
	}

	return false
}

// SetDefaultLeadtime gets a reference to the given int32 and assigns it to the DefaultLeadtime field.
func (o *SmallUser) SetDefaultLeadtime(v int32) {
	o.DefaultLeadtime = &v
}

// GetDefaultAlertstart returns the DefaultAlertstart field value if set, zero value otherwise.
func (o *SmallUser) GetDefaultAlertstart() int32 {
	if o == nil || o.DefaultAlertstart == nil {
		var ret int32
		return ret
	}
	return *o.DefaultAlertstart
}

// GetDefaultAlertstartOk returns a tuple with the DefaultAlertstart field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetDefaultAlertstartOk() (*int32, bool) {
	if o == nil || o.DefaultAlertstart == nil {
		return nil, false
	}
	return o.DefaultAlertstart, true
}

// HasDefaultAlertstart returns a boolean if a field has been set.
func (o *SmallUser) HasDefaultAlertstart() bool {
	if o != nil && o.DefaultAlertstart != nil {
		return true
	}

	return false
}

// SetDefaultAlertstart gets a reference to the given int32 and assigns it to the DefaultAlertstart field.
func (o *SmallUser) SetDefaultAlertstart(v int32) {
	o.DefaultAlertstart = &v
}

// GetDefaultDeadline returns the DefaultDeadline field value if set, zero value otherwise.
func (o *SmallUser) GetDefaultDeadline() int32 {
	if o == nil || o.DefaultDeadline == nil {
		var ret int32
		return ret
	}
	return *o.DefaultDeadline
}

// GetDefaultDeadlineOk returns a tuple with the DefaultDeadline field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetDefaultDeadlineOk() (*int32, bool) {
	if o == nil || o.DefaultDeadline == nil {
		return nil, false
	}
	return o.DefaultDeadline, true
}

// HasDefaultDeadline returns a boolean if a field has been set.
func (o *SmallUser) HasDefaultDeadline() bool {
	if o != nil && o.DefaultDeadline != nil {
		return true
	}

	return false
}

// SetDefaultDeadline gets a reference to the given int32 and assigns it to the DefaultDeadline field.
func (o *SmallUser) SetDefaultDeadline(v int32) {
	o.DefaultDeadline = &v
}

// GetSubscription returns the Subscription field value if set, zero value otherwise.
func (o *SmallUser) GetSubscription() string {
	if o == nil || o.Subscription == nil {
		var ret string
		return ret
	}
	return *o.Subscription
}

// GetSubscriptionOk returns a tuple with the Subscription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SmallUser) GetSubscriptionOk() (*string, bool) {
	if o == nil || o.Subscription == nil {
		return nil, false
	}
	return o.Subscription, true
}

// HasSubscription returns a boolean if a field has been set.
func (o *SmallUser) HasSubscription() bool {
	if o != nil && o.Subscription != nil {
		return true
	}

	return false
}

// SetSubscription gets a reference to the given string and assigns it to the Subscription field.
func (o *SmallUser) SetSubscription(v string) {
	o.Subscription = &v
}

func (o SmallUser) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Username != nil {
		toSerialize["username"] = o.Username
	}
	if o.Timezone != nil {
		toSerialize["timezone"] = o.Timezone
	}
	if o.UpdatedAt != nil {
		toSerialize["updated_at"] = o.UpdatedAt
	}
	if o.CreatedAt != nil {
		toSerialize["created_at"] = o.CreatedAt
	}
	if o.UrgencyLoad != nil {
		toSerialize["urgency_load"] = o.UrgencyLoad
	}
	if o.Deadbeat != nil {
		toSerialize["deadbeat"] = o.Deadbeat
	}
	if o.Goals != nil {
		toSerialize["goals"] = o.Goals
	}
	if o.HasAuthorizedFitbit != nil {
		toSerialize["has_authorized_fitbit"] = o.HasAuthorizedFitbit
	}
	if o.DefaultLeadtime != nil {
		toSerialize["default_leadtime"] = o.DefaultLeadtime
	}
	if o.DefaultAlertstart != nil {
		toSerialize["default_alertstart"] = o.DefaultAlertstart
	}
	if o.DefaultDeadline != nil {
		toSerialize["default_deadline"] = o.DefaultDeadline
	}
	if o.Subscription != nil {
		toSerialize["subscription"] = o.Subscription
	}
	return json.Marshal(toSerialize)
}

type NullableSmallUser struct {
	value *SmallUser
	isSet bool
}

func (v NullableSmallUser) Get() *SmallUser {
	return v.value
}

func (v *NullableSmallUser) Set(val *SmallUser) {
	v.value = val
	v.isSet = true
}

func (v NullableSmallUser) IsSet() bool {
	return v.isSet
}

func (v *NullableSmallUser) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSmallUser(val *SmallUser) *NullableSmallUser {
	return &NullableSmallUser{value: val, isSet: true}
}

func (v NullableSmallUser) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSmallUser) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


