import Layout from "../components/Layout";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";

function Contact() {
  const size = 30;
  return (
    <Layout>
      <section id="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <p>My social media accounts</p>
          <ul>
            <li className="box git">
              <Link href="https://github.com/Murat0901">
                <a>
                  <GoMarkGithub size={size} /> Github
                </a>
              </Link>
            </li>
            <li className="box twt">
              <Link href="https://twitter.com/menzilcim">
                <a>
                  <TiSocialTwitter size={size} /> Twitter
                </a>
              </Link>
            </li>
            <li className="box linkd">
              <Link href="https://www.linkedin.com/in/murat-menzilci-223823a8">
                <a>
                  <TiSocialLinkedin size={size} /> Linkedin
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
