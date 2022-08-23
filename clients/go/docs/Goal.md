# Goal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Slug** | Pointer to **string** | The final part of the URL of the goal, used as an identifier. | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** | Optional description. | [optional] 
**Goalval** | Pointer to **NullableFloat32** | The number the bright red line will eventually reach. | [optional] 
**Rate** | Pointer to **NullableFloat32** | The slope of the (final section of the) bright red line in runits. | [optional] 
**Goaldate** | Pointer to **NullableFloat32** | The end date (unix timestamp) of the goal. | [optional] 
**SvgUrl** | Pointer to **string** |  | [optional] 
**GraphUrl** | Pointer to **string** |  | [optional] 
**ThumbUrl** | Pointer to **string** |  | [optional] 
**GoalType** | Pointer to **string** |  | [optional] 
**Autodata** | Pointer to **NullableString** |  | [optional] 
**Healthkitmetric** | Pointer to **string** |  | [optional] 
**Losedate** | Pointer to **int32** |  | [optional] 
**Deadline** | Pointer to **int32** | seconds by which the deadline differs from midnight | [optional] 
**Leadtime** | Pointer to **int32** | Days before deadline before we start sending you reminders. | [optional] 
**Alertstart** | Pointer to **int32** | Seconds after midight that we start sending you reminders. | [optional] 
**UseDefaults** | Pointer to **bool** |  | [optional] 
**Id** | Pointer to **string** | Unique hex identifier of goal | [optional] 
**Ephem** | Pointer to **bool** |  | [optional] 
**Queued** | Pointer to **bool** |  | [optional] 
**Panic** | Pointer to **int32** |  | [optional] 
**UpdatedAt** | Pointer to **int32** |  | [optional] 
**Burner** | Pointer to **string** |  | [optional] 
**Yaw** | Pointer to **int32** | Good side of the bright red line. | [optional] 
**Lane** | Pointer to **int32** | See LoseDate and SafeBuf | [optional] 
**Lanewidth** | Pointer to **float32** |  | [optional] 
**Delta** | Pointer to **float32** | Distance from the bright red line to today&#39;s datapoint | [optional] 
**Runits** | Pointer to **string** |  | [optional] 
**Limsum** | Pointer to **string** | Summary of what you need to do eke by. | [optional] 
**Frozen** | Pointer to **bool** | Whether the goal is currently frozen and therefore must be restarted before continuing to accept data. | [optional] 
**Lost** | Pointer to **bool** | Whether the goal is currently off track. | [optional] 
**Won** | Pointer to **bool** | Whether the goal has been successfully completed. | [optional] 
**Contract** | Pointer to [**GoalContract**](GoalContract.md) |  | [optional] 
**DeltaText** | Pointer to **string** |  | [optional] 
**Safebump** | Pointer to **float32** | The absolute y-axis number you need to reach to get one additional day of safety buffer. | [optional] 
**Safesum** | Pointer to **string** |  | [optional] 
**Limsumdate** | Pointer to **string** |  | [optional] 
**Limsumdays** | Pointer to **string** |  | [optional] 
**Baremin** | Pointer to **string** |  | [optional] 
**Baremintotal** | Pointer to **string** |  | [optional] 
**Roadstatuscolor** | Pointer to **string** |  | [optional] 
**Lasttouch** | Pointer to **string** |  | [optional] 
**Safebuf** | Pointer to **float32** | The integer number of safe days. If it&#39;s a beemergency this will be zero. | [optional] 
**Coasting** | Pointer to **bool** |  | [optional] 
**Integery** | Pointer to **bool** | Assume that the units must be integer values. Used for things like limsum. | [optional] 
**Fineprint** | Pointer to **string** | The user-provided description of what exactly they are committing to. | [optional] 
**Todayta** | Pointer to **bool** | Whether there are any datapoints for today | [optional] 
**Hhmmformat** | Pointer to **bool** | Whether to show data in a \&quot;timey\&quot; way, with colons. For example, this would make a 1.5 show up as 1:30. | [optional] 
**Gunits** | Pointer to **string** | Goal units, like \&quot;hours\&quot; or \&quot;pushups\&quot; or \&quot;pages\&quot;. | [optional] 
**WeekendsOff** | Pointer to **bool** | If the goal has weekends automatically scheduled. | [optional] 
**Yaxis** | Pointer to **string** | The label for the y-axis of the graph. E.g., \&quot;Cumulative total hours\&quot;. | [optional] 
**Maxflux** | Pointer to **NullableFloat32** | Max daily fluctuation for weight goals. Used as an absolute buffer amount on recommit. Also shown on the graph as a thick guiding line. | [optional] 
**Tmin** | Pointer to **NullableString** | Lower bound on x-axis; don&#39;t show data before this date; using yyyy-mm-dd date format. | [optional] 
**Tmax** | Pointer to **NullableString** | Upper bound on x-axis; don&#39;t show data after this date; using yyyy-mm-dd date format. | [optional] 
**Initday** | Pointer to **int32** | Unix timestamp (in seconds) of the start of the bright red line. | [optional] 
**Initval** | Pointer to **float32** | The y-value of the start of the bright red line. | [optional] 
**Curday** | Pointer to **float32** | Unix timestamp (in seconds) of the end of the bright red line, i.e., the most recent (inferred) datapoint. | [optional] 
**Curval** | Pointer to **float32** | The value of the most recent datapoint. | [optional] 
**Lastday** | Pointer to **float32** | Unix timestamp (in seconds) of the last (explicitly entered) datapoint. | [optional] 
**Dir** | Pointer to **float32** | Direction the bright red line is sloping, usually the same as yaw. | [optional] 
**Kyoom** | Pointer to **bool** | Cumulative; plot values as the sum of all those entered so far, aka auto-summing. | [optional] 
**Odom** | Pointer to **bool** | Treat zeros as accidental odometer resets. | [optional] 
**Noisy** | Pointer to **bool** |  | [optional] 
**Aggday** | Pointer to **string** | How to aggregate points on the same day, eg, min/max/mean. | [optional] 
**Plotall** | Pointer to **bool** | Whether to plot all the datapoints, or only the aggday&#39;d one. So if false then only the official datapoint that&#39;s counted is plotted. | [optional] 
**Steppy** | Pointer to **bool** | Join dots with purple steppy-style line. | [optional] 
**Rosy** | Pointer to **bool** | Show the rose-colored dots and connecting line. | [optional] 
**Movingav** | Pointer to **bool** | Show moving average line superimposed on the data. | [optional] 
**Aura** | Pointer to **bool** | Show turquoise swath, aka blue-green aura. | [optional] 
**Numpts** | Pointer to **float32** |  | [optional] 
**Road** | Pointer to **[][]*float32** | Array of tuples that can be used to construct the Bright Red Line (formerly \&quot;Yellow Brick Road\&quot;). This field is also known as the graph matrix. Each tuple specifies 2 out of 3 of [time, goal, rate]. To construct road, start with a known starting point (time, value) and then each row of the graph matrix specifies 2 out of 3 of {t,v,r} which gives the segment ending at time t. You can walk forward filling in the missing 1-out-of-3 from the (time, value) in the previous row. | [optional] 
**Roadall** | Pointer to **[][]*float32** | Like road but with an additional initial row consisting of [initday, initval, null] and an additional final row consisting of [goaldate, goalval, rate] | [optional] 
**Fullroad** | Pointer to **[][]float32** | Like roadall but with the nulls filled in. | [optional] 
**Secret** | Pointer to **bool** | Whether you have to be logged in as owner of the goal to view it. | [optional] [default to false]
**Pledge** | Pointer to **float32** | Amount pledged (USD) on the goal. | [optional] 
**Mathishard** | Pointer to **[]float32** | The goaldate, goalval, and rate — all filled in. (The commitment dial specifies 2 out of 3 and you can check this if you want Beeminder to do the math for you on inferring the third one.) | [optional] 
**Headsum** | Pointer to **string** | Deprecated. Summary text blurb saying how much safety buffer you have. | [optional] 
**Datapublic** | Pointer to **bool** | Whether you have to be logged in as the owner of the goal to view the datapoints | [optional] 
**Graphsum** | Pointer to **string** | Deprecated. Text summary of the graph, not used in the web UI anymore. | [optional] 
**Rah** | Pointer to **float32** | Red line value (y-value of the bright red line) at the akrasia horizon (today plus one week). | [optional] 
**LastDatapoint** | Pointer to [**Datapoint**](Datapoint.md) |  | [optional] 
**CallbackUrl** | Pointer to **NullableString** | Callback URL.WARNING: If different apps change this they&#39;ll step on each other&#39;s toes. | [optional] 
**Tags** | Pointer to **[]string** | A list of the goal&#39;s tags. | [optional] 
**RecentData** | Pointer to [**[]GoalRecentDataInner**](GoalRecentDataInner.md) |  | [optional] 
**Dueby** | Pointer to [**map[string]GoalDuebyValue**](GoalDuebyValue.md) |  | [optional] 
**Datapoints** | Pointer to [**[]Datapoint**](Datapoint.md) |  | [optional] 

## Methods

### NewGoal

`func NewGoal() *Goal`

NewGoal instantiates a new Goal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoalWithDefaults

`func NewGoalWithDefaults() *Goal`

NewGoalWithDefaults instantiates a new Goal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSlug

`func (o *Goal) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *Goal) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *Goal) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *Goal) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetTitle

`func (o *Goal) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Goal) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Goal) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Goal) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *Goal) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Goal) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Goal) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Goal) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGoalval

`func (o *Goal) GetGoalval() float32`

GetGoalval returns the Goalval field if non-nil, zero value otherwise.

### GetGoalvalOk

`func (o *Goal) GetGoalvalOk() (*float32, bool)`

GetGoalvalOk returns a tuple with the Goalval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalval

`func (o *Goal) SetGoalval(v float32)`

SetGoalval sets Goalval field to given value.

### HasGoalval

`func (o *Goal) HasGoalval() bool`

HasGoalval returns a boolean if a field has been set.

### SetGoalvalNil

`func (o *Goal) SetGoalvalNil(b bool)`

 SetGoalvalNil sets the value for Goalval to be an explicit nil

### UnsetGoalval
`func (o *Goal) UnsetGoalval()`

UnsetGoalval ensures that no value is present for Goalval, not even an explicit nil
### GetRate

`func (o *Goal) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *Goal) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *Goal) SetRate(v float32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *Goal) HasRate() bool`

HasRate returns a boolean if a field has been set.

### SetRateNil

`func (o *Goal) SetRateNil(b bool)`

 SetRateNil sets the value for Rate to be an explicit nil

### UnsetRate
`func (o *Goal) UnsetRate()`

UnsetRate ensures that no value is present for Rate, not even an explicit nil
### GetGoaldate

`func (o *Goal) GetGoaldate() float32`

GetGoaldate returns the Goaldate field if non-nil, zero value otherwise.

### GetGoaldateOk

`func (o *Goal) GetGoaldateOk() (*float32, bool)`

GetGoaldateOk returns a tuple with the Goaldate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoaldate

`func (o *Goal) SetGoaldate(v float32)`

SetGoaldate sets Goaldate field to given value.

### HasGoaldate

`func (o *Goal) HasGoaldate() bool`

HasGoaldate returns a boolean if a field has been set.

### SetGoaldateNil

`func (o *Goal) SetGoaldateNil(b bool)`

 SetGoaldateNil sets the value for Goaldate to be an explicit nil

### UnsetGoaldate
`func (o *Goal) UnsetGoaldate()`

UnsetGoaldate ensures that no value is present for Goaldate, not even an explicit nil
### GetSvgUrl

`func (o *Goal) GetSvgUrl() string`

GetSvgUrl returns the SvgUrl field if non-nil, zero value otherwise.

### GetSvgUrlOk

`func (o *Goal) GetSvgUrlOk() (*string, bool)`

GetSvgUrlOk returns a tuple with the SvgUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSvgUrl

`func (o *Goal) SetSvgUrl(v string)`

SetSvgUrl sets SvgUrl field to given value.

### HasSvgUrl

`func (o *Goal) HasSvgUrl() bool`

HasSvgUrl returns a boolean if a field has been set.

### GetGraphUrl

`func (o *Goal) GetGraphUrl() string`

GetGraphUrl returns the GraphUrl field if non-nil, zero value otherwise.

### GetGraphUrlOk

`func (o *Goal) GetGraphUrlOk() (*string, bool)`

GetGraphUrlOk returns a tuple with the GraphUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphUrl

`func (o *Goal) SetGraphUrl(v string)`

SetGraphUrl sets GraphUrl field to given value.

### HasGraphUrl

`func (o *Goal) HasGraphUrl() bool`

HasGraphUrl returns a boolean if a field has been set.

### GetThumbUrl

`func (o *Goal) GetThumbUrl() string`

GetThumbUrl returns the ThumbUrl field if non-nil, zero value otherwise.

### GetThumbUrlOk

`func (o *Goal) GetThumbUrlOk() (*string, bool)`

GetThumbUrlOk returns a tuple with the ThumbUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThumbUrl

`func (o *Goal) SetThumbUrl(v string)`

SetThumbUrl sets ThumbUrl field to given value.

### HasThumbUrl

`func (o *Goal) HasThumbUrl() bool`

HasThumbUrl returns a boolean if a field has been set.

### GetGoalType

`func (o *Goal) GetGoalType() string`

GetGoalType returns the GoalType field if non-nil, zero value otherwise.

### GetGoalTypeOk

`func (o *Goal) GetGoalTypeOk() (*string, bool)`

GetGoalTypeOk returns a tuple with the GoalType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGoalType

`func (o *Goal) SetGoalType(v string)`

SetGoalType sets GoalType field to given value.

### HasGoalType

`func (o *Goal) HasGoalType() bool`

HasGoalType returns a boolean if a field has been set.

### GetAutodata

`func (o *Goal) GetAutodata() string`

GetAutodata returns the Autodata field if non-nil, zero value otherwise.

### GetAutodataOk

`func (o *Goal) GetAutodataOk() (*string, bool)`

GetAutodataOk returns a tuple with the Autodata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutodata

`func (o *Goal) SetAutodata(v string)`

SetAutodata sets Autodata field to given value.

### HasAutodata

`func (o *Goal) HasAutodata() bool`

HasAutodata returns a boolean if a field has been set.

### SetAutodataNil

`func (o *Goal) SetAutodataNil(b bool)`

 SetAutodataNil sets the value for Autodata to be an explicit nil

### UnsetAutodata
`func (o *Goal) UnsetAutodata()`

UnsetAutodata ensures that no value is present for Autodata, not even an explicit nil
### GetHealthkitmetric

`func (o *Goal) GetHealthkitmetric() string`

GetHealthkitmetric returns the Healthkitmetric field if non-nil, zero value otherwise.

### GetHealthkitmetricOk

`func (o *Goal) GetHealthkitmetricOk() (*string, bool)`

GetHealthkitmetricOk returns a tuple with the Healthkitmetric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthkitmetric

`func (o *Goal) SetHealthkitmetric(v string)`

SetHealthkitmetric sets Healthkitmetric field to given value.

### HasHealthkitmetric

`func (o *Goal) HasHealthkitmetric() bool`

HasHealthkitmetric returns a boolean if a field has been set.

### GetLosedate

`func (o *Goal) GetLosedate() int32`

GetLosedate returns the Losedate field if non-nil, zero value otherwise.

### GetLosedateOk

`func (o *Goal) GetLosedateOk() (*int32, bool)`

GetLosedateOk returns a tuple with the Losedate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLosedate

`func (o *Goal) SetLosedate(v int32)`

SetLosedate sets Losedate field to given value.

### HasLosedate

`func (o *Goal) HasLosedate() bool`

HasLosedate returns a boolean if a field has been set.

### GetDeadline

`func (o *Goal) GetDeadline() int32`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *Goal) GetDeadlineOk() (*int32, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *Goal) SetDeadline(v int32)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *Goal) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetLeadtime

`func (o *Goal) GetLeadtime() int32`

GetLeadtime returns the Leadtime field if non-nil, zero value otherwise.

### GetLeadtimeOk

`func (o *Goal) GetLeadtimeOk() (*int32, bool)`

GetLeadtimeOk returns a tuple with the Leadtime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeadtime

`func (o *Goal) SetLeadtime(v int32)`

SetLeadtime sets Leadtime field to given value.

### HasLeadtime

`func (o *Goal) HasLeadtime() bool`

HasLeadtime returns a boolean if a field has been set.

### GetAlertstart

`func (o *Goal) GetAlertstart() int32`

GetAlertstart returns the Alertstart field if non-nil, zero value otherwise.

### GetAlertstartOk

`func (o *Goal) GetAlertstartOk() (*int32, bool)`

GetAlertstartOk returns a tuple with the Alertstart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertstart

`func (o *Goal) SetAlertstart(v int32)`

SetAlertstart sets Alertstart field to given value.

### HasAlertstart

`func (o *Goal) HasAlertstart() bool`

HasAlertstart returns a boolean if a field has been set.

### GetUseDefaults

`func (o *Goal) GetUseDefaults() bool`

GetUseDefaults returns the UseDefaults field if non-nil, zero value otherwise.

### GetUseDefaultsOk

`func (o *Goal) GetUseDefaultsOk() (*bool, bool)`

GetUseDefaultsOk returns a tuple with the UseDefaults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseDefaults

`func (o *Goal) SetUseDefaults(v bool)`

SetUseDefaults sets UseDefaults field to given value.

### HasUseDefaults

`func (o *Goal) HasUseDefaults() bool`

HasUseDefaults returns a boolean if a field has been set.

### GetId

`func (o *Goal) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Goal) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Goal) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Goal) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEphem

`func (o *Goal) GetEphem() bool`

GetEphem returns the Ephem field if non-nil, zero value otherwise.

### GetEphemOk

`func (o *Goal) GetEphemOk() (*bool, bool)`

GetEphemOk returns a tuple with the Ephem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEphem

`func (o *Goal) SetEphem(v bool)`

SetEphem sets Ephem field to given value.

### HasEphem

`func (o *Goal) HasEphem() bool`

HasEphem returns a boolean if a field has been set.

### GetQueued

`func (o *Goal) GetQueued() bool`

GetQueued returns the Queued field if non-nil, zero value otherwise.

### GetQueuedOk

`func (o *Goal) GetQueuedOk() (*bool, bool)`

GetQueuedOk returns a tuple with the Queued field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueued

`func (o *Goal) SetQueued(v bool)`

SetQueued sets Queued field to given value.

### HasQueued

`func (o *Goal) HasQueued() bool`

HasQueued returns a boolean if a field has been set.

### GetPanic

`func (o *Goal) GetPanic() int32`

GetPanic returns the Panic field if non-nil, zero value otherwise.

### GetPanicOk

`func (o *Goal) GetPanicOk() (*int32, bool)`

GetPanicOk returns a tuple with the Panic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPanic

`func (o *Goal) SetPanic(v int32)`

SetPanic sets Panic field to given value.

### HasPanic

`func (o *Goal) HasPanic() bool`

HasPanic returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Goal) GetUpdatedAt() int32`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Goal) GetUpdatedAtOk() (*int32, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Goal) SetUpdatedAt(v int32)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Goal) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetBurner

`func (o *Goal) GetBurner() string`

GetBurner returns the Burner field if non-nil, zero value otherwise.

### GetBurnerOk

`func (o *Goal) GetBurnerOk() (*string, bool)`

GetBurnerOk returns a tuple with the Burner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBurner

`func (o *Goal) SetBurner(v string)`

SetBurner sets Burner field to given value.

### HasBurner

`func (o *Goal) HasBurner() bool`

HasBurner returns a boolean if a field has been set.

### GetYaw

`func (o *Goal) GetYaw() int32`

GetYaw returns the Yaw field if non-nil, zero value otherwise.

### GetYawOk

`func (o *Goal) GetYawOk() (*int32, bool)`

GetYawOk returns a tuple with the Yaw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYaw

`func (o *Goal) SetYaw(v int32)`

SetYaw sets Yaw field to given value.

### HasYaw

`func (o *Goal) HasYaw() bool`

HasYaw returns a boolean if a field has been set.

### GetLane

`func (o *Goal) GetLane() int32`

GetLane returns the Lane field if non-nil, zero value otherwise.

### GetLaneOk

`func (o *Goal) GetLaneOk() (*int32, bool)`

GetLaneOk returns a tuple with the Lane field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLane

`func (o *Goal) SetLane(v int32)`

SetLane sets Lane field to given value.

### HasLane

`func (o *Goal) HasLane() bool`

HasLane returns a boolean if a field has been set.

### GetLanewidth

`func (o *Goal) GetLanewidth() float32`

GetLanewidth returns the Lanewidth field if non-nil, zero value otherwise.

### GetLanewidthOk

`func (o *Goal) GetLanewidthOk() (*float32, bool)`

GetLanewidthOk returns a tuple with the Lanewidth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanewidth

`func (o *Goal) SetLanewidth(v float32)`

SetLanewidth sets Lanewidth field to given value.

### HasLanewidth

`func (o *Goal) HasLanewidth() bool`

HasLanewidth returns a boolean if a field has been set.

### GetDelta

`func (o *Goal) GetDelta() float32`

GetDelta returns the Delta field if non-nil, zero value otherwise.

### GetDeltaOk

`func (o *Goal) GetDeltaOk() (*float32, bool)`

GetDeltaOk returns a tuple with the Delta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelta

`func (o *Goal) SetDelta(v float32)`

SetDelta sets Delta field to given value.

### HasDelta

`func (o *Goal) HasDelta() bool`

HasDelta returns a boolean if a field has been set.

### GetRunits

`func (o *Goal) GetRunits() string`

GetRunits returns the Runits field if non-nil, zero value otherwise.

### GetRunitsOk

`func (o *Goal) GetRunitsOk() (*string, bool)`

GetRunitsOk returns a tuple with the Runits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRunits

`func (o *Goal) SetRunits(v string)`

SetRunits sets Runits field to given value.

### HasRunits

`func (o *Goal) HasRunits() bool`

HasRunits returns a boolean if a field has been set.

### GetLimsum

`func (o *Goal) GetLimsum() string`

GetLimsum returns the Limsum field if non-nil, zero value otherwise.

### GetLimsumOk

`func (o *Goal) GetLimsumOk() (*string, bool)`

GetLimsumOk returns a tuple with the Limsum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimsum

`func (o *Goal) SetLimsum(v string)`

SetLimsum sets Limsum field to given value.

### HasLimsum

`func (o *Goal) HasLimsum() bool`

HasLimsum returns a boolean if a field has been set.

### GetFrozen

`func (o *Goal) GetFrozen() bool`

GetFrozen returns the Frozen field if non-nil, zero value otherwise.

### GetFrozenOk

`func (o *Goal) GetFrozenOk() (*bool, bool)`

GetFrozenOk returns a tuple with the Frozen field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrozen

`func (o *Goal) SetFrozen(v bool)`

SetFrozen sets Frozen field to given value.

### HasFrozen

`func (o *Goal) HasFrozen() bool`

HasFrozen returns a boolean if a field has been set.

### GetLost

`func (o *Goal) GetLost() bool`

GetLost returns the Lost field if non-nil, zero value otherwise.

### GetLostOk

`func (o *Goal) GetLostOk() (*bool, bool)`

GetLostOk returns a tuple with the Lost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLost

`func (o *Goal) SetLost(v bool)`

SetLost sets Lost field to given value.

### HasLost

`func (o *Goal) HasLost() bool`

HasLost returns a boolean if a field has been set.

### GetWon

`func (o *Goal) GetWon() bool`

GetWon returns the Won field if non-nil, zero value otherwise.

### GetWonOk

`func (o *Goal) GetWonOk() (*bool, bool)`

GetWonOk returns a tuple with the Won field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWon

`func (o *Goal) SetWon(v bool)`

SetWon sets Won field to given value.

### HasWon

`func (o *Goal) HasWon() bool`

HasWon returns a boolean if a field has been set.

### GetContract

`func (o *Goal) GetContract() GoalContract`

GetContract returns the Contract field if non-nil, zero value otherwise.

### GetContractOk

`func (o *Goal) GetContractOk() (*GoalContract, bool)`

GetContractOk returns a tuple with the Contract field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContract

`func (o *Goal) SetContract(v GoalContract)`

SetContract sets Contract field to given value.

### HasContract

`func (o *Goal) HasContract() bool`

HasContract returns a boolean if a field has been set.

### GetDeltaText

`func (o *Goal) GetDeltaText() string`

GetDeltaText returns the DeltaText field if non-nil, zero value otherwise.

### GetDeltaTextOk

`func (o *Goal) GetDeltaTextOk() (*string, bool)`

GetDeltaTextOk returns a tuple with the DeltaText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeltaText

`func (o *Goal) SetDeltaText(v string)`

SetDeltaText sets DeltaText field to given value.

### HasDeltaText

`func (o *Goal) HasDeltaText() bool`

HasDeltaText returns a boolean if a field has been set.

### GetSafebump

`func (o *Goal) GetSafebump() float32`

GetSafebump returns the Safebump field if non-nil, zero value otherwise.

### GetSafebumpOk

`func (o *Goal) GetSafebumpOk() (*float32, bool)`

GetSafebumpOk returns a tuple with the Safebump field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSafebump

`func (o *Goal) SetSafebump(v float32)`

SetSafebump sets Safebump field to given value.

### HasSafebump

`func (o *Goal) HasSafebump() bool`

HasSafebump returns a boolean if a field has been set.

### GetSafesum

`func (o *Goal) GetSafesum() string`

GetSafesum returns the Safesum field if non-nil, zero value otherwise.

### GetSafesumOk

`func (o *Goal) GetSafesumOk() (*string, bool)`

GetSafesumOk returns a tuple with the Safesum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSafesum

`func (o *Goal) SetSafesum(v string)`

SetSafesum sets Safesum field to given value.

### HasSafesum

`func (o *Goal) HasSafesum() bool`

HasSafesum returns a boolean if a field has been set.

### GetLimsumdate

`func (o *Goal) GetLimsumdate() string`

GetLimsumdate returns the Limsumdate field if non-nil, zero value otherwise.

### GetLimsumdateOk

`func (o *Goal) GetLimsumdateOk() (*string, bool)`

GetLimsumdateOk returns a tuple with the Limsumdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimsumdate

`func (o *Goal) SetLimsumdate(v string)`

SetLimsumdate sets Limsumdate field to given value.

### HasLimsumdate

`func (o *Goal) HasLimsumdate() bool`

HasLimsumdate returns a boolean if a field has been set.

### GetLimsumdays

`func (o *Goal) GetLimsumdays() string`

GetLimsumdays returns the Limsumdays field if non-nil, zero value otherwise.

### GetLimsumdaysOk

`func (o *Goal) GetLimsumdaysOk() (*string, bool)`

GetLimsumdaysOk returns a tuple with the Limsumdays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimsumdays

`func (o *Goal) SetLimsumdays(v string)`

SetLimsumdays sets Limsumdays field to given value.

### HasLimsumdays

`func (o *Goal) HasLimsumdays() bool`

HasLimsumdays returns a boolean if a field has been set.

### GetBaremin

`func (o *Goal) GetBaremin() string`

GetBaremin returns the Baremin field if non-nil, zero value otherwise.

### GetBareminOk

`func (o *Goal) GetBareminOk() (*string, bool)`

GetBareminOk returns a tuple with the Baremin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaremin

`func (o *Goal) SetBaremin(v string)`

SetBaremin sets Baremin field to given value.

### HasBaremin

`func (o *Goal) HasBaremin() bool`

HasBaremin returns a boolean if a field has been set.

### GetBaremintotal

`func (o *Goal) GetBaremintotal() string`

GetBaremintotal returns the Baremintotal field if non-nil, zero value otherwise.

### GetBaremintotalOk

`func (o *Goal) GetBaremintotalOk() (*string, bool)`

GetBaremintotalOk returns a tuple with the Baremintotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaremintotal

`func (o *Goal) SetBaremintotal(v string)`

SetBaremintotal sets Baremintotal field to given value.

### HasBaremintotal

`func (o *Goal) HasBaremintotal() bool`

HasBaremintotal returns a boolean if a field has been set.

### GetRoadstatuscolor

`func (o *Goal) GetRoadstatuscolor() string`

GetRoadstatuscolor returns the Roadstatuscolor field if non-nil, zero value otherwise.

### GetRoadstatuscolorOk

`func (o *Goal) GetRoadstatuscolorOk() (*string, bool)`

GetRoadstatuscolorOk returns a tuple with the Roadstatuscolor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoadstatuscolor

`func (o *Goal) SetRoadstatuscolor(v string)`

SetRoadstatuscolor sets Roadstatuscolor field to given value.

### HasRoadstatuscolor

`func (o *Goal) HasRoadstatuscolor() bool`

HasRoadstatuscolor returns a boolean if a field has been set.

### GetLasttouch

`func (o *Goal) GetLasttouch() string`

GetLasttouch returns the Lasttouch field if non-nil, zero value otherwise.

### GetLasttouchOk

`func (o *Goal) GetLasttouchOk() (*string, bool)`

GetLasttouchOk returns a tuple with the Lasttouch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLasttouch

`func (o *Goal) SetLasttouch(v string)`

SetLasttouch sets Lasttouch field to given value.

### HasLasttouch

`func (o *Goal) HasLasttouch() bool`

HasLasttouch returns a boolean if a field has been set.

### GetSafebuf

`func (o *Goal) GetSafebuf() float32`

GetSafebuf returns the Safebuf field if non-nil, zero value otherwise.

### GetSafebufOk

`func (o *Goal) GetSafebufOk() (*float32, bool)`

GetSafebufOk returns a tuple with the Safebuf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSafebuf

`func (o *Goal) SetSafebuf(v float32)`

SetSafebuf sets Safebuf field to given value.

### HasSafebuf

`func (o *Goal) HasSafebuf() bool`

HasSafebuf returns a boolean if a field has been set.

### GetCoasting

`func (o *Goal) GetCoasting() bool`

GetCoasting returns the Coasting field if non-nil, zero value otherwise.

### GetCoastingOk

`func (o *Goal) GetCoastingOk() (*bool, bool)`

GetCoastingOk returns a tuple with the Coasting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoasting

`func (o *Goal) SetCoasting(v bool)`

SetCoasting sets Coasting field to given value.

### HasCoasting

`func (o *Goal) HasCoasting() bool`

HasCoasting returns a boolean if a field has been set.

### GetIntegery

`func (o *Goal) GetIntegery() bool`

GetIntegery returns the Integery field if non-nil, zero value otherwise.

### GetIntegeryOk

`func (o *Goal) GetIntegeryOk() (*bool, bool)`

GetIntegeryOk returns a tuple with the Integery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegery

`func (o *Goal) SetIntegery(v bool)`

SetIntegery sets Integery field to given value.

### HasIntegery

`func (o *Goal) HasIntegery() bool`

HasIntegery returns a boolean if a field has been set.

### GetFineprint

`func (o *Goal) GetFineprint() string`

GetFineprint returns the Fineprint field if non-nil, zero value otherwise.

### GetFineprintOk

`func (o *Goal) GetFineprintOk() (*string, bool)`

GetFineprintOk returns a tuple with the Fineprint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFineprint

`func (o *Goal) SetFineprint(v string)`

SetFineprint sets Fineprint field to given value.

### HasFineprint

`func (o *Goal) HasFineprint() bool`

HasFineprint returns a boolean if a field has been set.

### GetTodayta

`func (o *Goal) GetTodayta() bool`

GetTodayta returns the Todayta field if non-nil, zero value otherwise.

### GetTodaytaOk

`func (o *Goal) GetTodaytaOk() (*bool, bool)`

GetTodaytaOk returns a tuple with the Todayta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTodayta

`func (o *Goal) SetTodayta(v bool)`

SetTodayta sets Todayta field to given value.

### HasTodayta

`func (o *Goal) HasTodayta() bool`

HasTodayta returns a boolean if a field has been set.

### GetHhmmformat

`func (o *Goal) GetHhmmformat() bool`

GetHhmmformat returns the Hhmmformat field if non-nil, zero value otherwise.

### GetHhmmformatOk

`func (o *Goal) GetHhmmformatOk() (*bool, bool)`

GetHhmmformatOk returns a tuple with the Hhmmformat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHhmmformat

`func (o *Goal) SetHhmmformat(v bool)`

SetHhmmformat sets Hhmmformat field to given value.

### HasHhmmformat

`func (o *Goal) HasHhmmformat() bool`

HasHhmmformat returns a boolean if a field has been set.

### GetGunits

`func (o *Goal) GetGunits() string`

GetGunits returns the Gunits field if non-nil, zero value otherwise.

### GetGunitsOk

`func (o *Goal) GetGunitsOk() (*string, bool)`

GetGunitsOk returns a tuple with the Gunits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGunits

`func (o *Goal) SetGunits(v string)`

SetGunits sets Gunits field to given value.

### HasGunits

`func (o *Goal) HasGunits() bool`

HasGunits returns a boolean if a field has been set.

### GetWeekendsOff

`func (o *Goal) GetWeekendsOff() bool`

GetWeekendsOff returns the WeekendsOff field if non-nil, zero value otherwise.

### GetWeekendsOffOk

`func (o *Goal) GetWeekendsOffOk() (*bool, bool)`

GetWeekendsOffOk returns a tuple with the WeekendsOff field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeekendsOff

`func (o *Goal) SetWeekendsOff(v bool)`

SetWeekendsOff sets WeekendsOff field to given value.

### HasWeekendsOff

`func (o *Goal) HasWeekendsOff() bool`

HasWeekendsOff returns a boolean if a field has been set.

### GetYaxis

`func (o *Goal) GetYaxis() string`

GetYaxis returns the Yaxis field if non-nil, zero value otherwise.

### GetYaxisOk

`func (o *Goal) GetYaxisOk() (*string, bool)`

GetYaxisOk returns a tuple with the Yaxis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYaxis

`func (o *Goal) SetYaxis(v string)`

SetYaxis sets Yaxis field to given value.

### HasYaxis

`func (o *Goal) HasYaxis() bool`

HasYaxis returns a boolean if a field has been set.

### GetMaxflux

`func (o *Goal) GetMaxflux() float32`

GetMaxflux returns the Maxflux field if non-nil, zero value otherwise.

### GetMaxfluxOk

`func (o *Goal) GetMaxfluxOk() (*float32, bool)`

GetMaxfluxOk returns a tuple with the Maxflux field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxflux

`func (o *Goal) SetMaxflux(v float32)`

SetMaxflux sets Maxflux field to given value.

### HasMaxflux

`func (o *Goal) HasMaxflux() bool`

HasMaxflux returns a boolean if a field has been set.

### SetMaxfluxNil

`func (o *Goal) SetMaxfluxNil(b bool)`

 SetMaxfluxNil sets the value for Maxflux to be an explicit nil

### UnsetMaxflux
`func (o *Goal) UnsetMaxflux()`

UnsetMaxflux ensures that no value is present for Maxflux, not even an explicit nil
### GetTmin

`func (o *Goal) GetTmin() string`

GetTmin returns the Tmin field if non-nil, zero value otherwise.

### GetTminOk

`func (o *Goal) GetTminOk() (*string, bool)`

GetTminOk returns a tuple with the Tmin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTmin

`func (o *Goal) SetTmin(v string)`

SetTmin sets Tmin field to given value.

### HasTmin

`func (o *Goal) HasTmin() bool`

HasTmin returns a boolean if a field has been set.

### SetTminNil

`func (o *Goal) SetTminNil(b bool)`

 SetTminNil sets the value for Tmin to be an explicit nil

### UnsetTmin
`func (o *Goal) UnsetTmin()`

UnsetTmin ensures that no value is present for Tmin, not even an explicit nil
### GetTmax

`func (o *Goal) GetTmax() string`

GetTmax returns the Tmax field if non-nil, zero value otherwise.

### GetTmaxOk

`func (o *Goal) GetTmaxOk() (*string, bool)`

GetTmaxOk returns a tuple with the Tmax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTmax

`func (o *Goal) SetTmax(v string)`

SetTmax sets Tmax field to given value.

### HasTmax

`func (o *Goal) HasTmax() bool`

HasTmax returns a boolean if a field has been set.

### SetTmaxNil

`func (o *Goal) SetTmaxNil(b bool)`

 SetTmaxNil sets the value for Tmax to be an explicit nil

### UnsetTmax
`func (o *Goal) UnsetTmax()`

UnsetTmax ensures that no value is present for Tmax, not even an explicit nil
### GetInitday

`func (o *Goal) GetInitday() int32`

GetInitday returns the Initday field if non-nil, zero value otherwise.

### GetInitdayOk

`func (o *Goal) GetInitdayOk() (*int32, bool)`

GetInitdayOk returns a tuple with the Initday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitday

`func (o *Goal) SetInitday(v int32)`

SetInitday sets Initday field to given value.

### HasInitday

`func (o *Goal) HasInitday() bool`

HasInitday returns a boolean if a field has been set.

### GetInitval

`func (o *Goal) GetInitval() float32`

GetInitval returns the Initval field if non-nil, zero value otherwise.

### GetInitvalOk

`func (o *Goal) GetInitvalOk() (*float32, bool)`

GetInitvalOk returns a tuple with the Initval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitval

`func (o *Goal) SetInitval(v float32)`

SetInitval sets Initval field to given value.

### HasInitval

`func (o *Goal) HasInitval() bool`

HasInitval returns a boolean if a field has been set.

### GetCurday

`func (o *Goal) GetCurday() float32`

GetCurday returns the Curday field if non-nil, zero value otherwise.

### GetCurdayOk

`func (o *Goal) GetCurdayOk() (*float32, bool)`

GetCurdayOk returns a tuple with the Curday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurday

`func (o *Goal) SetCurday(v float32)`

SetCurday sets Curday field to given value.

### HasCurday

`func (o *Goal) HasCurday() bool`

HasCurday returns a boolean if a field has been set.

### GetCurval

`func (o *Goal) GetCurval() float32`

GetCurval returns the Curval field if non-nil, zero value otherwise.

### GetCurvalOk

`func (o *Goal) GetCurvalOk() (*float32, bool)`

GetCurvalOk returns a tuple with the Curval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurval

`func (o *Goal) SetCurval(v float32)`

SetCurval sets Curval field to given value.

### HasCurval

`func (o *Goal) HasCurval() bool`

HasCurval returns a boolean if a field has been set.

### GetLastday

`func (o *Goal) GetLastday() float32`

GetLastday returns the Lastday field if non-nil, zero value otherwise.

### GetLastdayOk

`func (o *Goal) GetLastdayOk() (*float32, bool)`

GetLastdayOk returns a tuple with the Lastday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastday

`func (o *Goal) SetLastday(v float32)`

SetLastday sets Lastday field to given value.

### HasLastday

`func (o *Goal) HasLastday() bool`

HasLastday returns a boolean if a field has been set.

### GetDir

`func (o *Goal) GetDir() float32`

GetDir returns the Dir field if non-nil, zero value otherwise.

### GetDirOk

`func (o *Goal) GetDirOk() (*float32, bool)`

GetDirOk returns a tuple with the Dir field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDir

`func (o *Goal) SetDir(v float32)`

SetDir sets Dir field to given value.

### HasDir

`func (o *Goal) HasDir() bool`

HasDir returns a boolean if a field has been set.

### GetKyoom

`func (o *Goal) GetKyoom() bool`

GetKyoom returns the Kyoom field if non-nil, zero value otherwise.

### GetKyoomOk

`func (o *Goal) GetKyoomOk() (*bool, bool)`

GetKyoomOk returns a tuple with the Kyoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKyoom

`func (o *Goal) SetKyoom(v bool)`

SetKyoom sets Kyoom field to given value.

### HasKyoom

`func (o *Goal) HasKyoom() bool`

HasKyoom returns a boolean if a field has been set.

### GetOdom

`func (o *Goal) GetOdom() bool`

GetOdom returns the Odom field if non-nil, zero value otherwise.

### GetOdomOk

`func (o *Goal) GetOdomOk() (*bool, bool)`

GetOdomOk returns a tuple with the Odom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOdom

`func (o *Goal) SetOdom(v bool)`

SetOdom sets Odom field to given value.

### HasOdom

`func (o *Goal) HasOdom() bool`

HasOdom returns a boolean if a field has been set.

### GetNoisy

`func (o *Goal) GetNoisy() bool`

GetNoisy returns the Noisy field if non-nil, zero value otherwise.

### GetNoisyOk

`func (o *Goal) GetNoisyOk() (*bool, bool)`

GetNoisyOk returns a tuple with the Noisy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoisy

`func (o *Goal) SetNoisy(v bool)`

SetNoisy sets Noisy field to given value.

### HasNoisy

`func (o *Goal) HasNoisy() bool`

HasNoisy returns a boolean if a field has been set.

### GetAggday

`func (o *Goal) GetAggday() string`

GetAggday returns the Aggday field if non-nil, zero value otherwise.

### GetAggdayOk

`func (o *Goal) GetAggdayOk() (*string, bool)`

GetAggdayOk returns a tuple with the Aggday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggday

`func (o *Goal) SetAggday(v string)`

SetAggday sets Aggday field to given value.

### HasAggday

`func (o *Goal) HasAggday() bool`

HasAggday returns a boolean if a field has been set.

### GetPlotall

`func (o *Goal) GetPlotall() bool`

GetPlotall returns the Plotall field if non-nil, zero value otherwise.

### GetPlotallOk

`func (o *Goal) GetPlotallOk() (*bool, bool)`

GetPlotallOk returns a tuple with the Plotall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlotall

`func (o *Goal) SetPlotall(v bool)`

SetPlotall sets Plotall field to given value.

### HasPlotall

`func (o *Goal) HasPlotall() bool`

HasPlotall returns a boolean if a field has been set.

### GetSteppy

`func (o *Goal) GetSteppy() bool`

GetSteppy returns the Steppy field if non-nil, zero value otherwise.

### GetSteppyOk

`func (o *Goal) GetSteppyOk() (*bool, bool)`

GetSteppyOk returns a tuple with the Steppy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSteppy

`func (o *Goal) SetSteppy(v bool)`

SetSteppy sets Steppy field to given value.

### HasSteppy

`func (o *Goal) HasSteppy() bool`

HasSteppy returns a boolean if a field has been set.

### GetRosy

`func (o *Goal) GetRosy() bool`

GetRosy returns the Rosy field if non-nil, zero value otherwise.

### GetRosyOk

`func (o *Goal) GetRosyOk() (*bool, bool)`

GetRosyOk returns a tuple with the Rosy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRosy

`func (o *Goal) SetRosy(v bool)`

SetRosy sets Rosy field to given value.

### HasRosy

`func (o *Goal) HasRosy() bool`

HasRosy returns a boolean if a field has been set.

### GetMovingav

`func (o *Goal) GetMovingav() bool`

GetMovingav returns the Movingav field if non-nil, zero value otherwise.

### GetMovingavOk

`func (o *Goal) GetMovingavOk() (*bool, bool)`

GetMovingavOk returns a tuple with the Movingav field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMovingav

`func (o *Goal) SetMovingav(v bool)`

SetMovingav sets Movingav field to given value.

### HasMovingav

`func (o *Goal) HasMovingav() bool`

HasMovingav returns a boolean if a field has been set.

### GetAura

`func (o *Goal) GetAura() bool`

GetAura returns the Aura field if non-nil, zero value otherwise.

### GetAuraOk

`func (o *Goal) GetAuraOk() (*bool, bool)`

GetAuraOk returns a tuple with the Aura field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAura

`func (o *Goal) SetAura(v bool)`

SetAura sets Aura field to given value.

### HasAura

`func (o *Goal) HasAura() bool`

HasAura returns a boolean if a field has been set.

### GetNumpts

`func (o *Goal) GetNumpts() float32`

GetNumpts returns the Numpts field if non-nil, zero value otherwise.

### GetNumptsOk

`func (o *Goal) GetNumptsOk() (*float32, bool)`

GetNumptsOk returns a tuple with the Numpts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumpts

`func (o *Goal) SetNumpts(v float32)`

SetNumpts sets Numpts field to given value.

### HasNumpts

`func (o *Goal) HasNumpts() bool`

HasNumpts returns a boolean if a field has been set.

### GetRoad

`func (o *Goal) GetRoad() [][]*float32`

GetRoad returns the Road field if non-nil, zero value otherwise.

### GetRoadOk

`func (o *Goal) GetRoadOk() (*[][]*float32, bool)`

GetRoadOk returns a tuple with the Road field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoad

`func (o *Goal) SetRoad(v [][]*float32)`

SetRoad sets Road field to given value.

### HasRoad

`func (o *Goal) HasRoad() bool`

HasRoad returns a boolean if a field has been set.

### GetRoadall

`func (o *Goal) GetRoadall() [][]*float32`

GetRoadall returns the Roadall field if non-nil, zero value otherwise.

### GetRoadallOk

`func (o *Goal) GetRoadallOk() (*[][]*float32, bool)`

GetRoadallOk returns a tuple with the Roadall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoadall

`func (o *Goal) SetRoadall(v [][]*float32)`

SetRoadall sets Roadall field to given value.

### HasRoadall

`func (o *Goal) HasRoadall() bool`

HasRoadall returns a boolean if a field has been set.

### GetFullroad

`func (o *Goal) GetFullroad() [][]float32`

GetFullroad returns the Fullroad field if non-nil, zero value otherwise.

### GetFullroadOk

`func (o *Goal) GetFullroadOk() (*[][]float32, bool)`

GetFullroadOk returns a tuple with the Fullroad field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullroad

`func (o *Goal) SetFullroad(v [][]float32)`

SetFullroad sets Fullroad field to given value.

### HasFullroad

`func (o *Goal) HasFullroad() bool`

HasFullroad returns a boolean if a field has been set.

### GetSecret

`func (o *Goal) GetSecret() bool`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *Goal) GetSecretOk() (*bool, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *Goal) SetSecret(v bool)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *Goal) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetPledge

`func (o *Goal) GetPledge() float32`

GetPledge returns the Pledge field if non-nil, zero value otherwise.

### GetPledgeOk

`func (o *Goal) GetPledgeOk() (*float32, bool)`

GetPledgeOk returns a tuple with the Pledge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPledge

`func (o *Goal) SetPledge(v float32)`

SetPledge sets Pledge field to given value.

### HasPledge

`func (o *Goal) HasPledge() bool`

HasPledge returns a boolean if a field has been set.

### GetMathishard

`func (o *Goal) GetMathishard() []float32`

GetMathishard returns the Mathishard field if non-nil, zero value otherwise.

### GetMathishardOk

`func (o *Goal) GetMathishardOk() (*[]float32, bool)`

GetMathishardOk returns a tuple with the Mathishard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMathishard

`func (o *Goal) SetMathishard(v []float32)`

SetMathishard sets Mathishard field to given value.

### HasMathishard

`func (o *Goal) HasMathishard() bool`

HasMathishard returns a boolean if a field has been set.

### GetHeadsum

`func (o *Goal) GetHeadsum() string`

GetHeadsum returns the Headsum field if non-nil, zero value otherwise.

### GetHeadsumOk

`func (o *Goal) GetHeadsumOk() (*string, bool)`

GetHeadsumOk returns a tuple with the Headsum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeadsum

`func (o *Goal) SetHeadsum(v string)`

SetHeadsum sets Headsum field to given value.

### HasHeadsum

`func (o *Goal) HasHeadsum() bool`

HasHeadsum returns a boolean if a field has been set.

### GetDatapublic

`func (o *Goal) GetDatapublic() bool`

GetDatapublic returns the Datapublic field if non-nil, zero value otherwise.

### GetDatapublicOk

`func (o *Goal) GetDatapublicOk() (*bool, bool)`

GetDatapublicOk returns a tuple with the Datapublic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatapublic

`func (o *Goal) SetDatapublic(v bool)`

SetDatapublic sets Datapublic field to given value.

### HasDatapublic

`func (o *Goal) HasDatapublic() bool`

HasDatapublic returns a boolean if a field has been set.

### GetGraphsum

`func (o *Goal) GetGraphsum() string`

GetGraphsum returns the Graphsum field if non-nil, zero value otherwise.

### GetGraphsumOk

`func (o *Goal) GetGraphsumOk() (*string, bool)`

GetGraphsumOk returns a tuple with the Graphsum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphsum

`func (o *Goal) SetGraphsum(v string)`

SetGraphsum sets Graphsum field to given value.

### HasGraphsum

`func (o *Goal) HasGraphsum() bool`

HasGraphsum returns a boolean if a field has been set.

### GetRah

`func (o *Goal) GetRah() float32`

GetRah returns the Rah field if non-nil, zero value otherwise.

### GetRahOk

`func (o *Goal) GetRahOk() (*float32, bool)`

GetRahOk returns a tuple with the Rah field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRah

`func (o *Goal) SetRah(v float32)`

SetRah sets Rah field to given value.

### HasRah

`func (o *Goal) HasRah() bool`

HasRah returns a boolean if a field has been set.

### GetLastDatapoint

`func (o *Goal) GetLastDatapoint() Datapoint`

GetLastDatapoint returns the LastDatapoint field if non-nil, zero value otherwise.

### GetLastDatapointOk

`func (o *Goal) GetLastDatapointOk() (*Datapoint, bool)`

GetLastDatapointOk returns a tuple with the LastDatapoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastDatapoint

`func (o *Goal) SetLastDatapoint(v Datapoint)`

SetLastDatapoint sets LastDatapoint field to given value.

### HasLastDatapoint

`func (o *Goal) HasLastDatapoint() bool`

HasLastDatapoint returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *Goal) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *Goal) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *Goal) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *Goal) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### SetCallbackUrlNil

`func (o *Goal) SetCallbackUrlNil(b bool)`

 SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil

### UnsetCallbackUrl
`func (o *Goal) UnsetCallbackUrl()`

UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
### GetTags

`func (o *Goal) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Goal) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Goal) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Goal) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetRecentData

`func (o *Goal) GetRecentData() []GoalRecentDataInner`

GetRecentData returns the RecentData field if non-nil, zero value otherwise.

### GetRecentDataOk

`func (o *Goal) GetRecentDataOk() (*[]GoalRecentDataInner, bool)`

GetRecentDataOk returns a tuple with the RecentData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecentData

`func (o *Goal) SetRecentData(v []GoalRecentDataInner)`

SetRecentData sets RecentData field to given value.

### HasRecentData

`func (o *Goal) HasRecentData() bool`

HasRecentData returns a boolean if a field has been set.

### GetDueby

`func (o *Goal) GetDueby() map[string]GoalDuebyValue`

GetDueby returns the Dueby field if non-nil, zero value otherwise.

### GetDuebyOk

`func (o *Goal) GetDuebyOk() (*map[string]GoalDuebyValue, bool)`

GetDuebyOk returns a tuple with the Dueby field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueby

`func (o *Goal) SetDueby(v map[string]GoalDuebyValue)`

SetDueby sets Dueby field to given value.

### HasDueby

`func (o *Goal) HasDueby() bool`

HasDueby returns a boolean if a field has been set.

### GetDatapoints

`func (o *Goal) GetDatapoints() []Datapoint`

GetDatapoints returns the Datapoints field if non-nil, zero value otherwise.

### GetDatapointsOk

`func (o *Goal) GetDatapointsOk() (*[]Datapoint, bool)`

GetDatapointsOk returns a tuple with the Datapoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatapoints

`func (o *Goal) SetDatapoints(v []Datapoint)`

SetDatapoints sets Datapoints field to given value.

### HasDatapoints

`func (o *Goal) HasDatapoints() bool`

HasDatapoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


