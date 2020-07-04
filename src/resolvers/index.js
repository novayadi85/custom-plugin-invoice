import Mutation from "./Mutation/index.js";
import Query from "./Query/index.js";
import Invoice from "./Invoice/index.js";

export default {
  Invoice,
  Mutation,
  Query,
  Product: {
    Period: (node, context) => {
      return "1 Month"
    },
  },
};
