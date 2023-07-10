package repositories

import (
	"landtick/models"

	"gorm.io/gorm"
)

type TicketRepository interface {
	CreateTicket(ticket models.Ticket) (models.Ticket, error)
	FindTicket() ([]models.Ticket, error)
	FilterTicket(StartDate string, StartStationID, DestinationStationID int) ([]models.Ticket, error)
}

func RepositoryTicket(db *gorm.DB) *repository {
	return &repository{db}
}

// CreateTicket
func (r *repository) CreateTicket(ticket models.Ticket) (models.Ticket, error) {
	err := r.db.Create(&ticket).Error

	return ticket, err
}

// FindTicket
func (r *repository) FindTicket() ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Preload("StartStation").Preload("DestinationStation").Find(&tickets).Error

	return tickets, err
}

// FilterTicket
func (r *repository) FilterTicket(StartDate string, StartStationID, DestinationStationID int) ([]models.Ticket, error) {
	var tickets []models.Ticket
	err := r.db.Where("start_date = ? AND start_station_id = ? AND destination_station_id = ?", StartDate, StartStationID, DestinationStationID).Preload("StartStation").Preload("DestinationStation").Find(&tickets).Error

	return tickets, err
}
