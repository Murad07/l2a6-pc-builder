import PcBuildProductCard from "./PcBuildProductCard";

const PcBuildProducts = ({ allProducts, catName }) => {
  return (
    <div>
      <h1>{catName}</h1>
      <div className="blog-card-container">
        {allProducts.map((blog, index) => (
          <PcBuildProductCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default PcBuildProducts;
