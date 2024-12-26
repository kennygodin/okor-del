const { sendEmail } = require('../utils/sendEmail');

const contactUs = async (req, res) => {
  const { name, email, phoneNumber, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json('Name, email, subject and message are required');
  }

  try {
    await sendEmail({
      to: 'hello@okordel.com',
      from: email,
      subject: `Okor Del New Contact Us Message`,
      html: `
          <h3>${subject}</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone number:</strong> ${phoneNumber | null}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr />
          <p>Message sent from Okor Del website.</p>
        `,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res
      .status(500)
      .json({ error: 'Failed to send the message. Please try again later.' });
  }
};

const requestCallback = async (req, res) => {
  const { name, purpose, email, phoneNumber } = req.body;

  if (!name || !email || !purpose || !phoneNumber) {
    return res
      .status(400)
      .json('Name, email, purpose and phone no. are required');
  }

  try {
    await sendEmail({
      to: 'hello@okordel.com',
      from: email,
      subject: `Okor Del Request Call Back`,
      html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>I would like to discuss:</strong> ${purpose}</p>
          <hr />
          <p>Message sent from Okor Del website.</p>
        `,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res
      .status(500)
      .json({ error: 'Failed to send the message. Please try again later.' });
  }
};

module.exports = { contactUs, requestCallback };
