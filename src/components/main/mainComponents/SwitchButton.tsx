interface SwitchButtonProps {
    isOn: boolean;
    handleToggle: () => void;
}

const SwitchButtonComponent: React.FC<SwitchButtonProps> = ({ isOn, handleToggle }) => {
    return (
        <button
            onClick={handleToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${isOn ? "bg-black" : "bg-gray-400"}`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""}`}
            ></div>
        </button>
    );
};

export default SwitchButtonComponent;