import { GoMarkGithub } from "react-icons/go";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";

function Footer() {
  const size = 30;
  return (
    <footer>
      <ul>
        <li>
          <Link href="https://github.com/Murat0901">
            <a>
              <GoMarkGithub size={size} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/menzilcim">
            <a>
              <TiSocialTwitter size={size} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/murat-menzilci-223823a8">
            <a>
              <TiSocialLinkedin size={size} />
            </a>
          </Link>
        </li>
      </ul>
      <p>Design by Murat Menzilci with Next.js</p>
    </footer>
  );
}

export default Footer;
