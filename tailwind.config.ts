import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/forms/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {},
  plugins: [],
}
export default config
