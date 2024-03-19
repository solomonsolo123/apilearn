// const express = require("express");

// // Initialize Express
// const app = express();

// // Create GET request
// app.get("/", (req, res) => {
//   res.send("Express on Vercel");
// });

// // Initialize server
// app.listen(5000, () => {
//   console.log("Running on port 5000.");
// });

// module.exports = app;

// const express = require("express");
// const nodemailer = require("nodemailer");

// // Initialize Express
// const app = express();

// // ... your existing GET request ...
// app.get("/", (req, res) => {
//   res.send("Express on Vercel");
// });

// // Email Sending Functionality
// app.post("/send-email", async (req, res) => {
//   try {
//     // Create transporter (replace placeholders with your email provider info)
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // Or your email service provider 
//       auth: {
//         user: 'amberdotdesign@gmail.com',
//         pass: 'mkxo hqqq tnpo bthd'
//       }
//     });

//     // Extract email data from the request body
//     const { to, subject, text } = req.body;

//     // Set up email options
//     const mailOptions = {
//       from: 'amberdotdesign@gmail.com',
//       to, 
//       subject,
//       text 
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: `Email sent: ${info.messageId}` });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });

// // Initialize server
// app.listen(5000, () => {
//   console.log("Running on port 5000.");
// });

// module.exports = app;


const express = require("express");
const nodemailer = require("nodemailer");

// Initialize Express
const app = express();

// Enable JSON body parsing middleware
app.use(express.json());

// Email Sending Functionality
app.post("/send-email", async (req, res) => {
  try {
    // Extract email data from the request body (with destructuring)
    const { to, subject, text } = req.body;

    // Create transporter (replace placeholders with your email provider info)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email service provider 
      auth: {
        user: 'amberdotdesign@gmail.com',
        pass: 'mkxo hqqq tnpo bthd'
      }
    });

    // Set up email options
    const mailOptions = {
      from: 'amberdotdesign@gmail.com',
      to, 
      subject,
      text 
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: `Email sent: ${info.messageId}` });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;

