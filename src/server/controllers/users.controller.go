package controllers

import (
	"net/http"

	"github.com/Thwani47/react-go-typing-test/db"
	"github.com/Thwani47/react-go-typing-test/entities"
	"github.com/gin-gonic/gin"
)

func Users(c *gin.Context) {
	var users []entities.User

	res := db.DB.Find(&users)

	if res.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error fetching users",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"users": users,
	})
}
