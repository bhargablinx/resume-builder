import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
                <p className="text-sm text-gray-500 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 bg-dark-red hover:bg-dark-red-hover text-white text-sm font-medium rounded-full shadow-md transition"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
