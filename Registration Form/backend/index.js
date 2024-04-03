const UserData = require('./models/FormData');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect('mongodb://127.0.0.1:27017/Form')
    .then(() => {
        console.log('Connected');
    })
    .catch(err => console.log("Database error:",err));

app.post('/register', (req, res) => {
    // To post
    console.log("register");
    const { email } = req.body;

    UserData.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already an User");
            }
            else {
                UserData.create(req.body) // user create
                    .then((newUser) => {
                        res.json(newUser);
                        console.log(newUser);
                    })
                    .catch(err => res.json(err));
            }
        })

        .catch(err => res.json(err))

})

app.post('/login', (req, res) => {
    // console.log("yes");
    const { email, password } = req.body;
    console.log(req.body);
    UserData.findOne({ email: email })
        .then(user => {
            if (user) {

                if (user.password === password) {

                    console.log("Success");
                    const token = jwt.sign({ email: user.email, name: user.name }, 'spiderman@123', { expiresIn: '1h' });
                    console.log("Generated token:", token);
                    res.json({
                        message: "Success",
                        token: token,
                        user: {
                            name: user.name,
                            email: user.email

                        }
                    });

                }
                else {
                    res.json("Wrong password");
                }
            }

            else {
                res.json("No records found! ");
            }
        })
})

app.listen(1111, () => {
    console.log("Started");

});