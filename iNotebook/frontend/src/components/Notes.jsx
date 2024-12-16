import React, { useState, useContext } from "react";
import AddNote from "../components/addNote";
import noteContext from "../context/notes/noteContext";
import EditSvg from "../svgs/EditSvg";
import DeleteSvg from "../svgs/DeleteSvg";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, deleteNote } = context;
  const [showModel, setShowModel] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const toggleModel = () => setShowModel(!showModel);

  const handleEdit = (note) => {
    setCurrentNote(note);
    setEditing(true);
    toggleModel();
  };

  const handleAdd = () => {
    setCurrentNote(null);
    setEditing(false);
    toggleModel();
  };

  return (
    <>
      <div className="py-8">
        <div className="flex justify-between items-center mb-4 px-4 sm:mx-12 lg:justify-around ">
          <h2 className="text-xl font-semibold dark:text-neutral-400">
            All Notes
          </h2>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-flex justify-center items-center"
            onClick={handleAdd}
            aria-label="Add Note"
          >
            Add Note
          </button>
        </div>

        {/* Model for Add/Edit Note */}
        {showModel && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner clicks
          >
            <AddNote
              toggleModel={toggleModel}
              initialData={isEditing ? currentNote : null}
              // onSave={handleSave}
            />
          </div>
        )}

        {/* Notes Grid */}
        <div className="mt-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.length > 0 ? (
            notes
              .map((note, key) => (
                <div
                  className="p-4 bg-neutral-900 border border-gray-200 rounded-lg dark:border-neutral-700"
                  key={key}
                >
                  <p className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    {new Date(note.date).toLocaleDateString()}
                    {/* Format the date */}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      {note.title}
                    </h3>
                    <div className="flex space-x-2">
                      {/* Edit Icon */}
                      <button
                        className="w-6 h-6 text-blue-500 hover:text-blue-600"
                        aria-label="Edit Note"
                        onClick={() => handleEdit(note)}
                      >
                        <EditSvg />
                      </button>
                      {/* Delete Icon */}
                      <button
                        className="w-6 h-6 text-red-600 hover:text-red-700"
                        aria-label="Delete Note"
                        onClick={() => deleteNote(note._id)}
                      >
                        <DeleteSvg />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    {note.description}
                  </p>
                </div>
              ))
              .reverse()
          ) : (
            <p className="text-center col-span-full text-gray-600 dark:text-neutral-400">
              No notes available. Click "
              <button
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 underline"
                onClick={toggleModel} // Call the function to open AddNote
              >
                Add Note
              </button>
              " to create your first note!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
