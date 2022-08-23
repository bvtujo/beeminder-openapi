# GoalCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Slug** | Pointer to **string** | The final part of the URL of the goal, used as an identifier. | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**GoalType** | Pointer to **string** |  | [optional] 
**Gunits** | Pointer to **string** | Goal units, like \&quot;hours\&quot; or \&quot;pushups\&quot; or \&quot;pages\&quot;. | [optional] 
**Goaldate** | Pointer to **NullableFloat32** | The end date (unix timestamp) of the goal. | [optional] 
**Goalval** | Pointer to **NullableFloat32** | The number the bright red line will eventually reach. | [optional] 
**Rate** | Pointer to **NullableFloat32** | The slope of the (final section of the) bright red line in runits. | [optional] 
**Initval** | Pointer to **float32** | The y-value of the start of the bright red line. | [optional] 
**Secret** | Pointer to **NullableBool** | Whether you have to be logged in as owner of the goal to view it. | [optional] [default to false]
**Datapublic** | Pointer to **NullableBool** | Whether you have to be logged in as the owner of the goal to view the datapoints | [optional] 
**Datasource** | Pointer to **NullableString** | one of {\&quot;api\&quot;, \&quot;ifttt\&quot;, \&quot;zapier\&quot;, or clientname}. Default: none (i.e., \&quot;manual\&quot;). | [optional] [default to "manual"]
**Dryrun** | Pointer to **NullableBool** | Pass this to test the endpoint without actually creating a goal. Defaults to false. | [optional] [default to false]
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewGoalCreateRequest

`func NewGoalCreateRequest() *GoalCreateRequest`

NewGoalCreateRequest instantiates a new GoalCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoalCreateRequestWithDefaults

`func NewGoalCreateRequestWithDefaults() *GoalCreateRequest`

NewGoalCreateRequestWithDefaults instantiates a new GoalCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSlug

`func (o *GoalCreateRequest) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *GoalCreateRequest) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *GoalCreateRequest) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *GoalCreateRequest) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetTitle

`func (o *GoalCreateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *GoalCreateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *GoalCreateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *GoalCreateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetGoalType

`func (o *GoalCreateRequest) GetGoalType() string`

GetGoalType returns the GoalType field if non-nil, zero value otherwise.

### GetGoalTypeOk

`func (o *GoalCreateRequest) GetGoalTypeOk() (*string, bool)`

GetGoalTypeOk returns a tuple with the GoalType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalType

`func (o *GoalCreateRequest) SetGoalType(v string)`

SetGoalType sets GoalType field to given value.

### HasGoalType

`func (o *GoalCreateRequest) HasGoalType() bool`

HasGoalType returns a boolean if a field has been set.

### GetGunits

`func (o *GoalCreateRequest) GetGunits() string`

GetGunits returns the Gunits field if non-nil, zero value otherwise.

### GetGunitsOk

`func (o *GoalCreateRequest) GetGunitsOk() (*string, bool)`

GetGunitsOk returns a tuple with the Gunits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGunits

`func (o *GoalCreateRequest) SetGunits(v string)`

SetGunits sets Gunits field to given value.

### HasGunits

`func (o *GoalCreateRequest) HasGunits() bool`

HasGunits returns a boolean if a field has been set.

### GetGoaldate

`func (o *GoalCreateRequest) GetGoaldate() float32`

GetGoaldate returns the Goaldate field if non-nil, zero value otherwise.

### GetGoaldateOk

`func (o *GoalCreateRequest) GetGoaldateOk() (*float32, bool)`

GetGoaldateOk returns a tuple with the Goaldate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoaldate

`func (o *GoalCreateRequest) SetGoaldate(v float32)`

SetGoaldate sets Goaldate field to given value.

### HasGoaldate

`func (o *GoalCreateRequest) HasGoaldate() bool`

HasGoaldate returns a boolean if a field has been set.

### SetGoaldateNil

`func (o *GoalCreateRequest) SetGoaldateNil(b bool)`

 SetGoaldateNil sets the value for Goaldate to be an explicit nil

### UnsetGoaldate
`func (o *GoalCreateRequest) UnsetGoaldate()`

UnsetGoaldate ensures that no value is present for Goaldate, not even an explicit nil
### GetGoalval

`func (o *GoalCreateRequest) GetGoalval() float32`

GetGoalval returns the Goalval field if non-nil, zero value otherwise.

### GetGoalvalOk

`func (o *GoalCreateRequest) GetGoalvalOk() (*float32, bool)`

GetGoalvalOk returns a tuple with the Goalval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalval

`func (o *GoalCreateRequest) SetGoalval(v float32)`

SetGoalval sets Goalval field to given value.

### HasGoalval

`func (o *GoalCreateRequest) HasGoalval() bool`

HasGoalval returns a boolean if a field has been set.

### SetGoalvalNil

`func (o *GoalCreateRequest) SetGoalvalNil(b bool)`

 SetGoalvalNil sets the value for Goalval to be an explicit nil

### UnsetGoalval
`func (o *GoalCreateRequest) UnsetGoalval()`

UnsetGoalval ensures that no value is present for Goalval, not even an explicit nil
### GetRate

`func (o *GoalCreateRequest) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *GoalCreateRequest) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *GoalCreateRequest) SetRate(v float32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *GoalCreateRequest) HasRate() bool`

HasRate returns a boolean if a field has been set.

### SetRateNil

`func (o *GoalCreateRequest) SetRateNil(b bool)`

 SetRateNil sets the value for Rate to be an explicit nil

### UnsetRate
`func (o *GoalCreateRequest) UnsetRate()`

UnsetRate ensures that no value is present for Rate, not even an explicit nil
### GetInitval

`func (o *GoalCreateRequest) GetInitval() float32`

GetInitval returns the Initval field if non-nil, zero value otherwise.

### GetInitvalOk

`func (o *GoalCreateRequest) GetInitvalOk() (*float32, bool)`

GetInitvalOk returns a tuple with the Initval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitval

`func (o *GoalCreateRequest) SetInitval(v float32)`

SetInitval sets Initval field to given value.

### HasInitval

`func (o *GoalCreateRequest) HasInitval() bool`

HasInitval returns a boolean if a field has been set.

### GetSecret

`func (o *GoalCreateRequest) GetSecret() bool`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *GoalCreateRequest) GetSecretOk() (*bool, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *GoalCreateRequest) SetSecret(v bool)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *GoalCreateRequest) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### SetSecretNil

`func (o *GoalCreateRequest) SetSecretNil(b bool)`

 SetSecretNil sets the value for Secret to be an explicit nil

### UnsetSecret
`func (o *GoalCreateRequest) UnsetSecret()`

UnsetSecret ensures that no value is present for Secret, not even an explicit nil
### GetDatapublic

`func (o *GoalCreateRequest) GetDatapublic() bool`

GetDatapublic returns the Datapublic field if non-nil, zero value otherwise.

### GetDatapublicOk

`func (o *GoalCreateRequest) GetDatapublicOk() (*bool, bool)`

GetDatapublicOk returns a tuple with the Datapublic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatapublic

`func (o *GoalCreateRequest) SetDatapublic(v bool)`

SetDatapublic sets Datapublic field to given value.

### HasDatapublic

`func (o *GoalCreateRequest) HasDatapublic() bool`

HasDatapublic returns a boolean if a field has been set.

### SetDatapublicNil

`func (o *GoalCreateRequest) SetDatapublicNil(b bool)`

 SetDatapublicNil sets the value for Datapublic to be an explicit nil

### UnsetDatapublic
`func (o *GoalCreateRequest) UnsetDatapublic()`

UnsetDatapublic ensures that no value is present for Datapublic, not even an explicit nil
### GetDatasource

`func (o *GoalCreateRequest) GetDatasource() string`

GetDatasource returns the Datasource field if non-nil, zero value otherwise.

### GetDatasourceOk

`func (o *GoalCreateRequest) GetDatasourceOk() (*string, bool)`

GetDatasourceOk returns a tuple with the Datasource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasource

`func (o *GoalCreateRequest) SetDatasource(v string)`

SetDatasource sets Datasource field to given value.

### HasDatasource

`func (o *GoalCreateRequest) HasDatasource() bool`

HasDatasource returns a boolean if a field has been set.

### SetDatasourceNil

`func (o *GoalCreateRequest) SetDatasourceNil(b bool)`

 SetDatasourceNil sets the value for Datasource to be an explicit nil

### UnsetDatasource
`func (o *GoalCreateRequest) UnsetDatasource()`

UnsetDatasource ensures that no value is present for Datasource, not even an explicit nil
### GetDryrun

`func (o *GoalCreateRequest) GetDryrun() bool`

GetDryrun returns the Dryrun field if non-nil, zero value otherwise.

### GetDryrunOk

`func (o *GoalCreateRequest) GetDryrunOk() (*bool, bool)`

GetDryrunOk returns a tuple with the Dryrun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDryrun

`func (o *GoalCreateRequest) SetDryrun(v bool)`

SetDryrun sets Dryrun field to given value.

### HasDryrun

`func (o *GoalCreateRequest) HasDryrun() bool`

HasDryrun returns a boolean if a field has been set.

### SetDryrunNil

`func (o *GoalCreateRequest) SetDryrunNil(b bool)`

 SetDryrunNil sets the value for Dryrun to be an explicit nil

### UnsetDryrun
`func (o *GoalCreateRequest) UnsetDryrun()`

UnsetDryrun ensures that no value is present for Dryrun, not even an explicit nil
### GetTags

`func (o *GoalCreateRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *GoalCreateRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *GoalCreateRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *GoalCreateRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


