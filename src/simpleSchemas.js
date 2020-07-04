import SimpleSchema from "simpl-schema";

export function extendProductSchemas(schemas) {

  const {
    CatalogProduct,
    CatalogProductOption,
    CatalogProductVariant,
    Product,
    ProductVariant,
    //ProductVariantInputSchema
  } = schemas;
  
  schemas.CatalogProduct.extend({
    Period: {
      type: String,
      optional: true
    },

  });

}
