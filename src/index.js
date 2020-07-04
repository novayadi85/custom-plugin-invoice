import pkg from "../package.json";
import schemas from "./schemas/index.js";
import mutations from "./mutations/index.js";
import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import startup from "./startup.js";
import preStartup from "./preStartup.js";
/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Invoice Generator",
    name: "ustom-invoice",
    version: pkg.version,
    collections: {
      Invoices: {
        name: "Invoices",
        indexes: [
          // Create indexes. We set specific names for backwards compatibility
          // with indexes created by the aldeed:schema-index Meteor package.
          [{ shopId: 1 }, { name: "c2_shopId" }]
        ]
      }
    },
    catalog: {
      customPublishedProductFields: ["Period"],
      customPublishedProductVariantFields: ["Period"]
    },
    functionsByType: {
      preStartup: [preStartup],
      startup: [startup],
    },
    backgroundJobs: {
      cleanup: [
        { type: "generateInvoice", purgeAfterDays: 3 }
      ]
    },
    graphQL: {
      schemas,
      resolvers
    },
    mutations,
    queries,
  });
}
