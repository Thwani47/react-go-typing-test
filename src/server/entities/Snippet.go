package entities

import "gorm.io/gorm"

type Snippet struct {
	gorm.Model
	Code     string `json:"code"`
	Language string `json:"language"`
}
