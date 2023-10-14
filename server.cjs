require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");

const app = express();

const user = process.env.REACT_APP_USER;
const pass = process.env.REACT_APP_PASS;

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    
    if (!name || !email || !message) {
        alert("Error, input empty!")
    };

    console.log(name.value, email.value, message.value)
})

app.get("/", (req, res) => {
    
    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        auth: {user, pass}
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "contact@programador.com",
        subject: "Hello World",
        text: "Welcome to my team"
    }).then(info => {
        res.send(info)
    }).catch(error=>res.send(error))

})

app.listen(3000);