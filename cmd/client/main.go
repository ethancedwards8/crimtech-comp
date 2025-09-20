package main

import (
	"context"
	"log"
	"net/http"

	countv1 "example/gen/count/v1"
	"example/gen/count/v1/countv1connect"

	"connectrpc.com/connect"
)

func main() {
	client := countv1connect.NewCountServiceClient(
		http.DefaultClient,
		"http://localhost:8080",
		connect.WithGRPC(),
	)
	res, err := client.Count(
		context.Background(),
		connect.NewRequest(&countv1.CountRequest{Increment: 1}),
	)
	if err != nil {
		log.Println(err)
		return
	}
	log.Println(res.Msg.Total)
}
