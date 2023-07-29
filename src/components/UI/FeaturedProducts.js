import ProductCard from "./ProductCard";

import Img1 from "../../../public/img_1.jpg";
import Img2 from "../../../public/img_2.jpg";
import { Col, Row } from "antd";

const FeaturedProducts = ({ allProducts }) => {
  // Replace these with actual blog data

  return (
    <div>
      <h1>Featured product</h1>
      <div className="blog-card-container">
        <Row gutter={[15, 15]}>
          {allProducts.map((blog, index) => (
            <Col xs={24} sm={6} key={index} span={6}>
              <ProductCard key={index} {...blog} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FeaturedProducts;
