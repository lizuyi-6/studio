/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                highlight: '#0066FF',
            },
            animation: {
                flow: 'flow 2s linear infinite',
            },
            keyframes: {
                flow: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(200%)' },
                }
            }
        },
    },
    plugins: [],
}
