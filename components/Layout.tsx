import { ButtonBase, styled, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import React, { PropsWithChildren } from "react";

const Links = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

const LinkTab = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(2, 3),
}));

const StyledMain = styled("main")(({ theme }) => ({
  margin: "auto",
  padding: theme.spacing(0, 4),
  maxWidth: 1200,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head>
      <title>Trying out Next.js</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Links>
      <Link href="/">
        <LinkTab>Home</LinkTab>
      </Link>
      <Link href="/pageTwo">
        <LinkTab>Page Two</LinkTab>
      </Link>
    </Links>
    <StyledMain>{children}</StyledMain>
  </>
);