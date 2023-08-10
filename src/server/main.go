package main

import (
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
	router.Use(middlware.CORSMiddleware())

	router.POST("/api/v1/signup", controllers.Signup)
	router.POST("/api/v1/signin", controllers.Signin)
	router.GET("/api/v1//users", middlware.Authorize, controllers.Users)
	router.GET("/api/v1/snippets", controllers.GetSnippets)

	router.Run(":5000")
}
