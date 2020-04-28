import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <section id="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <form>
            <label>Ad Soyad</label>
            <input type="text" placeholder="Ad Soyad"></input>
            <label>E-Posta</label>
            <input type="text" placeholder="Eposta"></input>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
