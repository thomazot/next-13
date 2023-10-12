import React from "react"
import type { Preview } from "@storybook/react";
import "../src/app/globals.css"
import { poppins } from "../src/lib/fonts"

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
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
