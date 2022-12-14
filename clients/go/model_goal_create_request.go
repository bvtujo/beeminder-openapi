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

// GoalCreateRequest Exactly two out of three of goaldate, goalval, and rate are required.
type GoalCreateRequest struct {
	// The final part of the URL of the goal, used as an identifier.
	Slug *string `json:"slug,omitempty"`
	Title *string `json:"title,omitempty"`
	GoalType *string `json:"goal_type,omitempty"`
	// Goal units, like \"hours\" or \"pushups\" or \"pages\".
	Gunits *string `json:"gunits,omitempty"`
	// The end date (unix timestamp) of the goal.
	Goaldate NullableFloat32 `json:"goaldate,omitempty"`
	// The number the bright red line will eventually reach.
	Goalval NullableFloat32 `json:"goalval,omitempty"`
	// The slope of the (final section of the) bright red line in runits.
	Rate NullableFloat32 `json:"rate,omitempty"`
	// The y-value of the start of the bright red line.
	Initval *float32 `json:"initval,omitempty"`
	// Whether you have to be logged in as owner of the goal to view it.
	Secret NullableBool `json:"secret,omitempty"`
	// Whether you have to be logged in as the owner of the goal to view the datapoints
	Datapublic NullableBool `json:"datapublic,omitempty"`
	// one of {\"api\", \"ifttt\", \"zapier\", or clientname}. Default: none (i.e., \"manual\").
	Datasource NullableString `json:"datasource,omitempty"`
	// Pass this to test the endpoint without actually creating a goal. Defaults to false.
	Dryrun NullableBool `json:"dryrun,omitempty"`
	Tags []string `json:"tags,omitempty"`
}

// NewGoalCreateRequest instantiates a new GoalCreateRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGoalCreateRequest() *GoalCreateRequest {
	this := GoalCreateRequest{}
	var secret bool = false
	this.Secret = *NewNullableBool(&secret)
	var datasource string = "manual"
	this.Datasource = *NewNullableString(&datasource)
	var dryrun bool = false
	this.Dryrun = *NewNullableBool(&dryrun)
	return &this
}

// NewGoalCreateRequestWithDefaults instantiates a new GoalCreateRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGoalCreateRequestWithDefaults() *GoalCreateRequest {
	this := GoalCreateRequest{}
	var secret bool = false
	this.Secret = *NewNullableBool(&secret)
	var datasource string = "manual"
	this.Datasource = *NewNullableString(&datasource)
	var dryrun bool = false
	this.Dryrun = *NewNullableBool(&dryrun)
	return &this
}

// GetSlug returns the Slug field value if set, zero value otherwise.
func (o *GoalCreateRequest) GetSlug() string {
	if o == nil || o.Slug == nil {
		var ret string
		return ret
	}
	return *o.Slug
}

// GetSlugOk returns a tuple with the Slug field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalCreateRequest) GetSlugOk() (*string, bool) {
	if o == nil || o.Slug == nil {
		return nil, false
	}
	return o.Slug, true
}

// HasSlug returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasSlug() bool {
	if o != nil && o.Slug != nil {
		return true
	}

	return false
}

// SetSlug gets a reference to the given string and assigns it to the Slug field.
func (o *GoalCreateRequest) SetSlug(v string) {
	o.Slug = &v
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *GoalCreateRequest) GetTitle() string {
	if o == nil || o.Title == nil {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalCreateRequest) GetTitleOk() (*string, bool) {
	if o == nil || o.Title == nil {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasTitle() bool {
	if o != nil && o.Title != nil {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *GoalCreateRequest) SetTitle(v string) {
	o.Title = &v
}

// GetGoalType returns the GoalType field value if set, zero value otherwise.
func (o *GoalCreateRequest) GetGoalType() string {
	if o == nil || o.GoalType == nil {
		var ret string
		return ret
	}
	return *o.GoalType
}

// GetGoalTypeOk returns a tuple with the GoalType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalCreateRequest) GetGoalTypeOk() (*string, bool) {
	if o == nil || o.GoalType == nil {
		return nil, false
	}
	return o.GoalType, true
}

// HasGoalType returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasGoalType() bool {
	if o != nil && o.GoalType != nil {
		return true
	}

	return false
}

// SetGoalType gets a reference to the given string and assigns it to the GoalType field.
func (o *GoalCreateRequest) SetGoalType(v string) {
	o.GoalType = &v
}

// GetGunits returns the Gunits field value if set, zero value otherwise.
func (o *GoalCreateRequest) GetGunits() string {
	if o == nil || o.Gunits == nil {
		var ret string
		return ret
	}
	return *o.Gunits
}

// GetGunitsOk returns a tuple with the Gunits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalCreateRequest) GetGunitsOk() (*string, bool) {
	if o == nil || o.Gunits == nil {
		return nil, false
	}
	return o.Gunits, true
}

// HasGunits returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasGunits() bool {
	if o != nil && o.Gunits != nil {
		return true
	}

	return false
}

// SetGunits gets a reference to the given string and assigns it to the Gunits field.
func (o *GoalCreateRequest) SetGunits(v string) {
	o.Gunits = &v
}

// GetGoaldate returns the Goaldate field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetGoaldate() float32 {
	if o == nil || o.Goaldate.Get() == nil {
		var ret float32
		return ret
	}
	return *o.Goaldate.Get()
}

// GetGoaldateOk returns a tuple with the Goaldate field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetGoaldateOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return o.Goaldate.Get(), o.Goaldate.IsSet()
}

// HasGoaldate returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasGoaldate() bool {
	if o != nil && o.Goaldate.IsSet() {
		return true
	}

	return false
}

// SetGoaldate gets a reference to the given NullableFloat32 and assigns it to the Goaldate field.
func (o *GoalCreateRequest) SetGoaldate(v float32) {
	o.Goaldate.Set(&v)
}
// SetGoaldateNil sets the value for Goaldate to be an explicit nil
func (o *GoalCreateRequest) SetGoaldateNil() {
	o.Goaldate.Set(nil)
}

// UnsetGoaldate ensures that no value is present for Goaldate, not even an explicit nil
func (o *GoalCreateRequest) UnsetGoaldate() {
	o.Goaldate.Unset()
}

// GetGoalval returns the Goalval field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetGoalval() float32 {
	if o == nil || o.Goalval.Get() == nil {
		var ret float32
		return ret
	}
	return *o.Goalval.Get()
}

// GetGoalvalOk returns a tuple with the Goalval field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetGoalvalOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return o.Goalval.Get(), o.Goalval.IsSet()
}

// HasGoalval returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasGoalval() bool {
	if o != nil && o.Goalval.IsSet() {
		return true
	}

	return false
}

// SetGoalval gets a reference to the given NullableFloat32 and assigns it to the Goalval field.
func (o *GoalCreateRequest) SetGoalval(v float32) {
	o.Goalval.Set(&v)
}
// SetGoalvalNil sets the value for Goalval to be an explicit nil
func (o *GoalCreateRequest) SetGoalvalNil() {
	o.Goalval.Set(nil)
}

// UnsetGoalval ensures that no value is present for Goalval, not even an explicit nil
func (o *GoalCreateRequest) UnsetGoalval() {
	o.Goalval.Unset()
}

// GetRate returns the Rate field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetRate() float32 {
	if o == nil || o.Rate.Get() == nil {
		var ret float32
		return ret
	}
	return *o.Rate.Get()
}

// GetRateOk returns a tuple with the Rate field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetRateOk() (*float32, bool) {
	if o == nil {
		return nil, false
	}
	return o.Rate.Get(), o.Rate.IsSet()
}

// HasRate returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasRate() bool {
	if o != nil && o.Rate.IsSet() {
		return true
	}

	return false
}

// SetRate gets a reference to the given NullableFloat32 and assigns it to the Rate field.
func (o *GoalCreateRequest) SetRate(v float32) {
	o.Rate.Set(&v)
}
// SetRateNil sets the value for Rate to be an explicit nil
func (o *GoalCreateRequest) SetRateNil() {
	o.Rate.Set(nil)
}

// UnsetRate ensures that no value is present for Rate, not even an explicit nil
func (o *GoalCreateRequest) UnsetRate() {
	o.Rate.Unset()
}

// GetInitval returns the Initval field value if set, zero value otherwise.
func (o *GoalCreateRequest) GetInitval() float32 {
	if o == nil || o.Initval == nil {
		var ret float32
		return ret
	}
	return *o.Initval
}

// GetInitvalOk returns a tuple with the Initval field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalCreateRequest) GetInitvalOk() (*float32, bool) {
	if o == nil || o.Initval == nil {
		return nil, false
	}
	return o.Initval, true
}

// HasInitval returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasInitval() bool {
	if o != nil && o.Initval != nil {
		return true
	}

	return false
}

// SetInitval gets a reference to the given float32 and assigns it to the Initval field.
func (o *GoalCreateRequest) SetInitval(v float32) {
	o.Initval = &v
}

// GetSecret returns the Secret field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetSecret() bool {
	if o == nil || o.Secret.Get() == nil {
		var ret bool
		return ret
	}
	return *o.Secret.Get()
}

// GetSecretOk returns a tuple with the Secret field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetSecretOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return o.Secret.Get(), o.Secret.IsSet()
}

// HasSecret returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasSecret() bool {
	if o != nil && o.Secret.IsSet() {
		return true
	}

	return false
}

// SetSecret gets a reference to the given NullableBool and assigns it to the Secret field.
func (o *GoalCreateRequest) SetSecret(v bool) {
	o.Secret.Set(&v)
}
// SetSecretNil sets the value for Secret to be an explicit nil
func (o *GoalCreateRequest) SetSecretNil() {
	o.Secret.Set(nil)
}

// UnsetSecret ensures that no value is present for Secret, not even an explicit nil
func (o *GoalCreateRequest) UnsetSecret() {
	o.Secret.Unset()
}

// GetDatapublic returns the Datapublic field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetDatapublic() bool {
	if o == nil || o.Datapublic.Get() == nil {
		var ret bool
		return ret
	}
	return *o.Datapublic.Get()
}

// GetDatapublicOk returns a tuple with the Datapublic field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetDatapublicOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return o.Datapublic.Get(), o.Datapublic.IsSet()
}

// HasDatapublic returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasDatapublic() bool {
	if o != nil && o.Datapublic.IsSet() {
		return true
	}

	return false
}

// SetDatapublic gets a reference to the given NullableBool and assigns it to the Datapublic field.
func (o *GoalCreateRequest) SetDatapublic(v bool) {
	o.Datapublic.Set(&v)
}
// SetDatapublicNil sets the value for Datapublic to be an explicit nil
func (o *GoalCreateRequest) SetDatapublicNil() {
	o.Datapublic.Set(nil)
}

// UnsetDatapublic ensures that no value is present for Datapublic, not even an explicit nil
func (o *GoalCreateRequest) UnsetDatapublic() {
	o.Datapublic.Unset()
}

// GetDatasource returns the Datasource field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetDatasource() string {
	if o == nil || o.Datasource.Get() == nil {
		var ret string
		return ret
	}
	return *o.Datasource.Get()
}

// GetDatasourceOk returns a tuple with the Datasource field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetDatasourceOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Datasource.Get(), o.Datasource.IsSet()
}

// HasDatasource returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasDatasource() bool {
	if o != nil && o.Datasource.IsSet() {
		return true
	}

	return false
}

// SetDatasource gets a reference to the given NullableString and assigns it to the Datasource field.
func (o *GoalCreateRequest) SetDatasource(v string) {
	o.Datasource.Set(&v)
}
// SetDatasourceNil sets the value for Datasource to be an explicit nil
func (o *GoalCreateRequest) SetDatasourceNil() {
	o.Datasource.Set(nil)
}

// UnsetDatasource ensures that no value is present for Datasource, not even an explicit nil
func (o *GoalCreateRequest) UnsetDatasource() {
	o.Datasource.Unset()
}

// GetDryrun returns the Dryrun field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *GoalCreateRequest) GetDryrun() bool {
	if o == nil || o.Dryrun.Get() == nil {
		var ret bool
		return ret
	}
	return *o.Dryrun.Get()
}

// GetDryrunOk returns a tuple with the Dryrun field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *GoalCreateRequest) GetDryrunOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return o.Dryrun.Get(), o.Dryrun.IsSet()
}

// HasDryrun returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasDryrun() bool {
	if o != nil && o.Dryrun.IsSet() {
		return true
	}

	return false
}

// SetDryrun gets a reference to the given NullableBool and assigns it to the Dryrun field.
func (o *GoalCreateRequest) SetDryrun(v bool) {
	o.Dryrun.Set(&v)
}
// SetDryrunNil sets the value for Dryrun to be an explicit nil
func (o *GoalCreateRequest) SetDryrunNil() {
	o.Dryrun.Set(nil)
}

// UnsetDryrun ensures that no value is present for Dryrun, not even an explicit nil
func (o *GoalCreateRequest) UnsetDryrun() {
	o.Dryrun.Unset()
}

// GetTags returns the Tags field value if set, zero value otherwise.
func (o *GoalCreateRequest) GetTags() []string {
	if o == nil || o.Tags == nil {
		var ret []string
		return ret
	}
	return o.Tags
}

// GetTagsOk returns a tuple with the Tags field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GoalCreateRequest) GetTagsOk() ([]string, bool) {
	if o == nil || o.Tags == nil {
		return nil, false
	}
	return o.Tags, true
}

// HasTags returns a boolean if a field has been set.
func (o *GoalCreateRequest) HasTags() bool {
	if o != nil && o.Tags != nil {
		return true
	}

	return false
}

// SetTags gets a reference to the given []string and assigns it to the Tags field.
func (o *GoalCreateRequest) SetTags(v []string) {
	o.Tags = v
}

func (o GoalCreateRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Slug != nil {
		toSerialize["slug"] = o.Slug
	}
	if o.Title != nil {
		toSerialize["title"] = o.Title
	}
	if o.GoalType != nil {
		toSerialize["goal_type"] = o.GoalType
	}
	if o.Gunits != nil {
		toSerialize["gunits"] = o.Gunits
	}
	if o.Goaldate.IsSet() {
		toSerialize["goaldate"] = o.Goaldate.Get()
	}
	if o.Goalval.IsSet() {
		toSerialize["goalval"] = o.Goalval.Get()
	}
	if o.Rate.IsSet() {
		toSerialize["rate"] = o.Rate.Get()
	}
	if o.Initval != nil {
		toSerialize["initval"] = o.Initval
	}
	if o.Secret.IsSet() {
		toSerialize["secret"] = o.Secret.Get()
	}
	if o.Datapublic.IsSet() {
		toSerialize["datapublic"] = o.Datapublic.Get()
	}
	if o.Datasource.IsSet() {
		toSerialize["datasource"] = o.Datasource.Get()
	}
	if o.Dryrun.IsSet() {
		toSerialize["dryrun"] = o.Dryrun.Get()
	}
	if o.Tags != nil {
		toSerialize["tags"] = o.Tags
	}
	return json.Marshal(toSerialize)
}

type NullableGoalCreateRequest struct {
	value *GoalCreateRequest
	isSet bool
}

func (v NullableGoalCreateRequest) Get() *GoalCreateRequest {
	return v.value
}

func (v *NullableGoalCreateRequest) Set(val *GoalCreateRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableGoalCreateRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableGoalCreateRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGoalCreateRequest(val *GoalCreateRequest) *NullableGoalCreateRequest {
	return &NullableGoalCreateRequest{value: val, isSet: true}
}

func (v NullableGoalCreateRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGoalCreateRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


