/* eslint-disable @hapi/hapi/scope-start */
/* eslint-disable indent */
'use strict';

exports.up = async (knex) => {
    const hasTable = await knex.schema.hasTable('templates');
    if (!hasTable) {
      await knex.schema.createTable('templates', (table) => {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
      });
    }
  };

  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('templates');
  };
