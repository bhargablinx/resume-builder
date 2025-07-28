import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full text-center py-20">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                    Build Your Resume in Minutes
                </h1>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Choose a professional template, customize it with your
                    information, and generate a resume that stands out to
                    employers.
                </p>

                <div className="mt-8">
                    <Link
                        to="/templates"
                        className="inline-block bg-dark-red hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition"
                    >
                        Get Started
                    </Link>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FeatureCard
                        title="Professional Templates"
                        desc="Hand-crafted templates with customizable sections for every career stage."
                        emoji="📄"
                    />
                    <FeatureCard
                        title="Real-time Preview"
                        desc="See changes instantly as you fill out your information."
                        emoji="⚡"
                    />
                    <FeatureCard
                        title="Easy to Share"
                        desc="Download your resume as PDF or share it via link."
                        emoji="🔗"
                    />
                </div>
            </div>
        </main>
    );
}

function FeatureCard({ title, desc, emoji }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-left border hover:shadow-lg transition">
            <div className="text-3xl mb-3">{emoji}</div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}
