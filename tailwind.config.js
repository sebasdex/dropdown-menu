/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': 'Epilogue'
    },
    extend: {
      backgroundImage: {
        'up': "url('/images/icon-arrow-up.svg')",
        'down': "url('/images/icon-arrow-down.svg')",
        'list': "url('/images/icon-todo.svg')",
        'calendar': "url('/images/icon-calendar.svg')",
        'reminders': "url('/images/icon-reminders.svg')",
        'planning': "url('/images/icon-planning.svg')", 
      },
    },
  },
  plugins: [],
}