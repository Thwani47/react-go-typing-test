FROM golang:1.19.5-alpine

WORKDIR /app

COPY . . 
RUN go build -o main .

EXPOSE 5000

CMD ["./main"]