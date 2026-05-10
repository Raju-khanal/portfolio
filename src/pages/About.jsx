function About() {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 my-3">
            <div className="max-w-4xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                    About Me
                </h1>

                {/* Intro */}
                <p className="text-gray-300 text-lg leading-relaxed text-center mb-10">
                    Hello! I am <span className="text-cyan-400 font-semibold">Raju Khanal</span>.
                </p>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
                        <h2 className="text-xl font-semibold mb-2 text-cyan-400">Native Place</h2>
                        <p className="text-gray-300">Simara, Bara</p>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
                        <h2 className="text-xl font-semibold mb-2 text-cyan-400">Current Location</h2>
                        <p className="text-gray-300">Bharatpur, Chitwan</p>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
                        <h2 className="text-xl font-semibold mb-2 text-cyan-400">Education</h2>
                        <p className="text-gray-300">Studying IT (Information Technology) Advance CyberSecuirty Business Study </p>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
                        <h2 className="text-xl font-semibold mb-2 text-cyan-400">Contact</h2>
                        <p className="text-gray-300">9761599460</p>
                    </div>
                </div>

                {/* Footer Line */}
                <p className="text-center text-gray-500 mt-10">
                    Full Stack Developer
                </p>
            </div>
        </section>
    );
}

export default About;