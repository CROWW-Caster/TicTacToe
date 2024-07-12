import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ttBody.jsx'
import'./index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='sm:bg-gray-300 flex max-sm:px-0.5 mx-auto w-full max-sm:my-auto h-full lg:w-[900px] px-12 py-8 rounded-lg'>
            <div className='m-auto '>
                <div className='flex'>
                <h1 className='text-6xl mx-auto max-sm:text-5xl font-mono font-[900] text-indigo-950'>Tic Tac Toe</h1>
                </div>
                <App />
            </div>
        </div>
    </React.StrictMode>
)