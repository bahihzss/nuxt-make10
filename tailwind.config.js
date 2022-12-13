/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/decorators/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
      fontFamily: {
        khand: ['Khand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
