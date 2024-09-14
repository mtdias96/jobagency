import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  ],

  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  webpackFinal: (config) => {
    config?.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }

}
export default config
