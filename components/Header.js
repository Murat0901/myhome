import Head from "next/head";

function Header() {
  return (
    <html lang="tr">
      <Head>
        <title>Murat Menzilci</title>
        <meta name="google-site-verification" content="WBpvVADUZwwgFBhL9-kmkom4eNZ7xZjDasA1cIEzViY" />
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-XXXXX-Y', 'auto');
        ga('send', 'pageview');
        </script>
      </Head>
    </html>
  );
}

export default Header;
