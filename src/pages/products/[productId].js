import { useRouter } from "next/router";
import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const { Meta } = Card;

const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <RootLayout>
      <div style={{ padding: 20 }} className="blog-card-container">
        <Row gutter={[15, 15]}>
          <Col xs={24} sm={12} span={12}>
            <h1>{product?.name}</h1>
            <p>Category: {product?.category}</p>
            <p>Status: {product?.status}</p>
            <p>Price: {product?.price}</p>
            {/* <p>Individual Rating: {product.rating.individual}</p> */}
            <p>
              Average Rating: <Rate disabled defaultValue={product?.rating} />
            </p>
          </Col>
          <Col xs={24} sm={12} span={12}>
            <Image
              src={product?.image_url}
              alt={product?.name}
              width={250}
              height={300}
            />
          </Col>
        </Row>

        <div>
          <h3>Description: </h3>
          <p>{product?.description}</p>

          <h3>Key Features</h3>
          <ul>
            {product?.key_features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>Reviews</h3>
          {product?.reviews.map((review) => (
            <div
              key={review.id}
              style={{
                border: "1px solid gray",
                borderRadius: 5,
                margin: 5,
                padding: 5,
              }}
            >
              <h4>{review.user}</h4>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default ProductDetails;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
