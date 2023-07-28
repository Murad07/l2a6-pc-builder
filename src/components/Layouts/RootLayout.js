import React from "react";
import Head from "next/head";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const menuItems = [
    { label: "One", link: "/one" },
    { label: "Thow", link: "/one" },
    { label: "Three", link: "/one" },
    { label: "FOur", link: "/one" },
    { label: "PC Builder", link: "/pcBuilder" },
  ];
  return (
    <>
      <Head>
        <title>PC Builder</title>
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
                label: (
                  <a
                    href={`${menuItems[index].link}`}
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${menuItems[index].label}`}
                  </a>
                ),
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
