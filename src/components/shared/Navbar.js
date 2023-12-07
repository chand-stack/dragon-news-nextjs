"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import logo from "@/asstets/Group.png";
import Image from "next/image";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const navLinks = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Pages",
    path: "/pages",
  },
  {
    route: "Category",
    path: "/category",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "Post",
    path: "/post",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} height={100} width={100} alt="logo" />
          <Box className="text-center w-full">
            {navLinks.map((item) => (
              <Link key={item} href={item.path}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <IconButton>
              <Stack
                spacing={2}
                direction="row"
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <LinkedInIcon />
                <InstagramIcon />
              </Stack>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
