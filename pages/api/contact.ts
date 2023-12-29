import type {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken';

type Data = {
  message: string
}

async function sendContactMessage(token: string, message: string) {
  const url = process.env.CONTACT_URL || '';

  if (url === '') {
    throw new Error('Missing CONTACT_URL environment variable')
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      message,
    })
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const {name, email, message: bodyMessage} = req.body;
    const secretKey = process.env.JWT_SECRET_KEY || '';

    const data = {
      app: process.env.JWT_APP_CLAIM || ''
    }

    const token = jwt.sign(data, secretKey, {
      algorithm: 'HS256',
      expiresIn: '1m' // Token expires in 1 hour
    });

    const message = `Contacto Juegathon:\nDe: ${name} <${email}>\n\n${bodyMessage}`

    // Send a message or perform some action with the token
    sendContactMessage(token, message)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    res.status(200).json({message: 'Form submitted successfully'});
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
