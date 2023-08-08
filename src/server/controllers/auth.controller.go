package controllers

import (
	"net/http"

	"github.com/Thwani47/react-go-typing-test/db"
	"github.com/Thwani47/react-go-typing-test/entities"
	"github.com/gin-gonic/gin"
)

func Signup(c *gin.Context) {
	var reqUser entities.User

	if err := c.ShouldBindJSON(&reqUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err,
		})
		return
	}

	var dbUser entities.User

	db.DB.Where("username = ?", reqUser.Username).First(&dbUser)

	if dbUser.Username != "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Username already exists",
		})
		return
	}

	err := reqUser.GeneratePasswordHash()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to generate password hash",
		})
		return
	}

	res := db.DB.Create(&reqUser)
	if res.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to register user",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "User registered successfully",
		"user":    reqUser,
	})
}
