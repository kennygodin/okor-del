const transporter = require('./nodemailer');

const sendEmail = async ({ to, from, subject, html }) => {
  let mailOptions = {
    to,
    from,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
    throw error;
  }
};

module.exports = {
  sendEmail,
};
