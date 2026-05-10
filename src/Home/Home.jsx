import { Link } from "react-router"
export default function Home() {
    return (
        <section className="min-h-screen bg-black text-white overflow-hidden relative flex items-center my-2">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8">
                    <p className="text-cyan-400 uppercase tracking-[6px] text-sm md:text-base">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Creating Modern
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Web Experiences
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        I build responsive and scalable full stack applications using React,
                        Node.js, MongoDB, Express, Tailwind CSS, and modern UI animations.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <Link to="/hire"><button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:scale-105 transition duration-300 font-semibold shadow-lg shadow-cyan-500/30">
                            Hire Me
                        </button>
                        </Link>


                    </div>
                </div>

                {/* Right Side Animated Boxes */}
                <div className="relative flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-3 transition duration-500 shadow-2xl">
                            <h2 className="text-5xl font-bold text-cyan-400">5+</h2>
                            <p className="text-gray-300 mt-3">Years Experience</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:translate-y-3 transition duration-500 shadow-2xl mt-10">
                            <h2 className="text-5xl font-bold text-purple-400">50+</h2>
                            <p className="text-gray-300 mt-3">Projects Completed</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-3 transition duration-500 shadow-2xl">
                            <h2 className="text-5xl font-bold text-pink-400">20+</h2>
                            <p className="text-gray-300 mt-3">Happy Clients</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:translate-y-3 transition duration-500 shadow-2xl mt-10">
                            <h2 className="text-5xl font-bold text-green-400">100%</h2>
                            <p className="text-gray-300 mt-3">Responsive Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
