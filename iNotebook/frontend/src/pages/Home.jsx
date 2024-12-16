import { useRef } from "react";
import Notes from "../components/Notes";

const Home = () => {
  const scrollableDivRef = useRef(null);
  
  const scrollToPosition = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = 100; // Set vertical scroll position
    }
  };

  return (
    <div className="w-full dark:bg-neutral-900 h-full" ref={scrollableDivRef}>
      <Notes/>
    </div>
  );
};

export default Home;
