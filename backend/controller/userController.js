const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../models/User');

const registerUser = async (req, res) => {
    const { username, password, confirm_password, email } = req.body;

    if (!username && !password && !confirm_password && !email) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the input fields"
        })
    }

    try {
        const userExists = await Users.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'A user with this email already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            username,
            password: hashedPassword,
            email
        });

        await newUser.save();

        res.json({
            success: true,
            user: 'User Registered Successfully'
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({
            success: false,
            message: 'Please use another username, this username has been picked'
        });
    }
}

const loginUser = async (req, res) => {

}

module.export = {
    registerUser
}