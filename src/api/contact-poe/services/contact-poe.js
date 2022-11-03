'use strict';

/**
 * contact-poe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-poe.contact-poe');
