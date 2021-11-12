module.exports = {
  apps: [
    {
      name: "besweb-nextjs",
      script: "npm",
      args: "run execute",
      max_memory_restart: "300M",
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
