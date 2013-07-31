module.exports = {
  server: {
    options: {
      port: process.env.port || 8000,
      hostname: '0.0.0.0',
      base: 'dist/dev/<%= pkg.name %>/test'
    }
  }
};
