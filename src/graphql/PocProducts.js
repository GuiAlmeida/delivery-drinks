export const PocProducts = `query Poc($pocId: String!, $productsSearch: String, $productsCategoryId: String) {
   poc(id: $pocId) {
     id
     status
     name
     products(search: $productsSearch, categoryId: $productsCategoryId) {
       id
       title
       image
       price
       category {
         id
         title
       }
     }
   }
 }`;
