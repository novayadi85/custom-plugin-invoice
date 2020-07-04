import generateInvoiceJob from "./jobs/generate-invoice.js";

/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.app The ReactionAPI instance
 * @param {Object} context.collections A map of MongoDB collections
 * @returns {undefined}
 */
export default async function invoiceGeneratorStartup(context) {
  const { app } = context;
  // Setup sitemap generation recurring job
  await generateInvoiceJob(context);

}
