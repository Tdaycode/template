/* eslint-disable func-style */
/* eslint-disable @hapi/hapi/scope-start */
'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');
const  Template = require('./template');

module.exports = class Field extends Schwifty.Model {

    static get tableName() {

        return 'fields';
    }
    static get joiSchema() {
        return Joi.object({
            id: Joi.string().required(),
            template_id: Joi.string().required(),
            label: Joi.string().required(),
            type: Joi.string().required(),
            placeholder: Joi.string(),
            required: Joi.boolean().required()
        });
    }
    static get relationMappings() {
        return {
            template: {
                relation: Schwifty.Model.BelongsToOneRelation,
                modelClass: Template,
                join: {
                    from: 'fields.template_id',
                    to: 'templates.id'
                }
            }
        };
    }
};

// function createFieldModel() {
//     return Field;
// }

// module.exports = {
//     createFieldModel
// };
