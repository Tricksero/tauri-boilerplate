// tailwind.config.js
module.exports = {
  content: ["./src/templates/**/*.html", "!**/venv/**", "!**/node_modules/**"],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'custom-blue': '#007bff',
        'custom-red': '#dc3545',
        // Add more custom colors as needed
      },
    },
  },
  // Other Tailwind CSS configuration options...
};