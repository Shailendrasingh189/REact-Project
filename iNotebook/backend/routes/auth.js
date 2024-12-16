const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const {
  authValidationSchema,
  loginValidation,
} = require("../middleware/authValidation");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "ShailendraSingh";

// Route 1: Signup
router.post("/signup", authValidationSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, errors: [{ msg: "Email already in use" }] });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({ name, email, password: hashedPassword });

    // Generate JWT
    const jwtData = { id: user._id };
    const authToken = jwt.sign(jwtData, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      authToken,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Route 2: Login
router.post("/login", loginValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        errors: [{ msg: "Invalid credentials" }],
      });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        errors: [{ msg: "Invalid credentials" }],
      });
    }

    // Generate JWT
    const jwtData = { id: user._id };
    const authToken = jwt.sign(jwtData, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      success: true,
      message: "Login successful",
      authToken,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Route 3: Get User Details
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id; // Fetch user ID from middleware
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
