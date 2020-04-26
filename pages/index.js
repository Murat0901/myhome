import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col-12 flex-column justify-content-center">
                <img src="https://avatars2.githubusercontent.com/u/47676205?s=460&u=3db26078eadd62852afdf3f952b04d238796761d&v=4"></img>
                <h1>Kişisel Websiteme Hoş Geldiniz</h1>
                <p>Blog sayfam için tıklayın</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
