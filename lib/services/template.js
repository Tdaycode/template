/* eslint-disable @hapi/hapi/scope-start */
'use strict';

const Schmervice = require('@hapipal/schmervice');
const Boom = require('@hapi/boom');
const Knex = require('knex');


const knex = Knex({
    client: 'pg',
    connection: { user: process.env.DB_USER,
        host: process.env.BD_HOST,
        database: 'template',
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT }

});
module.exports = class TemplateService extends Schmervice.Service {

    /**
     * @description A method that returns form templates base on ID params
     * @param {*} templateId
     * @returns Object
     */
    async getTemplateById(templateId) {
        try {
            const template = await knex('templates')
                .select('id', 'title', 'description')
                .where('id', templateId)
                .first();
            if (template === undefined) {
                return Boom.notFound('Template not found');
            }

            const fields = await knex('fields')
                .select('id', 'label', 'type', 'placeholder', 'required')
                .where('template_id', templateId);

            const result = {
                id: template.id,
                title: template.title,
                description: template.description,
                fields: fields.map((field) => ({
                    id: field.id,
                    label: field.label,
                    type: field.type,
                    placeholder: field.placeholder,
                    required: field.required
                }))
            };
            return result;
        }
        catch (error) {
            const message = error.statusCode === 404 ? error.message : 'Something went wrong. Please try again later.';
            return Boom.internal(message);
        }
    }



};
