import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";
import Spinner from "./Components/Spinner";



function App() {
  return (

    <div className="background w-full h-screen flex flex-col relative items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg text-center font-bold text-4xl uppercase w-11/12 mt-[40px] ml-[15px] py-2 px-10">
        Random GIF Generator
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>

    </div>
  );
   
}

export default App;
