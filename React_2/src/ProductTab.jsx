import Product from "./Product.jsx";
import HelloUsersTab from "./HelloUsersTab.jsx";

function ProductTab() {
  let array = ["hi-Tech", "Durable", "Fast", "Easy to use"]; // Array
  let feature2 = { a: "hi-Tech", b: "Easy To use", c: "Fast", d: "Durable" }; //Object

  // let array2 = ["<li>hi-tech</li>" , "<li>Durable</li>"]

  return (
    <>

      <HelloUsersTab />

      {/* <Product title="Phone" price={3000} features={array} /> */}
      <Product title="Phone" price={3000} features={array} />
      <Product title="Laptop" price={9000} features={array} />
      <Product title="PS5" price={4500} features={array} />
      <Product />
    </>
  );
}

export default ProductTab;
