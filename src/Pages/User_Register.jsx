import React from 'react'

const User_Register = () => {
  return (
    <>
    {/*Top Div */}
    <div className='flex flex-col items-center mt-10 pb-4 bg-slate-200 shadow-xl h-max w-2/5 border-solid border-2 border-slate-300'>
        <h1 className='text-sky-800 font-semibold text-5xl mt-4'>Register</h1>
        <form className='w-3/4 flex flex-col'>
            <label htmlFor="" className='my-2 italic text-sky-900 text-lg'>Name: <input className='w-full block mt-2 p-2 shadow-xl h-10 outline-none' type="text" placeholder="Enter your name"/></label>
            <label htmlFor="" className='my-2 italic text-sky-900 text-lg'>Username: <input type="text" placeholder="Enter your username" className='block w-full mt-2 p-2 shadow-xl h-10 outline-none' /></label>
            <label htmlFor="" className='my-2 italic text-sky-900 text-lg'>Email: <input type="email" placeholder="Enter your email" className='w-full block mt-2 p-2 shadow-xl h-10 outline-none'/></label>
            <label htmlFor="" className='my-2 italic text-sky-900 text-lg'>Password: <input type="password" placeholder="Enter your password" className='w-full block mt-2 p-2 shadow-xl h-10 outline-none'/></label>
            <label htmlFor="" className='my-2 italic text-sky-900 text-lg'>Confirm Password: <input type="password" pattern='[a-z0-5]{8,}' placeholder="RE-Enter your password" className='w-full block mt-2 h-10 p-2 shadow-xl outline-none'/></label>
            <input type="submit" className='w-3/4 place-self-center text-xl bg-blue-400 border-blue-500 text-white h-10 mt-2 cursor-pointer hover:bg-blue-300 hover:text-slate-100' value="Register" />
        </form>
        </div>
    </>
  )
}

export default User_Register