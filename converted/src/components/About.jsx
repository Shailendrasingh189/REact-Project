export default function About({ mode }) {
  console.log(mode);
  return (
    <div className={`container p-2 text-${mode==="light" ? '#000' : "#fff"}  bg-${mode} rounded`}>
      <h1 className="my-3">About Us</h1>
      <div
        className="accordion accordion-flush"
        // style={{ border: `1px solid ${mode === "light" ? "#2b2f32" : "#fff"}` }}
        id="accordionFlushExample"
      >
        <div
          className="accordion-item"
          style={{
            color: mode === "light" ? "#000" : "#fff",
            backgroundColor: mode === "light" ? "#fff" : "#2b2f32",
            border: `1px solid ${mode === "light" ? "#2b2f32" : "#fff"}`,
          }}
        >
          <h2 className="accordion-header">
            <button
              style={{
                color: mode === "light" ? "#000" : "#fff",
                backgroundColor: mode === "light" ? "#fff" : "#2b2f32",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            data-bs-theme={mode}
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            color: mode === "light" ? "#000" : "#fff",
            backgroundColor: mode === "light" ? "#fff" : "#2b2f32",
            border: `1px solid ${mode === "light" ? "#2b2f32" : "#fff"}`,
          }}
        >
          <h2 className="accordion-header">
            <button
              style={{
                color: mode === "light" ? "#000" : "#fff",
                backgroundColor: mode === "light" ? "#fff" : "#2b2f32",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            color: mode === "light" ? "#000" : "#fff",
            backgroundColor: mode === "light" ? "#fff" : "#2b2f32",
            border: `1px solid ${mode === "light" ? "#2b2f32" : "#fff"}`,
          }}
        >
          <h2 className="accordion-header">
            <button
              style={{
                color: mode === "light" ? "#000" : "#fff",
                backgroundColor: mode === "light" ? "#fff" : "#2b2f32",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      {/* <button
        type="button"
        onClick={toggleTheme}
        // className={`btn my-3 ${
        //   theme.color == "white" ? "btn-light" : "btn-dark"
        // }`}
        className={`btn btn-${mode == "dark" ? "light" : "dark"} my-3`}
      >
        {/* {theme.color == "white" ? "Light Mode" : "Dark mode" } */}
      {/* {mode == "dark" ? "Light Mode" : "Dark mode" } */}
      {/* </button> */}
    </div>
  );
}
