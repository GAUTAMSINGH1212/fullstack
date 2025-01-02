const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 
const User = require("../models/UserSchema.js"); 


const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const userController = {
  register: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  dashboard: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.status(200).json({ message: "User Dashboard", user });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = userController;
