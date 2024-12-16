import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { toast } from "react-toastify";
import CloseBtn from "../svgs/CloseBtn";

const AddNote = ({ toggleModel, initialData, onSave }) => {
  const context = useContext(noteContext);
  const { addNote, editNote } = context;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });

  // Populate form data if editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        tag: initialData.tag || "",
      });
    }
  }, []); // [initailData]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.title.length <= 5) {
      toast.info("Title must be greater than 5 characters.");
      return;
    }
    if (formData.description.length <= 6) {
      toast.info("Description must be greater than 6 characters.");
      return;
    }

    if (initialData) {
      // Edit existing note
      editNote(
        initialData._id,
        formData.title,
        formData.description,
        formData.tag
      );
    } else {
      //Add new note
      addNote(formData);
    }
    toggleModel();
    setFormData({ title: "", description: "", tag: "" }); // Clear note after submission
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModel(); // Close modal when clicking outside the content
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
        <div
          className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800 w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner clicks
        >
          <div className="flex justify-between items-center mb-4 text-2xl font-bold text-gray-800 dark:text-neutral-200">
            <h2 className="text-xl font-semibold">
              {initialData ? "Edit Note" : "Add Note"}
            </h2>
            <CloseBtn toggleModel={toggleModel} />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title Input */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                placeholder="Enter note title"
                required
              />
            </div>

            {/* Description Input */}
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm  font-medium text-gray-800 dark:text-neutral-200 "
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400
                 sm:text-sm resize-none scrollbar 
                scrollbar-thumb-gray-700 scrollbar-track-gray-500 h-26 overflow-y-auto
            "
                placeholder="Enter note description"
                required
              ></textarea>
            </div>

            {/* Tag Input */}
            <div>
              <label
                htmlFor="tag"
                className="block mb-2 text-sm font-medium text-gray-800 dark:text-neutral-200"
              >
                Tag (optional)
              </label>
              <input
                type="text"
                id="tag"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                className="py-3 px-4 block w-full border border-gray-200 outline-none rounded-lg text-sm 
                focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
                placeholder="Enter note tag"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 dark:bg-neutral-900 text-gray-700 border border-gray-200 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-neutral-00
                dark:border-neutral-700"
                onClick={toggleModel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {initialData ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNote;
