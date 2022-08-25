const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './db/ecommerce.sqlite'
  },
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations'
  },
  seeds: {
    tableName: 'knex_seeds',
    directory: './seeds',
  }
}

module.exports = knexConfig;
