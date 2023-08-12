/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: '#F2EC7E',
        'custom-black': '#24282C',
        'custom-white': '#fbfbf8',
        'custom-white-2': '#EAE9E2',
        'custom-green': '#D3F36A',
        'custom-blue': '#CDDFE3',
      },
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
      },
    },
  },
  plugins: [],
};
