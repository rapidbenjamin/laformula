import fetch from "node-fetch";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { captcha }: any = await req.body;
    // If email or captcha are missing, return an error
    if (!captcha) {
      return new Response("Unprocessable request, please provide the required fields");
    }
    
    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LeJ8lMoAAAAAPvOqukhhD5rpY3qRsObYct0kXyw&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      
      const captchaValidation = await response.json();
      
      if (captchaValidation.success) {
        return new Response("Hello, Next.js!");
      }
      
      return new Response("Unprocessable request, Invalid captcha code");
    } catch (error) {
      console.log(error);
      return new Response("Something went wrong");
    }
  
  // return res.status(404).send("Not found");
  }
}
