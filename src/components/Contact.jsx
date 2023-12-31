import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-600 flex justify-center items-center p-4'>
        <form method="POST" action='https://getform.io/f/ed820158-6096-41b2-891e-8ceae459967e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#A3C0C4]'>Contact</p>
                <p className='text-gray-300 py-4'>Sumbit form below or send me an email at samarkaranch@gmail.com</p>
            </div>
            <input className="p-2" type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2' type='email' placeholder='Email' name='email'/>
            <textarea className="p-2" name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#A3C0C4] hover:border-[#A3C0C4] px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
        </form>
    </div>
  )
}

export default Contact