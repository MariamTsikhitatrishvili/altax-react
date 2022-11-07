/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        markBold: 'markGeo-CapsBold',
        markLight: "markGeo-light",
        markSemiBold: "markGeo-SemiBold",
        markLightCaps: "markGeo-CapsLight",
      }
    },
  },
  plugins: [],
}
