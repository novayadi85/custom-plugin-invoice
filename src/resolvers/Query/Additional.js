import { decodeShopOpaqueId } from "../../xforms/id.js";

export default async function additional(_, args, context, info) {
    const { shopId: opaqueShopId, productId , variantId } = args;
    
    const shopId = decodeShopOpaqueId(opaqueShopId);
    
    const filters = {
        productId, 
        variantId,
    }

    return context.queries.additional(context, shopId, filters);
    
}