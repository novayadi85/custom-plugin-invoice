import generateInvoiceTaskForShop from "./testJob.js";

const jobType = "generateInvoice";

/**
 * @name generateSitemapsJob
 * @summary Initializes and processes a job that regenerates XML sitemaps
 * @param {Object} context App context
 * @returns {undefined}
 */
export default async function generateInvoiceJob(context) {
  const { collections: { Shops } } = context;

  await context.backgroundJobs.addWorker({
    type: jobType,
    async worker(job) {
      const { notifyUserId = "", shopId } = job.data;
      try {
        await generateInvoiceTaskForShop(context, { notifyUserId, shopIds: [shopId] });
        job.done(`${jobType} job done`, { repeatId: true });
      } catch (error) {
        job.fail(`Failed to generate sitemap. Error: ${error}`);
      }
    }
  });
}
