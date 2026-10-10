const Message = require('../models/Message');
const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {

    const newMessage = await Message.create({ name, email, message });

 
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Portfolio Message from ${name}`,
      text: `You received a new message from your portfolio.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};

module.exports = { submitContactForm };
