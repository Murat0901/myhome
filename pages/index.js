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
            <div className="row mt-5">
              <div className="col-md-6">
                <h1>Aydın Web Tasarım Uzmanı</h1>
                <p>İnternette yerinizi almak için hazır mısınız?</p>
                <p>Fullstack geliştirici olarak Freelance çalışıyorum</p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                ></img>
              </div>
            </div>

            <div className="container-fluid tecs">
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

          <div className="container-fluid works">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Neler Yapıyorum?</h3>
                  <p>Tüm ihtiyaçlarınıza uygun projeleri dünya standartlarında gerçekleştirmek için buradayım.</p>
                </div>
                <div className="col-md-4">
                  <h4>Yazılım Geliştirme</h4>
                  <p>Proje ihtiyaçlarına bağlı olarak geliştireceğim size en uygun altyapı ile kullanıcı deneyimini ön planda tutan, hızlı ve kullanışlı web yazılımları geliştirmek için buradayım.</p>
                  <p></p>
                </div>
                <div className="col-md-4">
                  <h4>Arama Motoru Optimizasyonu</h4>
                  <p>Google'da üst sıralarda yer almanız için tüm teknik analiz ve raporlarla birlikte, sitenizin tanınırlığını ve ziyaretçi sayısını arttırmak için buradayım.</p>
                </div>
                <div className="col-md-4">
                  <h4>Web Tasarımı</h4>
                  <p>Küresel tasarım trendlerini sürekli takip ederek, minimalist ve özgün tasarımlarımla sizleri rakiplerinizde ayıracak ve fark yaratacak tasarımlar hazırlamak için buradayım.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
