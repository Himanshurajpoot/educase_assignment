import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

function SignupForm() {
    const [userData, setUserData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "YES"
    })

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleRegister = () => {
        const { phoneNumber, email, password } = userData;
        let errObj = {};

        if (!email.includes("@")) {
            errObj.email = "Invalid Email Address!"
        } else if (phoneNumber && phoneNumber.length !== 10) {
            errObj.phoneNumber = "Phone Number must be 10 digits";
        } else if (password && password.length < 6) {
            errObj.password = "Password must be at least 6 characters";
        }

        setErrors(errObj);

        if (Object.keys(errObj).length === 0) {
            navigate("/signin")
        }
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <div className="h-full flex flex-col m-4 gap-2 justify-between pb-8">
            <div>
                <h1 className="font-semibold text-2xl mt-4 mb-6">
                    Create your
                    <br />PopX account
                </h1>
                <div className="flex flex-col gap-6">
                    <InputField label={"Full Name"} name={"fullName"} handleChange={handleChange} required />
                    <InputField label={"Phone number"} name={"phoneNumber"} handleChange={handleChange} required />
                    <InputField label={"Email address"} name={"email"} handleChange={handleChange} required />
                    <InputField label={"Password"} name={"password"} handleChange={handleChange} required />
                    <InputField label={"Company Name"} name={"companyName"} handleChange={handleChange} />
                </div>

                <div className="mt-2 mb-2">
                    <p className="text-xs">
                        Are you an Agency?<span className="text-red-500">*</span>
                    </p>
                    <div className="flex gap-4 mt-2 text-xs ">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="agency" value="Yes" className="w-5 h-5 accent-purple-600" onChange={handleChange} defaultChecked />Yes
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="agency" value="No" className="w-5 h-5 accent-purple-600" onChange={handleChange} /> No
                        </label>
                    </div>
                </div>


                {errors.phoneNumber && (
                    <p className="text-red-500 text-xs text-center">
                        {errors.phoneNumber}
                    </p>
                )}

                {errors.email && (
                    <p className="text-red-500 text-xs text-center">
                        {errors.email}
                    </p>
                )}

                {errors.password && (
                    <p className="text-red-500 text-xs text-center">
                        {errors.password}
                    </p>
                )}

            </div>

            <button
                className="bg-[#6C25FF] text-white p-2 rounded-md font-medium text-sm hover:disabled:bg-[#CEBAFB] pointer"
                onClick={handleRegister}
                disabled={!userData.fullName || !userData.phoneNumber || !userData.email || !userData.password}
            >Create Account</button>
        </div>
    )
}


export default SignupForm;