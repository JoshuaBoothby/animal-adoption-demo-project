import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
const TABLE = "animals";

const client = new DynamoDBClient({
  region: process.env.VITE_AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VITE_AWS_SECRET_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

export async function scanAnimals() {
  const { Items } = await docClient.send(
    new ScanCommand({
      TableName: TABLE,
    })
  );
  return Items || [];
}

export async function createAnimal(animal) {
  await docClient.send(
    new PutCommand({
      TableName: TABLE,
      Item: animal,
    })
  );
}
