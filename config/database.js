module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8nu2irrk0e2au6ajgg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ceffan'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '2x9wnolAQj5vknhC1K3NH6TZY7pqHCLa'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
