import Layout from "../components/Layout";
import {
  DiDjango,
  DiReact,
  DiBootstrap,
  DiSass,
  DiJavascript1,
  DiWordpress,
} from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Layout>
        <section id="home">
          <div className="container top">
            <div className="row m-5">
              <div className="col-md-6 pt-4">
                <h1>
                  <strong>Aydın Web Tasarım Uzmanı</strong>
                </h1>
                <p>İnternette yerinizi almak için hazır mısınız?</p>
                <p>
                  Sitenizi <strong>Daha Fazla</strong> kişinin ziyaret etmesini
                  istemez misiniz?
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                ></img>
              </div>
              <div className="col-12 text-center"></div>
            </div>
          </div>

          <div className="container-fluid works">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Neler Yapıyorum?</h3>
                  <p>
                    Tüm ihtiyaçlarınıza uygun dünya standartlarında projeler
                    gerçekleştirmek için buradayım.
                  </p>
                </div>
                <div className="col-md-4">
                  <h4>Yazılım Geliştirme</h4>
                  <p>
                    Proje ihtiyaçlarına bağlı olarak geliştireceğim size en
                    uygun altyapı ile kullanıcı deneyimini ön planda tutan,
                    hızlı ve kullanışlı web yazılımları geliştirmek için
                    buradayım.
                  </p>
                  <p></p>
                </div>
                <div className="col-md-4">
                  <h4>Arama Motoru Optimizasyonu</h4>
                  <p>
                    Google'da üst sıralarda yer almanız için tüm teknik analiz
                    ve raporlarla birlikte, sitenizin tanınırlığını ve ziyaretçi
                    sayısını arttırmak için buradayım.
                  </p>
                </div>
                <div className="col-md-4">
                  <h4>Web Tasarımı</h4>
                  <p>
                    Küresel tasarım trendlerini sürekli takip ederek, minimalist
                    ve özgün tasarımlarımla sizleri rakiplerinizde ayıracak ve
                    fark yaratacak tasarımlar hazırlamak için buradayım.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container how">
            <div className="row">
              <div className="col-12 text-center">
                <h3>Nasıl Yaparım?</h3>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
              </div>
              <div className="col-md-6">
                <h4>Benzersiz Olmalısınız</h4>
                <p>
                  Hazır temalardan sıkılmadınız mı? Hepsi birbirinin aynısı
                  hazır tema üzerine kurulmuş siteler kendini hemen belli eder.
                  Abartılı animasyonlar, karmaşık renkler... Gelişen tasarım
                  trendlerinde hızlı açılan, kolay erişimli ve sade web siteleri
                  tercih edilmektedir.
                </p>
              </div>

              <div className="col-md-6">
                <h4>Hız Her Şeydir</h4>
                <p>
                  Günümüzde teknoloji o kadar ilerledi ki her çıkan yeni cihaz daha öncekinden hızlı olmaya çalışır. Büyük şirketler kullanıcıların sitelerinde daha fazla vakit geçirmesini çok önemser. Google da aynı şekilde... Bunun için siteniz kesinlikle hızlı açılmalıdır.
                </p>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" />
              </div>
            </div>
          </div>

          <div className="container-fluid tecs">
            <h3 className="text-center">Kullandığım Teknolojiler</h3>
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
              <li>
                <DiWordpress/>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </div>
  );
}
