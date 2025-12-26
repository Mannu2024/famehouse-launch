import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  budget?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form data:", formData);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["famehouse2025@zohomail.in"],
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 12px; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 12px;">${formData.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 12px; font-weight: bold;">Company:</td>
              <td style="padding: 12px;">${formData.company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 12px; font-weight: bold;">Email:</td>
              <td style="padding: 12px;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 12px; font-weight: bold;">Phone:</td>
              <td style="padding: 12px;">${formData.phone || "Not provided"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 12px; font-weight: bold;">Budget:</td>
              <td style="padding: 12px;">${formData.budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 12px;">${formData.message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Submitted on ${new Date().toLocaleString()}
          </p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailResponse = await res.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
