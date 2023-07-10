package models

type User struct {
	ID       int    `json:"id" gorm:"primaryKey:autoIncrement"`
	FullName string `json:"fullName" gorm:"type: varchar(255)"`
	Name     string `json:"name" gorm:"type: varchar(255)"`
	NoHp     string `json:"-" gorm:"type: varchar(255)"`
	Email    string `json:"email" gorm:"type: varchar(255)"`
	Password string `json:"-" gorm:"type: varchar(255)"`
}
