module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/f-antonelli/backend-exercises',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    {
      assets: [{ path: './build.zip', label: 'Build' }],
    },
  ],
};
