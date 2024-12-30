# Next.js 15 API Routes: Handling Large JSON Responses
This repository demonstrates a bug in Next.js 15 where sending large JSON responses from API routes can cause the application to crash without providing informative error messages.  The solution involves proper error handling and potentially streaming the response.

## Bug Report
When attempting to send a large JSON payload from an API route in Next.js 15, the application may crash without clear error messages in production.  This makes debugging difficult.

## Setup
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Try accessing `/api/hello` - it should fail due to the large response.

## Solution
The solution involves implementing more robust error handling and, for exceptionally large responses, streaming the data instead of sending it as a single JSON object.

## Usage
The provided solution `api-route-large-json-solution.js` demonstrates how to handle large responses more gracefully.  This version checks the response size and handles potential errors more effectively.