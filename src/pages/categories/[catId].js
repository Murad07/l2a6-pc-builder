import RootLayout from "@/components/Layouts/RootLayout";
import CategoryWiseProducts from "@/components/UI/CategoryWiseProducts";

const ProductCategory = ({ product, catName }) => {
  console.log(product);
  return (
    <RootLayout>
      <CategoryWiseProducts allProducts={product} catName={catName} />
    </RootLayout>
  );
};

export default ProductCategory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  const resCat = await fetch(
    `http://localhost:5000/categories/${params.catId}`
  );
  const dataCat = await resCat.json();
  const catName = dataCat?.name;

  const filteredProducts = data?.filter(
    (product) => product.catId === params.catId
  );

  //   console.log(data);

  return {
    props: {
      product: filteredProducts,
      catName: catName,
    },
  };
};
