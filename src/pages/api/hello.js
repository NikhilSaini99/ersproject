// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { submitFeedback } from "./api";
export default async function handler(req, res) {
  if (req.method === "GET")
  // res.status(200).json({ name: 'John Doe' })
  { console.log('s') }
  else if (req.method === "POST") {
    try {
      const feedbackData = req.body;
      const result = await submitFeedback(feedbackData);
      console.log(result)
      req.status(200).json({ success: true, data: result })
    } catch (err) {
      res.status(500).json({ success: false, error: 'Error submitting feedback' });
    }
  }
}
