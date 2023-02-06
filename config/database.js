module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'dpg-cf8nu2irrk0e2au6ajgg-a.oregon-postgres.render.com'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'ceffan'),
      user: env('PGUSER', 'root'),
      password: env('PGPASSWORD', '2x9wnolAQj5vknhC1K3NH6TZY7pqHCLa'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
