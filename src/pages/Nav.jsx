import { useState } from "react"
import { Link } from "react-router"
function Nav() {
    const [tog, setTog] = useState(false);
    return (
        <>
            <div className="shadow-2xl w-screen h-28 p-10">
                <div className="flex justify-between">
                    <div><h2 className="h-4 w-4 font-bold text-2xl text-cyan-500 font-serif underline">Raju.</h2></div>
                    <ul className="hidden md:flex gap-10 text-3xl">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/about">About</Link></li>

                    </ul>
                    <button className="md:hidden text-4xl -translate-y-3.5" onClick={() => setTog(!tog)}>☰</button>

                </div>
                {
                    tog && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 bg-black/60 z-[1999]"
                                onClick={() => setTog(false)}
                            />

                            {/* Menu */}
                            <div className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-lg z-[2000] p-6 shadow-2xl animate-[slideIn_0.3s_ease-out]">
                                <ul className="mt-10 text-2xl text-amber-300 space-y-6">
                                    <li className="hover:translate-x-3 transition duration-300">
                                        <Link onClick={() => setTog(false)} to="/">Home</Link>
                                    </li>

                                    <li className="hover:translate-x-3 transition duration-300">
                                        <Link onClick={() => setTog(false)} to="/service">Service</Link>
                                    </li>

                                    <li className="hover:translate-x-3 transition duration-300">
                                        <Link onClick={() => setTog(false)} to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )
                }
            </div >
        </>
    )
}
export default Nav;