const nodemailer = require("nodemailer");
export default function (req, res) {
  const htmlSendToAdmin = `
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
      <tr>
        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
      
            <tr>
              <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
                <p style="margin: 0;">A request has been received from iXiaThemes. See below for more information:</p>
              </td>
            </tr>
            <tr>
                <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
                    <p style="text-align:left; padding-top: 10px;">
                        <i><strong>Name: </strong>${req.body.name}</i><br>
                        <i><strong>Email address: </strong>${req.body.email}</i><br>
                        <i><strong>Phone number: </strong>${req.body.phone}</i><br>
                        <i><strong>Project description: </strong>${req.body.message}</i><br>
                    </p>
                  </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
      <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
          <tr>
              <td style="width: 90px;">
                  <img style="width: 90px;" src="/images/iXiaThemes.svg"/>
              </td>
              <td style="width: 3px; background-color: #e84c88;"></td>
              <td style="width: 430px; padding-left: 10px;">
                    <p style="color:#e84c88; margin: 0 12px;"> 
                      <strong>Business Development</strong>
                      <p style="font-size: small; color: #000; margin: 2px;"> 
                          <strong style="color: #e84c88;">a:</strong>  329 Mandolin Dr, San Jose, CA 95134, USA
                      </p>
                      <p style= "font-size: small; color: #000; margin: 2px;">
                          <strong style="color: #e84c88;">e:</strong> <a class="fa" href="mailto:support@ixiathemes.com"  style="color:#1d8ece; text-decoration: underline;">support@ixiathemes.com</a>
                          | <strong  style="color: #e84c88;">w:</strong> <a class="fa" href="https://ixiathemes.com/" target="blank" style="color:#1d8ece; text-decoration: underline;">www.ixiathemes.com</a>
                      </p>
                      <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                          <strong style="color: #e84c88;">p:</strong>  (+44) 555 88 65 
                      </p>
                      <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/facebook_ekglz7.png" width="17px" height='17px' />
                      </a>
                      <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/twitter_ucracw.png" width="17px" height='17px' />
                      </a>
                      <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/linkedin_r1qwpo.png" width="17px" height='17px' />
                      </a>
                      <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/instagram_gakagk.png" width="17px" height='17px' />
                      </a>
                    </p>
              </td>
          </tr>
    </table>
  </td>
      </tr>
      </table>`;
  const htmlSendToUser = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
  
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
            <p style="margin: 0;">Thankyou for your interest in iXiaThemes</p>
            <p style="margin-top: 15px;">Our team will be in coordination with you shortly</p>
            <p style="margin-top: 30px;">To learn more about iXiaThemes, please visit our website at <a class="fa" href="https://ixiathemes.com/" target="blank" style="color:#1d8ece; text-decoration: underline;">www.ixiathemes.com</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
  <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
          <tr>
              <td style="width: 90px;">
                  <img style="width: 90px;" src="/images/iXiaThemes.svg"/>
              </td>
              <td style="width: 3px; background-color: #e84c88;"></td>
              <td style="width: 430px; padding-left: 10px;">
                    <p style="color:#e84c88; margin: 0 12px;"> 
                      <strong>Business Development</strong>
                      <p style="font-size: small; color: #000; margin: 2px;"> 
                          <strong style="color: #e84c88;">a:</strong>  329 Mandolin Dr, San Jose, CA 95134, USA
                      </p>
                      <p style= "font-size: small; color: #000; margin: 2px;">
                          <strong style="color: #e84c88;">e:</strong> <a class="fa" href="mailto:support@ixiathemes.com"  style="color:#1d8ece; text-decoration: underline;">support@ixiathemes.com</a>
                          | <strong  style="color: #e84c88;">w:</strong> <a class="fa" href="https://ixiathemes.com/" target="blank" style="color:#1d8ece; text-decoration: underline;">www.ixiathemes.com</a>
                      </p>
                      <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                          <strong style="color: #e84c88;">p:</strong>  (+44) 555 88 65 
                      </p>
                      <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/facebook_ekglz7.png" width="17px" height='17px' />
                      </a>
                      <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/twitter_ucracw.png" width="17px" height='17px' />
                      </a>
                      <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/linkedin_r1qwpo.png" width="17px" height='17px' />
                      </a>
                      <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/instagram_gakagk.png" width="17px" height='17px' />
                      </a>
                    </p>
              </td>
          </tr>
    </table>
  </td>
</tr>
  </table>`;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      ssl: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.NEXT_PUBLIC_FORWARDING_EMAIL,
        pass: process.env.NEXT_PUBLIC_FORWARDING_EMAIL_PASSWORD,
      },
    });
    transporter.sendMail(
      {
        from: process.env.NEXT_PUBLIC_FORWARDING_EMAIL, // sender address
        to: process.env.NEXT_PUBLIC_ADMIN_EMAIL, // list of receivers
        subject: "Request for contact from iXiaThemes", // Subject line
        // text: "From iXiaThemes", // plain text body
        html: htmlSendToAdmin, // html body
      },

      (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          if (req.body.email) {
            transporter.sendMail(
              {
                from: process.env.NEXT_PUBLIC_ADMIN_EMAIL, // sender address
                to: req.body.email, // list of receivers
                subject: "Thankyou for your interest in iXiaThemes", // Subject line
                // text: "From iXiaThemes", // plain text body
                html: htmlSendToUser, // html body
              },
              (err, data) => {
                if (err) {
                  throw new Error(err);
                } else {
                  console.log("Email sent");
                  return res.status(200).json({
                    statusCode: 200,
                    data: data,
                  });
                }
              }
            );
          } else {
            console.log("Email sent");
            return res.status(200).json({
              statusCode: 200,
              data: data,
            });
          }
        }
      }
    );
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      error: error.message,
    });
  }
}
