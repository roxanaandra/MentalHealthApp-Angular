/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/main-page/main-page.component.html",
    "./src/app/main-page/main-page.component.ts",
    "./src/app/main-page/main-page.component.css",
    "./src/app/app.component.html",
    "./src/app/app.component.ts",
    "./src/app/journal/journal.component.html",
    "./src/app/jorunal-details/journal-details.component.html",
    "./src/app/journal-details/journal-details.component.ts",
    "./src/app/mood-tracker/mood-tracker.component.html",
    "./src/app/campaign/campaign.component.html",
    "./src/app/quiz/quiz.component.html",
    "./src/app/header/header.component.html",
    "./src/app/media/media.component.html",
    "./src/app/media-details/media-details.component.html",
  ],
  theme: {
    extend: {
      screens: {
        'cs': '420px',
        'rs': '375px',
        'cl': '360px',
        'jv': '344px',
        'xl': '1309px',

      }
    },
  },
  plugins: [],
}

