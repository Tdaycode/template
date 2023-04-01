'use strict';

const TemplateService = require('../services/template');

module.exports = {
    method: 'GET',
    path: '/templates/{id}',
    options: {
        description: 'Get template by ID',
        tags: ['api']
    },
    // eslint-disable-next-line @hapi/hapi/scope-start
    handler: async (request, h) => {

        const { id } = request.params;
        const templateService = new TemplateService();

        try {
            const template = await templateService.getTemplateById(id);
            return template;
        }
        catch (err) {
            throw new Error(`Failed to get template by ID: ${err}`);
        }
    }
};
