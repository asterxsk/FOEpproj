/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                surface: '#121212',
                primary: '#ffffff',
                secondary: '#9c9c9c',
                accent: '#3b82f6', // Subtle blue accent for interactive elements
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // We'll need to import Inter
                display: ['Playfair Display', 'serif'], // Or similar for that "Synchronized" feel
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
