import React from "react";
// import AddNote from "../../components/";

const ShowAddNote = () => {
  const [showAddNote, setShowAddNote] = useState(false);
  const toggleAddNote = () => {
    console.log(showAddNote);
    setShowAddNote(!showAddNote);
  };
  return (
    <>
      {showAddNote && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={toggleAddNote}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner clicks
          >
            <AddNote toggleAddNote={toggleAddNote} />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowAddNote;
