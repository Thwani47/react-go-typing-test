package main

import (
	"net/http"

	"github.com/Thwani47/react-go-typing-test/controllers"
	"github.com/Thwani47/react-go-typing-test/db"
	"github.com/Thwani47/react-go-typing-test/middlware"
	"github.com/gin-gonic/gin"
)

func init() {
	db.SetDbClient()
}
func main() {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Home router",
		})
	})

	router.POST("/signup", controllers.Signup)
	router.POST("/signin", controllers.Signin)
	router.GET("/users", middlware.Authorize, controllers.Users)

	router.Run(":5000")
}
