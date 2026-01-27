import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // Split text logic could go here or we just animate the block
        const timeline = anime.timeline({
            easing: 'easeOutExpo',
        });

        timeline
            .add({
                targets: '.hero-char',
                translateY: [100, 0],
                opacity: [0, 1],
                delay: anime.stagger(50),
                duration: 1200,
            })
            .add({
                targets: subRef.current,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
            }, '-=800')
            .add({
                targets: ctaRef.current,
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 800,
            }, '-=600');
    }, []);

    // Helper to wrap characters for animation
    const wrapChars = (text) => {
        return text.split('').map((char, i) => (
            <span key={i} className="hero-char inline-block whitespace-pre">
                {char}
            </span>
        ));
    };

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-background">
            {/* Background Abstract Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 ref={titleRef} className="text-6xl md:text-9xl font-bold font-display tracking-tighter text-white mb-6 overflow-hidden">
                    {wrapChars('CAMPUS NODES')}
                </h1>

                <p ref={subRef} className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light tracking-wide mb-12 opacity-0">
                    The decentralized marketplace for everything on campus.
                    <br />
                    Trade gears, find mentors, build your network.
                </p>

                <div ref={ctaRef} className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-0">
                    <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Trading <ArrowRight size={18} />
                        </span>
                        <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                    </button>

                    <button className="group px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-white transition-colors duration-300">
                        Explore Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
