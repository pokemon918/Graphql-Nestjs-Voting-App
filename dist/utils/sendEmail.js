"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
const sendEmail = async (userEmail, link) => {
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: 'hsn121121@gmail.com',
            pass: "xsmtpsib-88cf2bace767261f7d762d28551dce0762ce4bf4dc2cd56230d2e90632ce4e77-nAZTQUtRVMI5s3XO" || process.env.SENDINBLUE_TOKEN,
        },
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: userEmail,
        subject: "Hello ✔",
        text: "Hello world?",
        html: `<b>Hello world?</b> <a href="${link}">Confirm Email</a>`,
    });
    console.log("Message sent: %s", info.messageId);
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map