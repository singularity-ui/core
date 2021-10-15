/* eslint-env node */

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
}
