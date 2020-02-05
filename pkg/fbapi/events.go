package fbapi

import (
	"fmt"
	"time"

	fb "github.com/huandu/facebook"
	log "github.com/sirupsen/logrus"
)

type fbData struct {
	Data []FbEvent
}

// FbEvent provides decoding structure to FB API response JSON.
type FbEvent struct {
	Description string
	Name        string
	Id          string
	StartTime   time.Time
	EndTime     time.Time
}

// FbEvents handles state necessary to request
// data from the FB API.
type FbEvents struct {
	app       *fb.App
	appID     string
	appSecret string

	debug  bool
	logger *log.Logger
}

// NewFbEvents provides a new instance of querying FB.
func NewFbEvents(appID, appSec string, l *log.Logger) *FbEvents {
	return &FbEvents{
		app:    fb.New(appID, appSec),
		debug:  true,
		logger: l,
	}
}

// Get queries the FB API for events of given GroupID.
func (f *FbEvents) Get(groupID string) (interface{}, error) {
	query := fmt.Sprintf("/v5.0/%s/events", groupID)

	res, err := fb.Get(query, fb.Params{
		"access_token": f.app.AppAccessToken(),
	})
	if err != nil {
		return nil, err
	}
	if f.debug {
		di := res.DebugInfo()
		if di != nil {
			f.logger.WithField("fbApi", di.FacebookApiVersion)
		}
	}
	events := make([]FbEvent, 0)
	resStruct := &fbData{
		Data: events,
	}
	err = res.Decode(resStruct)
	if err != nil {
		return nil, err
	}
	return resStruct.Data, nil
}
