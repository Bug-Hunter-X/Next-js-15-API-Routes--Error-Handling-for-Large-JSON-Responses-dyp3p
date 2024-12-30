```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  try {
    const largeData = Array(100000).fill('large data');
    // Check response size before sending
    const responseSize = JSON.stringify({ name: 'John Doe', data: largeData }).length;
    if (responseSize > 1024 * 1024) { // 1MB limit example
      res.status(413).json({ error: 'Response too large' });
    } else {
      res.status(200).json({ name: 'John Doe', data: largeData });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```