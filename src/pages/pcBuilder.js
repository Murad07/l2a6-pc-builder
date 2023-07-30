import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Col, Row } from "antd";
import cpu from "../../public/images/cpu.png";
import monitor from "../../public/images/monitor.png";
import motherboard from "../../public/images/motherboard.jpeg";
import power from "../../public/images/power.png";
import ram from "../../public/images/ram.png";
import storage from "../../public/images/storage.png";
import Image from "next/image";
import Link from "next/link";

const PcBuilder = () => {
  const items = [
    { id: "1", name: "CPU", iconUrl: cpu },
    { id: "2", name: "Motherboard", iconUrl: motherboard },
    { id: "3", name: "RAM", iconUrl: ram },
    { id: "4", name: "Power Supply", iconUrl: power },
    { id: "5", name: "Storage Device", iconUrl: storage },
    { id: "6", name: "Monitor", iconUrl: monitor },
  ];
  return (
    <RootLayout>
      <div>
        <Row>
          <Col xs={24} sm={14} span={14}>
            <h1>PC Builder - Build Your Own Computer</h1>
          </Col>
          <Col xs={24} sm={10} span={10}>
            <div
              style={{
                borderRadius: 7,
                width: 200,
                height: 100,
                backgroundColor: "#3749BB",
              }}
            >
              <div>0 TK</div>
              <div>0 Items</div>
            </div>
          </Col>
        </Row>

        <div
          style={{
            width: "100%",
            height: 30,
            backgroundColor: "gray",
            color: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Core Components
        </div>

        <div>
          {items?.map((item) => (
            <Row key={item.id}>
              <Col
                flex="50px"
                style={{
                  padding: 10,
                  marginTop: 10,
                  backgroundColor: "#EBECF8",
                }}
              >
                <Image
                  src={item.iconUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                />
              </Col>
              <Col flex="auto" style={{ paddingLeft: 10 }}>
                <h4>{item.name}</h4>
              </Col>
              <Col
                flex="70px"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href={`/buildproducts/${item?.id}`}>
                  <Button type="primary" ghost>
                    Choose
                  </Button>
                </Link>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default PcBuilder;
