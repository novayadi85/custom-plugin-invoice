import Logger from "@reactioncommerce/logger";
import Random from "@reactioncommerce/random";
import { Invoices as InvoicesSchema } from "../simpleSchemas.js";


/**
 * @name Mutation.createSomething
 * @method
 * @memberof GraphQL/createSomething
 * @summary Add a discount code
 * @param {Object} context -  an object containing the per-request state
 * @param {Object} input - mutation input
 * @returns {Promise<Object>} RenameMeInput
 */
export default async function createSomething(context, input) {
  //Logger.info("createSomething mutation is not yet implemented");
  
  const { shopId, ...invoiceInput } = input;
  const { appEvents, collections } = context;
  const { Invoices } = collections;
  Logger.info({ invoiceInput }, "Order has been submitted");
  const invoice = {
    _id: Random.id(),
    shopId,
    ...invoiceInput,
  };

  await Invoices.insertOne(invoice);

  // await appEvents.emit("afterDiscountCodeCreate", invoice);

  return invoice;

}