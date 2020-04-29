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
                <div className="blog-post">
                  <h2 className="blog-title">{blog.title}</h2>
                  <p>{blog.content}</p>
                  <p>{blog.dateTime}</p>
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
