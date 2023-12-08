"use client";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
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
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box className="text-center">
          <IconButton
            sx={{
              "& svg": {
                color: "white",
              },
            }}
          >
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box className="text-center">
          {navLinks.map((item) => (
            <Link key={item} href={item.path}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" className="text-center">
          @2023 Dragon News.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
