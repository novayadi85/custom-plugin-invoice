/**
 * @name invoices
 * @method
 * @memberof GraphQL/invoices
 * @summary Query the invoices collection
 * @param {Object} context - an object containing the per-request state
 * @param {String} shopId - ID of Shop to query against
 * @param {Object} filters - filters to be applied
 * @returns {Promise<Object>} DiscountCodes object Promise
 */
export default async function invoices(context, shopId, filters) {
  const { collections } = context;
  const { Invoices } = collections;

  let query = {};
  let searchFieldFilter = {};

  //await context.validatePermissions("reaction:legacy:discounts", "read", { shopId });

  // Create the mongo selector from the provided filters
  query = {
    shopId
  };

  // Use `filters` to filters out results on the server
  if (filters && filters.searchField) {
    const { searchField } = filters;
    const regexMatch = { $regex: _.escapeRegExp(searchField), $options: "i" };
    searchFieldFilter = {
      $or: [
        // Exact matches
        { _id: searchField }, // exact match the order id
      ]
    };
  }

  // Build the final query
  query.$and = [{
    ...searchFieldFilter,
  }];

  return Invoices.find(query);
}
