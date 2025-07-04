import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changePersonalInfo } from "../slices/resumeSlice";

export default function PersonalSection({ personalInfo }) {
    const [name, setName] = useState(personalInfo.name || "");
    const [address, setAddress] = useState(personalInfo.address || "");
    const [email, setEmail] = useState(personalInfo.email || "");
    const [github, setGithub] = useState(personalInfo.github || "");
    const [linkedIn, setlinkedIn] = useState(personalInfo.linkedIn || "");

    const dispatch = useDispatch();

    useEffect(() => {
        setName(personalInfo.name); // Update local state when Redux skill updates
        setAddress(personalInfo.address); // Update local state when Redux skill updates
        setEmail(personalInfo.email); // Update local state when Redux skill updates
        setGithub(personalInfo.github); // Update local state when Redux skill updates
        setlinkedIn(personalInfo.linkedIn); // Update local state when Redux skill updates
    }, [personalInfo]);

    useEffect(() => {
        if (name || address || email || github || linkedIn) {
            dispatch(
                changePersonalInfo({ name, address, email, github, linkedIn })
            );
        }
    }, [name, address, email, github, linkedIn, dispatch]);

    return (
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="full-name"
                    type="text"
                    placeholder="Enter full name..."
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    placeholder="Enter your address..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all resize-none"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="Enter email address..."
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>

            {/* GitHub link */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="github"
                    className="text-sm font-medium text-gray-700"
                >
                    GitHub Link
                </label>
                <input
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    id="github"
                    type="url"
                    placeholder="https://github.com/username"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>

            {/* LinkedIn link */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="linkedin"
                    className="text-sm font-medium text-gray-700"
                >
                    LinkedIn Link
                </label>
                <input
                    value={linkedIn}
                    onChange={(e) => setlinkedIn(e.target.value)}
                    id="linkedin"
                    type="url"
                    placeholder="https://www.linkedin.com/in/username"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent transition-all"
                />
            </div>
        </div>
    );
}
