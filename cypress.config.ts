import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser, args) => {
        console.log('browser', browser)
        if(browser.family === 'webkit') {
            console.log('adding dark mode browser flags')
            args.args.push('--force-dark-mode=true')
        }
      })
    },
  },

  component: {
    setupNodeEvents(on, config) {
        on('before:browser:launch', (browser, args) => {
            console.log('browser ----------->', browser)
            if(browser.family === 'webkit') {
                console.log('adding dark mode browser flags')
                args.args.push('--force-dark-mode=true')
            }
        })
    },
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
