package routes

import (
	"landtick/handlers"
	"landtick/pkg/middleware"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	transactionRepository := repositories.RepositoryTransaction(mysql.DB)
	h := handlers.HandlersTransaction(transactionRepository)

	e.POST("/transaction", middleware.Auth(middleware.UploadFile(h.CreateTransaction)))
	e.GET("/transactions", h.FindTransaction)
	e.GET("/transactions/:id", h.GetTransaction)
}
