import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        anime({
            targets: navRef.current,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 200
        });
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-background/50 border-b border-white/5">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white">
                CAMPUS NODES
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
                {['Market', 'Services', 'Connections'].map((item) => (
                    <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
                <button className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                    Join Now
                </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={toggleMenu} className="md:hidden text-white">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full heightd-screen bg-background border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
                    {['Market', 'Services', 'Connections'].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className="text-xl font-medium text-gray-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
