package models

type Ticket struct {
	ID                   int     `json:"-" gorm:"primaryKey:autoIncrement"`
	NameTrain            string  `json:"name_train" gorm:"type: varchar(255)"`
	TypeTrain            string  `json:"type_train" gorm:"type: varchar(255)"`
	StartDate            string  `json:"start_date" gorm:"type: varchar(255)"`
	StartStation         Station `json:"start_station"`
	StartStationID       int     `json:"-"`
	StartTime            string  `json:"start_time" gorm:"type: varchar(255)"`
	DestinationStation   Station `json:"destination_station"`
	DestinationStationID int     `json:"-"`
	ArivalTime           string  `json:"arival_time" gorm:"type: varchar(255)"`
	Price                int     `json:"price" gorm:"type: int"`
	Qty                  int     `json:"-" gorm:"type: int"`
}

type TicketTransaction struct {
	
}
