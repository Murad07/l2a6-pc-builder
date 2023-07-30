import Image from "next/image";
import { Button, Card, Col, Divider, Rate, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;

const PcBuildProductCard = ({
  id,
  name,
  image_url,
  category,
  price,
  status,
  rating,
}) => {
  return (
    <>
      <Row>
        <Col
          flex="50px"
          style={{
            padding: 10,
            marginTop: 10,
            backgroundColor: "#EBECF8",
          }}
        >
          <Image src={image_url} alt={name} width={250} height={250} />
        </Col>
        <Col flex="auto" style={{ paddingLeft: 10 }}>
          <h4>{name}</h4>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
          <p>Status: {status}</p>
          Rating: <Rate disabled defaultValue={rating} />
        </Col>
        <Col
          flex="70px"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Link href={`/buildproducts/${item?.id}`}> */}
          <Button type="primary" ghost>
            Add
          </Button>
          {/* </Link> */}
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default PcBuildProductCard;
