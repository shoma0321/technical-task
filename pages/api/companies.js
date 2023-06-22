// pages/api/companies.js
import axios from 'axios';

export default async function handler(req, res) {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  if (req.method === 'GET') {
    // Get companies from Rails API
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies`, { params: req.query });
    res.status(200).json(response.data);
  } else if (req.method === 'POST') {
    // Add a new company
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies`, req.body);
    res.status(200).json(response.data);
  } else if (req.method === 'PUT') {
    // Update a company
    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/companies/${req.body.id}`, req.body);
    res.status(200).json(response.data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
