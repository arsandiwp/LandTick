package models

type User struct {
	ID       int    `json:"id" gorm:"primaryKey:autoIncrement"`
	FullName string `json:"fullName" form:"fullName" gorm:"type: varchar(255)"`
	UserName string `json:"username" form:"username" gorm:"type: varchar(255)"`
	Email    string `json:"email" form:"email" gorm:"type: varchar(255)"`
	Password string `json:"password" form:"password" gorm:"type: varchar(255)"`
	Gender   string `json:"gender" form:"gender" gorm:"type: varchar(255)"`
	NoHp     string `json:"no_hp" form:"no_hp" gorm:"type: varchar(255)"`
	Address  string `json:"address" form:"address" gorm:"type: varchar(255)"`
	Role     string `json:"role" gorm:"default:'user'"`
}
