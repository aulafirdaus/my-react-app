import React from 'react';


const Button = (props) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">{props.children}</button>
    )
}
function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
        <div className='flex gap-2'>
            <Button variant="bg-green-700">Login</Button>
            <Button variant="bg-sky-700">Register</Button>
            <Button variant="bg-black">Logout</Button>
            <Button variant="bg-red-700">Delete Account</Button>
        </div>
    </div>
)
}

export default App
