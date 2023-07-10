package ticketdto

type TicketResponse struct {
	NameTrain            string `json:"name_train" `
	TypeTrain            string `json:"type_train" `
	StartDate            string `json:"start_date" `
	StartStationID       int    `json:"start_station_id" `
	StartTime            string `json:"start_time" `
	DestinationStationID int    `json:"destination_station_id" `
	ArivalTime           string `json:"arival_time" `
	Price                int    `json:"price" `
	Qty                  int    `json:"qty" `
}
