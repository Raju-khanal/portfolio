function Hire() {
    return (
        <section className="min-h-screen  bg-black text-white relative overflow-hidden flex items-center justify-center my-3 px-6 py-20">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

            <div className="max-w-6xl w-full relative z-10 grid lg:grid-cols-2 gap-14 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <p className="uppercase tracking-[6px] text-cyan-400 text-sm md:text-base">
                        Hire Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Let's Build Your
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Next Big Project
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        I create modern, responsive, scalable, and high-performance full
                        stack web applications using React, Node.js, MongoDB, Express,
                        Tailwind CSS, and powerful backend systems.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:scale-105 transition duration-300 font-semibold shadow-lg shadow-cyan-500/30">
                            Start Project
                        </button>


                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-5 pt-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Mobile-friendly modern UI for all devices.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Optimized frontend and backend systems.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                React,React Native, Flutter, Python-Flask, Node.js, MongoDB, Express & Tailwind CSS,Three JS,Gsap,spline,.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Scalable architecture with maintainable code.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 md:p-12 shadow-2xl">
                    <h2 className="text-4xl font-bold mb-8">Hire Me</h2>

                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-gray-300">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-300">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-300">Project Type</label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300">
                                <option>Frontend Website</option>
                                <option>Full Stack Web App</option>
                                <option>E-Commerce Website</option>
                                <option>REALtime-web-APP</option>
                                <option>Dashboard</option>
                                <option>AI integrated WEB ?</option>
                                <option>Marketing-Fb-ads-Email-instagram-telegram-spam</option>
                                <option>SEO</option>
                                <option>HOSTING</option>
                                <option>Web-Security</option>
                                <option>OTHERS ???</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-300">Project Details</label>
                            <textarea
                                rows="5"
                                placeholder="Describe your project"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300 resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full py-4 rounded-2xl bg-cyan-500 hover:scale-[1.02] transition duration-300 text-lg font-semibold shadow-lg shadow-cyan-500/30">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Hire;
