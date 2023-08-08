package db

import (
	"fmt"
	"log"
	"os"

	"github.com/Thwani47/react-go-typing-test/entities"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
var err error

func SetDbClient() {
	var (
		host     = envVariable("DB_HOST")
		port     = envVariable("DB_PORT")
		user     = envVariable("DB_USER")
		password = envVariable("DB_PASSWORD")
		dbname   = envVariable("DB_NAME")
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

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected to the database")

}

func envVariable(key string) string {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}
