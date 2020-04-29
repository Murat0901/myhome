import unfetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

function Blog({ blogs }) {
  return (
    <Layout>
      <section id="blog">
        <div className="container">
          <h1>Kişisel Notlarım</h1>
          <ul>
            {blogs.map((blog) => (
              <article>
                <div className="card bg-light">
                  <div className="card-body">
                    <h5 className="card-header">{blog.title}</h5>
                    <p className="card-text">{blog.content}</p>
                    <p>{blog.dateTime}</p>
                  </div>
                </div>
              </article>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const data = await unfetch("https://murat0901.herokuapp.com/blog");
  const blogs = await data.json();
  return {
    props: {
      blogs,
    },
  };
}
