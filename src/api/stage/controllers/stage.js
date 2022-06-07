'use strict';

/**
 *  stage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::stage.stage');
module.exports = createCoreController('api::stage.stage', ({ strapi }) => ({

  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::stage.stage').findOne({
      where: { slug: id }
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
