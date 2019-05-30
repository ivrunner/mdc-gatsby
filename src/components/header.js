import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import iasLogo from "../images/mdc-logo-top.svg";

const Header = ({ siteTitle }) => (
  <nav className="bg-mdc-gray">
    <div className="flex flex-wrap items-center justify-center max-w-xl mx-auto p-4 md:p-8">
      <Link
        to="/"
        className="flex items-center no-underline text-white w-1/3 sm:w-1/3 md:w-1/3"
      >
        <img src={iasLogo} className="block mx-auto" alt="IAS Main Logo" />
      </Link>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
