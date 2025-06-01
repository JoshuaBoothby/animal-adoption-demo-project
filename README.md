# Create a new Vite project in current directory

npm create vite@latest .

# Install dependencies

npm install

## Environment Setup

Create a .env.local file with your AWS keys

VITE_AWS_REGION=us-east-1
VITE_AWS_ACCESS_KEY_ID=your_key
VITE_AWS_SECRET_KEY=your_secret

- Start dev server
  npm run dev
- Run tests
  npm test
- Build for production
  npm run build

## Features

Add & delete pets
Toggle adoption status
Update pics
Neon UI design
DynamoDB backend
