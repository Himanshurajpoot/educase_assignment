import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import Profile from "./components/Profile";


function App() {
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="h-[650px] w-[330px] bg-[#F7F8F9] border">
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/signup"} element={<SignupForm />} />
                        <Route path={"/signin"} element={<SigninForm />} />
                        <Route path={"/profile"} element={<Profile />} />
                    </Routes>

                </div>
            </div>
        </>
    )
}

export default App;