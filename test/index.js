/* eslint-disable @hapi/hapi/scope-start */
'use strict';

// Load modules

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Server = require('../server');
const Package = require('../package.json');

const { describe, it, before } = exports.lab = Lab.script();
const { expect } = Code;

describe('Deployment', () => {


    it('registers the main plugin.', async () => {

        const server = await Server.deployment();

        expect(server.registrations[Package.name]).to.exist();
    });

    let server;

    before(async () => {
        server = await Server.deployment();
    });

    it('returns a 404 if template not found', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/templates/non-existent-id'
        });
        expect(res.statusCode).to.equal(404);

    });

    it('returns the expected template if found', async () => {
        const expectedTemplate = {
            'id': 'example-template',
            'title': 'Template di esempio',
            'description': 'Questo è un template di esempio',
            'fields': [
                {
                    'id': 'first_name',
                    'label': 'Nome',
                    'type': 'text',
                    'placeholder': 'Inserisci il tuo nome',
                    'required': true
                },
                {
                    'id': 'last_name',
                    'label': 'Cognome',
                    'type': 'text',
                    'placeholder': 'Inserisci il tuo cognome',
                    'required': true
                },
                {
                    'id': 'email',
                    'label': 'Email',
                    'type': 'email',
                    'placeholder': 'Inserisci la tua email',
                    'required': true
                },
                {
                    'id': 'submit',
                    'label': 'Invia',
                    'type': 'submit',
                    'placeholder': null,
                    'required': false
                }
            ]
        };
        const res = await server.inject({
            method: 'get',
            url: '/templates/example-template'
        });
        expect(res.statusCode).to.equal(200);
        expect(res.result).to.equal(expectedTemplate);
    });

});
