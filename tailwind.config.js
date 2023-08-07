/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "main" :"#BF2051",
        "secondary": "#E4B55C",
        "gray-20": "#F8F4EB",

      }
      ,
      fontFamily : {
        popping : ['Poppins', 'sans-serif'] ,
        forum : ['Forum','cursive']
      }
      ,content : {
        hero : "url(./assets/hero.png)",
        slide1 : "url(./assets/slide1.png)",
        slide2 : "url(./assets/slide2.png)",
        slide3 : "url(./assets/slide3.png)",
        sus : "url(./assets/sus.png)",
        section : "url(./assets/slide1.png)",
        map1 : "url(./assets/map1.png)",
        map2 : "url(./assets/map2.png)",
        logo : "url(./assets/logo.png)",
        contact : "url(./assets/contact.png)",
      }
    },
  },
  plugins: [],
}

