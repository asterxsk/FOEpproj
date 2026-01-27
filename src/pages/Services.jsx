import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { BookOpen, Box, Calendar, PenTool, Search } from 'lucide-react';

const SERVICES_DATA = [
    {
        id: 'tutoring',
        title: 'Peer Tutoring',
        description: 'Get help from seniors or peers who excelled in subjects you find tough.',
        icon: <BookOpen size={40} />,
        availableCount: 42,
    },
    {
        id: 'storage',
        title: 'Secure Lockers',
        description: 'Rent secure storage space for your books, gear, and projects.',
        icon: <Box size={40} />,
        availableCount: 15,
    },
    {
        id: 'projects',
        title: 'Project Assistance',
        description: 'Hire help for coding, circuit design, or model building.',
        icon: <PenTool size={40} />,
        availableCount: 28,
    },
    {
        id: 'events',
        title: 'Committee Events',
        description: 'Find committees recruiting new members or hosting workshops.',
        icon: <Calendar size={40} />,
        availableCount: 7,
    }
];

const ServiceCard = ({ service, index }) => {
    return (
        <div className="service-card group relative p-8 bg-surface border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col justify-end">
            <div className="absolute top-8 right-8 text-gray-700 group-hover:text-accent transition-colors duration-500">
                {service.icon}
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                </h3>
                <p className="text-gray-400 max-w-sm mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                </p>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {service.availableCount} Active Listed
                    </span>
                    <button className="px-6 py-2 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                        View
                    </button>
                </div>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

const Services = () => {
    useEffect(() => {
        anime({
            targets: '.service-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 1200,
            easing: 'easeOutExpo'
        });
    }, []);

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Our Ecosystem</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                        Campus Services
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl font-light">
                        Everything you need to survive and thrive on campus. From academic support to logistical solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                <div className="mt-20 p-12 bg-zinc-900 border border-white/5 relative overflow-hidden text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Need a custom service?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Post a request for tasks, tutoring, or help. The community is here to support you.
                    </p>
                    <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                        Post Request
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
