// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export function SearchResults() {
//   const { searchKeyword } = useParams();
//   const [products, setProducts] = useState([]);

//   async function searchProducts() {
//     const response = await axios.get(
//       `http://localhost:3000/product?productName=${searchKeyword}`
//     );
//     setProducts(response.data.products);
//   }

//   useEffect(() => {
//     searchProducts();
//   }, []);

//   return (
//     <div>
//       {products?.map((product: any) => {
//         return (
//           <div>
//             <h1>{product.title}</h1>
//             <p>
//               {product.description} <b>{product.price}</b>
//             </p>
//             <img src={product.image} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
