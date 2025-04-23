// import React  from 'react'
// import Spinner from './Spinner'
// import { useEffect, useState } from 'react';
// import axios from 'axios';





// const Random = () => {

//     const [Loading, setLoading] = useState(false)

//     const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// async function fetchData() {
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const Output = await axios.get(url);
//     console.log(Output);
      
// }



// if (!API_KEY) {
//   console.error("API Key not found. Ensure the .env file is set up correctly.");
// } else {
//   console.log("API Key:", API_KEY);
// }


// useEffect(() => {
//        fetchData();
//      }, []);


//   return (
//     <div className='w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
//         <h1 className="text-3xl uppercase underline font-bold">
//             Random GIF
//         </h1>

//         {/* {Loading ? <Spinner/> : <img src={gif} width="450px"/>} */}

//         <button>
//             Generate
//         </button>
//     </div>
//   )
// }

// export default Random
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      
      <div className="relative w-[450px] h-[250px]">
      {loading ? <Spinner /> : <img src={gif} width="450" height="250"
      className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg"/>}
        </div>
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 mt-10 mb-0 border-2 rounded-lg font-bold" >
        Generate
      </button>
    </div>
  );
};

export default Random;
