package usersdto

type UserResponse struct {
	ID       int    `json:"-"`
	FullName string `json:"fullName" `
	Name     string `json:"name" `
	Email    string `json:"email" `
	Password string `json:"-" `
}
