/** @type {import('tailwindcss').Config} */ 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        runningText: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'running-text': 'runningText 20s linear infinite',
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif']
      }
    }
  },
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      }
    }
  },
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Comic Neue', 'cursive']
      },
    },
  },

  plugins: [],
};