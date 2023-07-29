import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";
const { Meta } = Card;

const ProductCard = ({
  id,
  name,
  image_url,
  category,
  price,
  status,
  rating,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <Card
        hoverable
        style={{
          padding: 10,
          height: 550,
        }}
        cover={<Image src={image_url} alt={name} width={100} height={300} />}
        //
      >
        <Meta title={name} description="" />
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>Status: {status}</p>
        <p>Rating: {rating}</p>
      </Card>
    </Link>
  );
};

export default ProductCard;
