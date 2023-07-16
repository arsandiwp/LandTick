package models

type Transaction struct {
	ID       int    `json:"id" gorm:"primaryKey:autoIncrement"`
	UserID   int    `json:"user_id"`
	User     User   `json:"user"`
	TicketID int    `json:"-"`
	Ticket   Ticket `json:"ticket"`
	Image    string `json:"image" gorm:"type: varchar(255)"`
	Status   string `json:"status" gorm:"type: varchar(255)"`
}
