package db

import (
	"fmt"
	"log"

	"github.com/Thwani47/react-go-typing-test/entities"
	"github.com/Thwani47/react-go-typing-test/utils"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var err error

func SetDbClient() {
	var (
		host     = utils.GetEnvVariable("DB_HOST")
		port     = utils.GetEnvVariable("DB_PORT")
		user     = utils.GetEnvVariable("DB_USER")
		password = utils.GetEnvVariable("DB_PASSWORD")
		dbname   = utils.GetEnvVariable("DB_NAME")
	)

	connString := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		host,
		port,
		user,
		dbname,
		password,
	)
	DB, err = gorm.Open(postgres.Open(connString), &gorm.Config{})

	DB.AutoMigrate(&entities.User{})
	DB.AutoMigrate(&entities.Snippet{})

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected to the database")

}
