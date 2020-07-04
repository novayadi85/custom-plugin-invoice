import { decodeShopOpaqueId, decodeOrderItemOpaqueId, decodeOrderOpaqueId} from "../../xforms/id.js";

/**
 * @name "Mutation.createInvoice"
 * @method
 * @memberof MyPlugin/GraphQL
 * @summary resolver for the createSomething GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} CreateSomethingPayload
 */
export default async function createInvoice(parentResult, { input }, context) {
    const {
      clientMutationId = null,
      shopId: opaqueShopId,
      itemIds,
      orderId,
      ...invoiceInput
    } = input;

    const shopId = decodeShopOpaqueId(opaqueShopId);

    const data = await context.mutations.createInvoice(context, {
      shopId,
      itemIds: itemIds.map(decodeOrderItemOpaqueId),
        orderId: decodeOrderOpaqueId(orderId),
      ...invoiceInput
    });

  return {
    invoice: data,
    clientMutationId
  };
}