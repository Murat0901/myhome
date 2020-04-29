import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Layout>
        <section id="home">
          <div className="container">
            <img src="https://avatars2.githubusercontent.com/u/47676205?s=460&u=3db26078eadd62852afdf3f952b04d238796761d&v=4"></img>
            <h1>Kişisel Websiteme Hoş Geldiniz</h1>
            <Link href="/Blog">
              <a className="button">
                My Blog
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
}
