export const ResumeControl = () => {
    return (
        <div className="flex-1 flex flex-col items-center gap-[30px]">
            <div className="flex justify-between w-[300px]">
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
            <div className="bg-white w-full max-w-[500px] p-6 pb-8 rounded-xl border border-gray-300 shadow-sm space-y-6">
                <div className="text-2xl font-bold text-dark-red">
                    Personal Details
                </div>

                {/* Full Name */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="full-name"
                        className="text-sm font-medium text-gray-700"
                    >
                        Full Name
                    </label>
                    <input
                        id="full-name"
                        type="text"
                        placeholder="Enter full name..."
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter email address..."
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                    >
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number..."
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                    />
                </div>

                {/* Address */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="address"
                        className="text-sm font-medium text-gray-700"
                    >
                        Address
                    </label>
                    <input
                        id="address"
                        placeholder="Enter your address..."
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all resize-none"
                    />
                </div>
            </div>
        </div>
    );
};
