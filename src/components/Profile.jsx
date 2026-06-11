import { FaCamera } from "react-icons/fa";

function Profile() {
    return (
        <div className="h-full flex flex-col ">
            <h2 className="font-medium text-lg bg-white p-4">Account Settings</h2>

            <div className="flex gap-4 items-start p-4">
                <div className="relative inline-block">
                    <img src="https://i.pravatar.cc/150" alt="profile" className="w-20 h-20 rounded-full" />
                    <span className="absolute text-white bg-[#6C25FF] rounded-full w-8 h-8 bottom-0 right-0 flex justify-center items-center">
                        <FaCamera size={16} /></span>
                </div>
                <div>
                    <p className="font-semibold">Marry Doe</p>
                    <p className="text-sm text-gray-600">
                        marry@gmail.com
                    </p>
                </div>
            </div>

            <p className="p-4 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aperiam
                blanditiis nulla quia dolores</p>

            <div className="border-t border-dashed border-gray-300"></div>

            <div className="mt-auto border-t border-dashed border-gray-300 pb-6"></div>
        </div>
    )
}

export default Profile;