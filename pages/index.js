import Layout from "../components/Layout";
import {
  DiDjango,
  DiReact,
  DiBootstrap,
  DiSass,
  DiJavascript1,
} from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Layout>
        <section id="home">
          <div className="container">
            <img src="https://avatars2.githubusercontent.com/u/47676205?s=460&u=3db26078eadd62852afdf3f952b04d238796761d&v=4"></img>
            <h1>Kişisel Websiteme Hoş Geldiniz</h1>
            <p>Bu site Next.js ile oluşturulmuştur.</p>
            <p>Fullstack geliştirici olarak Freelance çalışıyorum</p>
            <div className="tecs">
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="icons">
                <li>
                  <DiDjango />
                </li>
                <li>
                  <DiReact />
                </li>
                <li>
                  <DiBootstrap />
                </li>
                <li>
                  <DiSass />
                </li>
                <li>
                  <DiJavascript1 />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
