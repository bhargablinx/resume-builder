export const ResumeControl = () => {
    return (
        <div className="flex-1">
            <div className="flex justify-between w-[300px] mx-auto">
                <button className="bg-light-red hover:bg-light-red-hover text-light px-3 p-1 rounded-lg text-[14px] cursor-pointer">
                    Clear Field
                </button>
                <button className="bg-green-500 hover:bg-green-600 px-3 p-1 rounded-lg text-[14px] cursor-pointer">
                    Save
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-light px-3 p-1 rounded-lg text-[14px] cursor-pointer">
                    Load Sample
                </button>
            </div>
        </div>
    );
};
