package repositories

import (
	"landtick/models"

	"gorm.io/gorm"
)

type TransactionRepository interface {
	CreateTransaction(transaction models.Transaction) (models.Transaction, error)
	FindTransaction() ([]models.Transaction, error)
	GetTransaction(ID int) (models.Transaction, error)
}

func RepositoryTransaction(db *gorm.DB) *repository {
	return &repository{db}
}

// CreateTransaction
func (r *repository) CreateTransaction(transaction models.Transaction) (models.Transaction, error) {
	var data models.Transaction

	err := r.db.Create(&transaction).Where("user_id = ? AND ticket_id = ?", transaction.UserID, transaction.TicketID).Order("id DESC").Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&data).Error

	return data, err
}

// FindTransaction
func (r *repository) FindTransaction() ([]models.Transaction, error) {
	var transactions []models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").Find(&transactions).Error

	return transactions, err
}

// GetTransaction
func (r *repository) GetTransaction(ID int) (models.Transaction, error) {
	var transactions models.Transaction
	err := r.db.Preload("User").Preload("Ticket").Preload("Ticket.StartStation").Preload("Ticket.DestinationStation").First(&transactions, ID).Error

	return transactions, err
}
