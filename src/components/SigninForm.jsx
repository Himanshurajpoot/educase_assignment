import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import InputField from "./InputField";


function SigninForm() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleLogin = () => {
        const { email, password } = userInfo
        let errorObj = {}

        if (!email) {
            errorObj.email = "Email is required!"
        } else if (email && !email.includes('@')) {
            errorObj.email = "Invalid Email Address!"
        }
        else if (!password) {
            errorObj.password = "Password Is Required!"
        } else if (password && password.length < 6) {
            errorObj.password = "Password must be at least 6 characters!"
        }
        setErrors(errorObj);

        if (Object.keys(errorObj).length === 0) {
            navigate("/profile")
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }


    return (
        <div className="h-full flex flex-col m-4 gap-2">

            <h1 className="font-semibold text-2xl mt-4 mb-2">
                Signin to your
                <br />PopX account
            </h1>

            <p className="text-base text-[#74777B] mb-2">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,
            </p>
            <div className="flex flex-col gap-6">
                <InputField label={"Email address"} name="email" handleChange={handleChange} />

                <InputField label={"Password"} name="password" handleChange={handleChange} />
                {errors.password && (
                    <p className="text-red-500 text-xs text-center">
                        {errors.password}
                    </p>
                )}

                {errors.email && (
                    <p className="text-red-500 text-xs text-center">
                        {errors.email}
                    </p>
                )}
                <button
                    className="bg-[#CBCBCB] text-white p-2 rounded-md font-medium text-sm mb-4 hover:bg-[#6C25FF] hover:disabled:bg-[#CEBAFB] pointer"
                    disabled={!userInfo.email || !userInfo.password}
                    onClick={handleLogin}
                >Login
                </button>
            </div>


        </div>
    )
}


export default SigninForm;