/* eslint-env node */

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
  ],
  staticDirs: ['../public'],
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
}
