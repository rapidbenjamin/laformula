import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("suss");
  const { body, method } = req;
  const { captcha } = body;
  
  if (method === "POST") {
    // If email or captcha are missing, return an error
    if (!captcha) {
      return res.status(422).json({
        message: "Unprocessable request, please provide the required fields",
      });
    }
    
    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LdR8VMoAAAAALlJCOIAREmFdVlW7vKMxN-_BypO&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      
      const captchaValidation = await response.json();
      
      if (captchaValidation.success) {
        return res.status(200).send("OK");
      }
      
      return res.status(422).json({
        message: "Unprocessable request, Invalid captcha code",
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }
  
  return res.status(404).send("Not found");
}

// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }