import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./main-nav.module.css";
import { FaUser, FaEnvelope, FaHome } from "react-icons/fa";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.icon}>
        <Link className={classes.icon} href="/" title="Home">
          <FaHome />
        </Link>
      </div>
      <div className={classes.icon}>
        <h1>GroupB</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link className={classes.icon} href="/recipe">
              All Recipe
            </Link>
          </li>
          <li>
            <Link className={classes.icon} href="/about-us" title="About us">
              <FaUser />
            </Link>
          </li>
          <li>
            <Link
              className={classes.icon}
              href="/contact/contact-form"
              title="Contact"
            >
              <FaEnvelope />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
