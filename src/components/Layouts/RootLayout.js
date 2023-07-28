import React from "react";
import Head from "next/head";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            flex: "1 0 auto",
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          PC Builder ©2023 Created by murad.pi22
        </Footer>
      </Layout>
    </>
  );
};

export default RootLayout;
