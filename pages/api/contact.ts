import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

type ResponseData = {
  success?: boolean;
  error?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  let connection;

  try {
    connection = await pool.getConnection();

    const query = `
      INSERT INTO contact_submissions (name, email, phone, message, status, created_at)
      VALUES (?, ?, ?, ?, 'new', NOW())
    `;

    const [result] = await connection.execute(query, [name, email, phone || null, message]);

    return res.status(201).json({ 
      success: true, 
      data: {
        id: (result as any).insertId,
        message: 'Contact submission saved successfully'
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to save contact submission' });
  } finally {
    if (connection) {
      await connection.release();
    }
  }
}
