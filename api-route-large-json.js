```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error in Next.js 15 if the response is too large
  res.status(200).json({ name: 'John Doe', data: Array(100000).fill('large data') });
}