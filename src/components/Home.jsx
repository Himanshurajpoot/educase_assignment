import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="h-full flex justify-end flex-col p-4 gap-2">
            <h2 className="font-semibold text-2xl">Welcome to PopX</h2>
            <p className="text-[#74777B] pb-2">Lorem ipsum dolor, sit <br /> amet consectetur adipisicing
                eos.</p>
            <Link  className="bg-[#6C25FF] text-white p-2 rounded-md font-medium text-sm text-center" to={"/signup"}>Create Account</Link>
            <Link className="bg-[#CEBAFB] p-2 rounded-md font-medium text-sm text-center" to={"/signin"}>Already Registered? Login</Link>
        </div>
    )
}

export default Home;