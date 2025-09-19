package main

import (
	"context"
	"fmt"
	"log"
	"net"

	// pb "github.com/ethancedwards8/crimtech-comp/counter/proto"
	"google.golang.org/grpc"
)

// server implements the CounterService.

// Increment adds 1 to the incoming value.
// func (s *server) Increment(ctx context.Context, req *pb.IncrementRequest) (*pb.IncrementResponse, error) {
// 	result := req.GetValue() + 1
// 	return &pb.IncrementResponse{Value: result}, nil
// }

func main() {
	lis, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	// pb.RegisterCounterServiceServer(s, &server{})

	fmt.Println("Server listening on :50051")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

