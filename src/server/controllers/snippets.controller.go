package controllers

import (
	"net/http"

	"github.com/Thwani47/react-go-typing-test/db"
	"github.com/Thwani47/react-go-typing-test/entities"
	"github.com/gin-gonic/gin"
)

func GetSnippets(c *gin.Context) {
	var snippets []entities.Snippet

	res := db.DB.Find(&snippets)

	if res.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error fetching code snippets",
		})
		return
	}

	c.JSON(http.StatusOK, snippets)
}
