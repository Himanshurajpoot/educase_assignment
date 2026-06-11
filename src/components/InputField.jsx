function InputField({ label,name, handleChange, required }) {
    return (
        <div className="relative">
            <label className="absolute text-xs bg-[#F7F8F9] bottom-8 left-3 text-[#6C25FF] pl-1">
                {label}
                {required && <span className="text-red-500 pr-2">*</span>}
            </label>
            <input
                type="text"
                placeholder={`Enter ${label}`}
                name={name}
                onChange={handleChange}
                className="p-2 w-full outline-none border border-[#CBCBCB] text-sm rounded-lg bg-[#F7F8F9] text-black placeholder:text-sm"
            />
        </div>
    )
}

export default InputField;