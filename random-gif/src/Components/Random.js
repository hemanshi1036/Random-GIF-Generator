import React from 'react'
import Spinner from './Spinner'

const Random = () => {

    const [Loading, setLoading] = useState(false)
  return (
    <div className='w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className="text-3xl uppercase underline font-bold">
            Random GIF
        </h1>

        {Loading ? <Spinner/> : <img src={gif} width="450px"/>}

        <button>
            Generate
        </button>
    </div>
  )
}

export default Random
