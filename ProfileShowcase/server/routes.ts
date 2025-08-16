import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";
import fs from "fs";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the contact data
      console.log("Contact form submission:", contactData);
      
      // You could integrate with services like:
      // - Nodemailer for sending emails
      // - EmailJS for client-side email sending
      // - SendGrid, Mailgun, or other email services
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid contact form data" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "public", "resume.pdf");
      
      // Check if resume file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ 
          success: false, 
          message: "Resume file not found" 
        });
      }

      // Set headers for file download
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Pichuka_Manoj_Kumar_Resume.pdf");
      
      // Stream the file
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error downloading resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
