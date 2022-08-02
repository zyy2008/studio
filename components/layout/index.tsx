import React from "react";
import { AppShell, Container } from "@mantine/core";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell
      fixed={false}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: 0,
          overflow: "hidden",
        },
      })}
      footer={<Footer data={[]} />}
      header={
        <Header
          links={[
            { link: "/about", label: "Features" },
            {
              link: "#1",
              label: "Learn",
              links: [
                { link: "/docs", label: "Documentation" },
                { link: "/resources", label: "Resources" },
                { link: "/community", label: "Community" },
                { link: "/blog", label: "Blog" },
              ],
            },
            { link: "/about", label: "About" },
            { link: "/pricing", label: "Pricing" },
            {
              link: "#2",
              label: "Support",
              links: [
                { link: "/faq", label: "FAQ" },
                { link: "/demo", label: "Book a demo" },
                { link: "/forums", label: "Forums" },
              ],
            },
          ]}
        />
      }
    >
      <Container fluid pl={0} pr={0} pt={60} pb={50}>
        {children}
      </Container>
    </AppShell>
  );
};

export { Header, Footer, Layout };
