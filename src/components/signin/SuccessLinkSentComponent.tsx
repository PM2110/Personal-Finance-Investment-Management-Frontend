const SuccessLinkSentComponent = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b border-[#DFE1E7] border-2 from-gray-300 via-gray-200 to-white p-[15px] rounded-full">
                <div className="bg-white border-[#DFE1E7] border-2 p-[18px] flex items-center justify-center rounded-full w-24 h-24">
                    <img src="/Success.png" alt="Logo" className="w-auto h-auto" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[15px]">
                <div className="font-bold text-[20px]">
                    Success send a link
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    Open link at your email and reset your password and make a new password again.
                </div>
            </div>
        </div>
    );
}

export default SuccessLinkSentComponent;