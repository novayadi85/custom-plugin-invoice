import decodeOpaqueIdForNamespace from "@reactioncommerce/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@reactioncommerce/api-utils/encodeOpaqueId.js";

const namespaces = {
  Shop: "reaction/shop",
  Invoice: "reaction/invoice",
  FulfillmentMethod: "reaction/fulfillmentMethod",
  Order: "reaction/order",
  OrderFulfillmentGroup: "reaction/orderFulfillmentGroup",
  OrderItem: "reaction/orderItem",
  Payment: "reaction/payment",
  Product: "reaction/product",
  Catalog: "reaction/catalogProduct",
  Variant: "reaction/catalogProductVariant",
};

export const encodeCatalogProductOpaqueId = encodeOpaqueId(namespaces.Catalog);
export const encodeCatalogProductVariantOpaqueId = encodeOpaqueId(namespaces.Variant);
export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);
export const encodeInvoiceOpaqueId = encodeOpaqueId(namespaces.Discount);
export const encodeOrderFulfillmentGroupOpaqueId = encodeOpaqueId(namespaces.OrderFulfillmentGroup);
export const encodeOrderItemOpaqueId = encodeOpaqueId(namespaces.OrderItem);
export const encodeOrderOpaqueId = encodeOpaqueId(namespaces.Order);
export const encodePaymentOpaqueId = encodeOpaqueId(namespaces.Payment);
export const encodeProductOpaqueId = encodeOpaqueId(namespaces.Product);

export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
export const decodeInvoiceOpaqueId = decodeOpaqueIdForNamespace(namespaces.Discount);
export const decodeFulfillmentMethodOpaqueId = decodeOpaqueIdForNamespace(namespaces.FulfillmentMethod);
export const decodeOrderFulfillmentGroupOpaqueId = decodeOpaqueIdForNamespace(namespaces.OrderFulfillmentGroup);
export const decodeOrderItemOpaqueId = decodeOpaqueIdForNamespace(namespaces.OrderItem);
export const decodeOrderOpaqueId = decodeOpaqueIdForNamespace(namespaces.Order);
export const decodePaymentOpaqueId = decodeOpaqueIdForNamespace(namespaces.Payment);
export const decodeProductOpaqueId = decodeOpaqueIdForNamespace(namespaces.Product);
export const decodeCatalogProductOpaqueId = decodeOpaqueIdForNamespace(namespaces.Catalog);
export const decodeCatalogProductVariantOpaqueId = decodeOpaqueIdForNamespace(namespaces.Variant);