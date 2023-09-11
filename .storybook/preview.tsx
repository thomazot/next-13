import React from "react"
import type { Preview } from "@storybook/react";
import "../src/app/globals.css"
import { poppins } from "../src/lib/fonts"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={poppins.className}>
        <Story />
      </div>
    )
  ]
};

export default preview;
