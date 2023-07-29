import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategories from "@/components/UI/FeatureCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

const HomePage = ({ allProducts, allCategories }) => {
  return (
    <RootLayout>
      <FeaturedProducts allProducts={allProducts} />

      <FeaturedCategories allCategories={allCategories} />
    </RootLayout>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("http://localhost:5000/products"); // --> json server
  const data = await res.json();

  const resCat = await fetch("http://localhost:5000/categories"); // --> json server
  let dataCat = await resCat.json();
  dataCat = dataCat.slice(0, 6);

  // Shuffle the array of products
  const shuffledProducts = shuffleArray(data);

  // Get the first 6 products from the shuffled array
  const randomProducts = shuffledProducts.slice(0, 6);
  console.log(dataCat);

  return {
    props: {
      allProducts: randomProducts,
      allCategories: dataCat,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 30,
  };
};

// Function to shuffle an array using the Fisher-Yates algorithm
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
