export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-6 py-16">
            {/* Hero */}
            <div className="max-w-3xl text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About ResumeCraft</h1>
                <p className="text-lg text-gray-600">
                    ResumeCraft is a sleek, easy-to-use resume builder designed
                    for developers and professionals who want to create
                    stunning, ATS-friendly resumes in minutes.
                </p>
            </div>

            {/* Mission */}
            <section className="max-w-4xl bg-white p-8 rounded-2xl shadow-md mb-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    Our goal is to help job seekers make a lasting impression
                    with powerful, customized resumes that highlight their
                    strengths. We believe that great design and simplicity
                    should go hand-in-hand.
                </p>
            </section>

            {/* Why it Exists */}
            <section className="max-w-4xl bg-white p-8 rounded-2xl shadow-md mb-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    🛠️ Why We Built It
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    We’ve all struggled with clunky resume templates and
                    time-consuming formatting. ResumeCraft was born from that
                    frustration — built by devs for devs and job seekers who
                    just want a simple, elegant solution.
                </p>
            </section>

            {/* Meet the Maker */}
            <section className="max-w-4xl bg-white p-8 rounded-2xl shadow-md mb-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    👨‍💻 Meet the Maker
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Hey, I’m Bhargab — a developer passionate about clean UI,
                    job-search tools, and building cool stuff with React. I
                    wanted to solve a real pain point, and ResumeCraft is my
                    contribution to that.
                </p>
                <div className="flex justify-center gap-4 text-xl text-dark-red">
                    <a
                        href="https://github.com/bhargablinx"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bhargabb/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <i class="fas fa-user-tie"></i>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 text-sm text-gray-500">
                © {new Date().getFullYear()} ResumeCraft — Built by Bhargab.
            </footer>
        </div>
    );
}
