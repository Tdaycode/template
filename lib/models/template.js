/* eslint-disable @hapi/hapi/scope-start */
'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class Template extends Schwifty.Model {
  static tableName = 'templates';

  static get joiSchema() {
      return Joi.object({
          id: Joi.string().required(),
          title: Joi.string().required(),
          description: Joi.string()
      });
  }
};
