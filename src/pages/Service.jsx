function Service() {
    return (
        <section className="min-h-screen flex items-center justify-center py-3 bg-black my-3 text-white relative overflow-hidden px-6">
            {/* Animated Pink Background Blobs */}
            <div className="absolute w-80 h-80 bg-pink-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-rose-500/30 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

            {/* Content Box */}
            <div className="relative z-10 max-w-3xl text-center bg-white/5 border border-white/10 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    My <span className="text-pink-400">Services</span>
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    I provide modern full stack development and tech solutions including frontend,
                    backend, DevOps, cybersecurity, AI integration, Python Flask APIs, and Android app development.
                </p>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-pink-400 transition duration-300">
                        <h2 className="text-xl font-semibold text-pink-400 mb-2">Frontend Development</h2>
                        <p className="text-gray-400 text-sm">Modern responsive UI with React & Tailwind.</p>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-pink-400 transition duration-300">
                        <h2 className="text-xl font-semibold text-pink-400 mb-2">Backend Development</h2>
                        <p className="text-gray-400 text-sm">Scalable APIs using Node.js, Express & Flask.</p>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-pink-400 transition duration-300">
                        <h2 className="text-xl font-semibold text-pink-400 mb-2">DevOps & Cybersecurity</h2>
                        <p className="text-gray-400 text-sm">Deployment, CI/CD pipelines & security best practices.</p>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-pink-400 transition duration-300">
                        <h2 className="text-xl font-semibold text-pink-400 mb-2">AI Integration</h2>
                        <p className="text-gray-400 text-sm">Smart AI-powered features in modern web apps.</p>
                    </div>

                    <div className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-pink-400 transition duration-300 md:col-span-2">
                        <h2 className="text-xl font-semibold text-pink-400 mb-2">Android App Development</h2>
                        <p className="text-gray-400 text-sm">Cross-platform mobile apps with modern UI and performance optimization.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;