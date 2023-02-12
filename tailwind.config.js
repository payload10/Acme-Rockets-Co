/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    
    extend: {
      screens:{
        'widescreen' : {'raw' : '(min-aspect-ratio: 3/2)'}, // thrice width than tall
        'tallscreen' : {'raw' : '(max-aspect-ratio: 65/100)'} // twice tall than width
      },

      keyframes:{ 
        'showMenu':{
            '0%':{transform:'scaleY(0)'},
            '100%':{transform:'scaleY(1)'}
        }
      },

      animation:{
        'showMenu':'showMenu 0.5s ease-in-out forwards'
      }

    },
  },
  plugins: [],
}
