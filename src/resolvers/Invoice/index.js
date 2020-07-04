import resolveShopFromShopId from "@reactioncommerce/api-utils/graphql/resolveShopFromShopId.js";
import { encodeInvoiceOpaqueId } from "../../xforms/id.js";

export default {
  _id: (node) => encodeInvoiceOpaqueId(node._id),
  shop: resolveShopFromShopId
};
