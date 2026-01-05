import nodemailer from 'nodemailer';
import path from 'path';

// Create reusable transporter with SMTP configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587, // or 465 for SSL
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function sendCredentialsEmail(
    to: string,
    name: string,
    email: string,
    password: string
) {
    try {
        const logoPath = path.join(process.cwd(), 'app/assets/logo.png');

        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: to,
            subject: 'Your Account Credentials - Wonderbees Therapy Centre',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <img src="cid:logo" alt="Wonderbees Logo" style="width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; object-fit: cover; border: 3px solid rgba(255,255,255,0.3);" />
                        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Wonderbees!</h1>
                    </div>
                    
                    <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
                        <p style="font-size: 16px; margin-bottom: 20px;">Hello <strong>${name}</strong>,</p>
                        
                        <p style="font-size: 16px; margin-bottom: 20px;">Your account has been created at Wonderbees Therapy Centre. Here are your login credentials:</p>
                        
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
                            <p style="margin: 0 0 10px 0;"><strong style="color: #667eea;">Email:</strong> <code style="background: #e9ecef; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${email}</code></p>
                            <p style="margin: 0;"><strong style="color: #667eea;">Password:</strong> <code style="background: #e9ecef; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${password}</code></p>
                        </div>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}" 
                               style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                                Login to Your Account
                            </a>
                        </div>
                        
                        <div style="background: #fff3cd; border: 1px solid #ffc107; border-radius: 6px; padding: 15px; margin: 20px 0;">
                            <p style="margin: 0; color: #856404; font-size: 14px;">
                                <strong>⚠️ Important:</strong> Please change your password after your first login for security purposes.
                            </p>
                        </div>
                        
                        <p style="font-size: 14px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                            Best regards,<br/>
                            <strong>Wonderbees Therapy Centre Team</strong>
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                        <p>This is an automated message. Please do not reply to this email.</p>
                    </div>
                </body>
                </html>
            `,
            attachments: [{
                filename: 'logo.png',
                path: logoPath,
                cid: 'logo' // same cid value as in the html img src
            }]
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
}
