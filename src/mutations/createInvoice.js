import Logger from "@reactioncommerce/logger";
import Random from "@reactioncommerce/random";
//import { Invoices as InvoicesSchema } from "../simpleSchemas.js";


/**
 * @name Mutation.createInvoice
 * @method
 * @memberof GraphQL/createInvoice
 * @summary Add a discount code
 * @param {Object} context -  an object containing the per-request state
 * @param {Object} input - mutation input
 * @returns {Promise<Object>} RenameMeInput
 */
export default async function createInvoice(context, input) {
  //Logger.info("createInvoice mutation is not yet implemented");
  const now = new Date();
  const { 
    shopId,
    itemIds,
    orderId, 
    status,
    ...invoiceInput } = input;
  const { appEvents, collections } = context;
  const { Invoices, Orders} = collections;

  const order = await Orders.findOne({ _id: orderId });
  const { shipping } = order
  const foundItemIds = [];
  const foundItems = [];
  let invoiceTotal = 0;
  let totalTax = 0;
  let totalQty = 0;
  const items = shipping.map(ship => {
    const orderItem = ship.items.reduce((list, item) => {
        if (itemIds.includes(item._id)) {
          list.push(item);
          foundItemIds.push(item._id);
          foundItems.push(item);
          invoiceTotal += item.subtotal
          totalTax += item.tax
          totalQty += item.quantity
        }
        return list;
    }, []);
    return orderItem;
  })

  if (!itemIds.every((id) => foundItemIds.includes(id))) {
    throw new ReactionError("not-found", "Some order items not found");
  }

  const { accountId, billingAddress, cartId, currencyCode } = order;

    const invoice = {
    _id: Random.id(),
    shopId,
    notes:[
        {
            accountId: accountId,
            updatedAt: now,
            createdAt: now,
            content: "Invoice"
        }
    ],
    updatedAt: now,
    createdAt: now,
    discount_amount: 0,
    qty: totalQty,
    tax_amount: totalTax,
    total_amount: invoiceTotal, 
    status: (status) ? status : 'unpaid',
    incrementId : Random.id(),
    orderId,
    order: foundItems
  };
  /*
  Logger.info({ foundItemIds }, "Invoice has been submitted");
  Logger.info({ items }, "Invoice has been submitted");
  Logger.info({ foundItems }, "Invoice has been submitted");
  */

  await Invoices.insertOne(invoice);

  //await appEvents.emit("afterOrderCreate", invoice);

  return invoice;

}