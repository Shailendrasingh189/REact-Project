const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/note.model");
const { validationResult } = require("express-validator");
const { notesValidationSchema } = require("../middleware/notesValidation");
const router = express.Router();

// Route 1: Get all notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });

    if (!notes.length) {
      return res.status(404).json({
        success: false,
        message: "No notes found for this user",
      });
    }

    res.json({ success: true, notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching notes",
    });
  }
});

// Route 2: Add a note
router.post("/addnote", fetchuser, notesValidationSchema, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  const { title, description, tag } = req.body;

  try {
    const newNote = new Note({
      title,
      description,
      tag: tag || "",
      user: req.user, // `fetchuser` middleware sets `req.user`
    });

    const savedNote = await newNote.save();

    res.status(201).json({
      success: true,
      message: "Note added successfully",
      note: savedNote,
    });
  } catch (error) {
    console.error("Error adding note:", error);
    res.status(500).json({
      success: false,
      message: "Server error while adding note",
    });
  }
});

// Route 3: Update a note
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    // Validate note fields
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    // Find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    // Check user ownership
    if (note.user.toString() !== req.user) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to update this note",
      });
    }

    // Update note fields
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, description, tag },
      { new: true }
    );

    res.json({
      success: true,
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating note",
    });
  }
});

// Route 4: Delete a note
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to delete
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ success: false, message: "Note not found" });
    }

    // Check user ownership
    if (note.user.toString() !== req.user) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to delete this note",
      });
    }

    await Note.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting note",
    });
  }
});

module.exports = router;
