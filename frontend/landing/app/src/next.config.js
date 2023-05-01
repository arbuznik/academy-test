const withPlugins = require('next-compose-plugins')

const nextConfig = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
    outputStandalone: true,
  },
}

module.exports = withPlugins([], nextConfig)
