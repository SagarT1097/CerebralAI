"use client";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #192339;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 7px 7px 0px 0px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Developed by Sagar Tambrahalli</p>
      <div>
        <Link
          href="https://github.com/SagarT1097"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/sagartb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
