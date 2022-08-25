/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary().notNullable();
    table.string("title", 255).notNullable();
    table.string("img", 255).notNullable();
    table.string("description", 255).notNullable();
    table.integer("price").notNullable();
    table.integer("stock").notNullable();
    table.integer("code").notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
