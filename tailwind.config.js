/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    presets: [require("@carrot-kpi/ui/tailwind-preset")],
    theme: {
        extend: {
            animation: {
                "marquee-slow": "marquee 207s linear infinite",
                "marquee-fast": "marquee 138s linear infinite",
                "text-fade-in": "text-fade-in 0.4s ease-out forwards",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                "text-fade-in": {
                    "0%": {
                        opacity: 0,
                    },
                    "20%": {
                        opacity: 0,
                    },
                    "60%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
            },
        },
    },
};
