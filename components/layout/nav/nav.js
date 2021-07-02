import classes from "./nav.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Nav({ visible }) {
  
  return (
    <nav  className={classes.Nav}>
      <Image
        title="Karbel Çelik"
        id="logo"
        src={"/images/Logo.png"}
        width={300}
        height={200}
        alt="logo"
        className={classes.logo}
      />
      <ul className={classes.links_container}>
        <li>
          <Link href="/">
            <a
              className={classes.link}
              title="Hakkımızda Linki"
              id="hakkımızda_linki_nav"
              href="#Hakkımızda"
            >
              Hakkımızda
            </a>
          </Link>
        </li>
        <li>
          <Link href="/neden-karbel">
            <a
              className={classes.link}
              title="Neden Karbel Linki"
              id="neden_karbel_linki_nav"
              href="#Neden Karbel?"
            >
              Neden Karbel?
            </a>
          </Link>
        </li>
        <li>
          <Link href="/hizmetlerimiz">
            <a
              className={classes.link}
              title="Hizmetlerimiz Linki"
              id="hizmetlerimiz_linki_nav"
              href="#Hizmetlerimiz"
            >
              Hizmetlerimiz
            </a>
          </Link>
        </li>
        <li>
          <Link href="referanslarimiz">
            <a
              className={classes.link}
              title="Referanslarımız Linki"
              id="referanslarımız_linki_nav"
              href="#Referanslarımız"
            >
              Referanslarımız
            </a>
          </Link>
        </li>
        <li>
          <Link href="/tedarikcilerimiz">
            <a
              className={classes.link}
              title="Tedarikçilerimiz Linki"
              id="tedarikçilerimiz_linki_nav"
              href="#Tedarikçilerimiz"
            >
              Tedarikçilerimiz{" "}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/iletisim">
            <a
              href="#İletişim"
              title="İletişim Linki"
              id="iletişim_linki_nav"
              className={classes.link}
            >
              İletişim
            </a>
          </Link>
        </li>
      </ul>
      <div className={classes.social_icons}>
        <a
          href="https://twitter.com/KarbelC"
          title="Twitter Linki"
          id="twitter_linki_nav"
        >
          <i className={"fab fa-twitter-square fa-lg " + classes.icon}></i>
        </a>
        <a
          href="https://www.facebook.com/Karbel-%C3%87elik-107643741432544"
          title="Facebook Linki"
          id="facebook_linki_nav"
        >
          <i className={"fab fa-facebook-square fa-lg " + classes.icon}></i>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/fikret-yi%C4%9Fit-24518a20a/"
          title="Linkedin Linki"
          id="linkedin_linki_nav"
        >
          <i className={"fab fa-linkedin fa-lg " + classes.icon}></i>{" "}
        </a>
      </div>
    </nav>
  );
}
