import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/forms/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {
    colors: {
        'primary': colors.indigo[900],
        'primary-contrast': colors.indigo[100],
        actions: {
            hover: colors.indigo[600],
            focus: colors.indigo[400],
            actived: colors.indigo[300],
            error: colors.red[400],
            disabled: colors.gray[400]
        },
        ...colors
    }
  },
  plugins: [],
}
export default config
