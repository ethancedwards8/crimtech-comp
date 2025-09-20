// count-client.js
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the proto file
const PROTO_PATH = join(__dirname, 'count.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const countProto = grpc.loadPackageDefinition(packageDefinition).count.v1;

class CountClient {
  constructor(serverAddress = 'localhost:8080') {
    this.client = new countProto.CountService(
      serverAddress,
      grpc.credentials.createInsecure()
    );
  }

  async count(increment = 1) {
    return new Promise((resolve, reject) => {
      const request = { increment };
      
      this.client.Count(request, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.total);
        }
      });
    });
  }

  close() {
    this.client.close();
  }
}

const client = new CountClient();
  
console.log('Calling count with increment 1...');
const total = await client.count(1);
console.log('Total:', total);
