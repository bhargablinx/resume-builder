import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                            Build a Professional Resume <br /> in Just a Few
                            Clicks
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-xl">
                            Our intuitive builder helps you craft standout
                            resumes effortlessly. Choose from modern templates
                            and export as PDF.
                        </p>
                        <Link
                            to="/templates"
                            className="mt-6 inline-block bg-dark-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <img
                            src="/undraw_chat-with-ai_ir62.svg"
                            alt="Resume Builder Illustration"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FeatureCard
                        emoji="📄"
                        title="Professional Templates"
                        desc="Hand-crafted and structured templates that hiring managers love."
                    />
                    <FeatureCard
                        emoji="⚡"
                        title="Live Preview"
                        desc="See your changes in real time while editing your resume."
                    />
                    <FeatureCard
                        emoji="🔗"
                        title="Easy Export"
                        desc="Download your resume as PDF or share a public link."
                    />
                </section>

                {/* Testimonials */}
                <section className="bg-white py-14 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800">
                            What Users Say
                        </h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <TestimonialCard
                                name="Anjali S."
                                quote="The easiest and cleanest resume builder I’ve ever used. Got 3 interviews within a week!"
                            />
                            <TestimonialCard
                                name="Rahul M."
                                quote="Loved the live preview and how professional the templates look. Highly recommend it!"
                            />
                            <TestimonialCard
                                name="Divya K."
                                quote="Simple to use, elegant results. Better than Canva or MS Word for resumes!"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 text-center text-sm py-6 border-t border-gray-200">
                <p className="text-gray-600">
                    Made by Bhargab •{" "}
                    <a
                        href="https://github.com/BhargabLinx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-red hover:underline"
                    >
                        GitHub
                    </a>{" "}
                    •{" "}
                    <a
                        href="mailto:bhargab@example.com"
                        className="text-dark-red hover:underline"
                    >
                        Contact
                    </a>
                </p>
            </footer>
        </div>
    );
}

function FeatureCard({ emoji, title, desc }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition text-left">
            <div className="text-3xl mb-3">{emoji}</div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}

function TestimonialCard({ name, quote }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg border shadow-sm">
            <p className="text-sm italic text-gray-700">"{quote}"</p>
            <div className="mt-3 font-semibold text-gray-800">– {name}</div>
        </div>
    );
}
