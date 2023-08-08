package controllers

import (
	"net/http"
	"time"

	"github.com/Thwani47/react-go-typing-test/db"
	"github.com/Thwani47/react-go-typing-test/entities"
	"github.com/Thwani47/react-go-typing-test/utils"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
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
	})
}

func Signin(c *gin.Context) {
	var reqUser entities.User

	if err := c.ShouldBindJSON(&reqUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err,
		})
		return
	}

	var dbUser entities.User
	db.DB.Where("username = ?", reqUser.Username).First(&dbUser)

	if dbUser.Username == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid username or password",
		})
		return
	}

	if dbUser.CheckPasswordHash(reqUser.Password) {

		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub": dbUser.Username,
			"exp": time.Now().Add(time.Hour * 1).Unix(),
		})

		tokenString, err := token.SignedString([]byte(utils.GetEnvVariable("SECRET")))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}

		c.SetSameSite(http.SameSiteLaxMode)
		c.JSON(http.StatusOK, gin.H{
			"token": tokenString,
		})

	} else {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Invalid username or password",
		})
	}
}
