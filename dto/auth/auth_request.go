package authdto

type AuthRequest struct {
	FullName string `json:"fullName" validate:"required" form:"fullName"`
	Name     string `json:"name" validate:"required" form:"name"`
	Email    string `json:"email" validate:"required" form:"email"`
	Password string `json:"password" validate:"required" form:"password"`
}

type LoginRequest struct {
	FullName string `json:"fullName" validate:"required" form:"fullName"`
	Password string `json:"password" validate:"required" form:"password"`
}

type LoginResponse struct {
	FullName string `json:"fullName"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"-"`
	Token    string `json:"token"`
}
