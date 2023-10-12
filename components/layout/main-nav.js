import React from "react";
import Link from "next/link";
import classes from'./main-nav.module.css'
import { FaUser, FaEnvelope,FaHome } from "react-icons/fa";

export default function MainNav() {
  return (
    <header className={classes.header}>
      <Link className={classes.icon} href="/" title="Home">
        <FaHome />
      </Link>
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
}
