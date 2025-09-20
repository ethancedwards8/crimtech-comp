import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { json } from '@sveltejs/kit';

const PROTO_PATH = join(process.cwd(), 'src/lib/count.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { });

const countProto = grpc.loadPackageDefinition(packageDefinition).count.v1;

const client = new countProto.CountService(
  'localhost:8080',
  grpc.credentials.createInsecure()
);

export async function POST({ request }) {
    const { increment } = await request.json();

    const total = await new Promise((resolve, reject) => {
      client.Count({ increment }, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response.total);
        }
      });
    });

    return json({ total });
}
