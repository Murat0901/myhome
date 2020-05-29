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
          <h1 className="m-3">Contact Me</h1>
          <p className="m-5">My social media accounts</p>
          <ul>
            <Link href="https://github.com/Murat0901">
              <a>
                <li className="box git">
                  <GoMarkGithub size={size} /> Github
                </li>
              </a>
            </Link>
            <Link href="https://twitter.com/menzilcim">
              <a>
                <li className="box twt">
                  <TiSocialTwitter size={size} /> Twitter
                </li>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/murat-menzilci-223823a8">
              <a>
                <li className="box linkd">
                  <TiSocialLinkedin size={size} /> Linkedin
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
