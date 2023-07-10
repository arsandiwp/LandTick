package handlers

import (
	"fmt"
	dto "landtick/dto/result"
	transactiondto "landtick/dto/transaction"
	"landtick/models"
	"landtick/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator"
	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
)

var path_file = "http://localhost:5000/uploads/"

type handlerTransaction struct {
	TransactionRepository repositories.TransactionRepository
}

func HandlersTransaction(TransactionRepository repositories.TransactionRepository) *handlerTransaction {
	return &handlerTransaction{TransactionRepository}
}

// CreateTransaction
func (h *handlerTransaction) CreateTransaction(c echo.Context) error {
	dataFile := c.Get("dataFile").(string)
	fmt.Println("this is data cuyy", dataFile)

	user_id, _ := strconv.Atoi(c.FormValue("user_id"))
	fmt.Println(user_id)
	ticket_id, _ := strconv.Atoi(c.FormValue("ticket_id"))
	fmt.Println(ticket_id)

	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)

	request := transactiondto.CreateTransactionRequest{
		TicketID: ticket_id,
		Image:    dataFile,
		Status:   c.FormValue("status"),
		UserID:   int(userId),
	}

	validation := validator.New()
	err := validation.Struct(request)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data := models.Transaction{
		UserID:   request.UserID,
		TicketID: request.TicketID,
		Image:    request.Image,
		Status:   request.Status,
	}

	response, err := h.TransactionRepository.CreateTransaction(data)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: response})
}

// FindTransaction
func (h *handlerTransaction) FindTransaction(c echo.Context) error {
	transactions, err := h.TransactionRepository.FindTransaction()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	for i, p := range transactions {
		transactions[i].Image = path_file + p.Image
	}

	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: transactions})
}

// GetTransaction
func (h *handlerTransaction) GetTransaction(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	transactions, err := h.TransactionRepository.GetTransaction(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	return c.JSON(http.StatusOK, dto.SuccesResult{Code: http.StatusOK, Data: transactions})
}
