import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import noteContext from "./noteContext";
import { useNavigate, useLocation } from "react-router-dom";

const NoteState = (props) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );

  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Manage the authenticated state based on authToken
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  const login = (authToken) => {
    setAuthToken(authToken);
    localStorage.setItem("authToken", authToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
    setIsAuthenticated(false); // Update state

    toast.success("Logged out successfully!"); // Optional success message
    navigate("/login");
  };

  useEffect(() => {
    if (
      !authToken &&
      location.pathname !== "/signup" &&
      location.pathname !== "/login"
    ) {
      // Check if not on signup page
      toast.error("Please log in to access notes.");
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [authToken, navigate, location.pathname]); // Added location.pathname as dependency

  // Fetch Notes from Server
  const fetchNotes = async () => {
    if (!authToken) {
      toast.error("Authentication token not found. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to fetch notes");
      }

      const data = await response.json();
      setNotes(data.notes || []);
    } catch (error) {
      toast.error(`Failed to fetch notes: ${error.message}`);
    }
  };

  // Add a Note
  const addNote = async (note) => {
    const { title, description, tag } = note;

    try {
      const response = await fetch(`${BASE_URL}/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add note");
      }

      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, data.note]); // Add new note to the state
      toast.success("Note added successfully!");
    } catch (error) {
      toast.error(`Failed to add note: ${error.message}`);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${BASE_URL}/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to update note");
      }

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
      toast.success("Note updated successfully!");
    } catch (error) {
      toast.error(`Failed to edit note: ${error.message}`);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to delete note");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note deleted successfully!");
    } catch (error) {
      toast.error(`Failed to delete note: ${error.message}`);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchNotes();
    }
  }, [authToken]);

  return (
    <noteContext.Provider
      value={{
        authToken,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        notes,
        setNotes,
        fetchNotes,
        addNote,
        editNote,
        deleteNote,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
