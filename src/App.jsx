import React from 'react';
import Button from './components/Elements/Button';


function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
        <div className='flex gap-2'>
            <Button variant="bg-green-700">Login</Button>
            <Button variant="bg-sky-700">Register</Button>
            <Button>Logout</Button>
            <Button variant="bg-red-700"></Button>
        </div>
    </div>
)
}

export default App
