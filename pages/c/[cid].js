import Head from "next/head";
import { siteTitle } from "../../components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Person() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.cid && `/api/c/${query.cid}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>
          {siteTitle} Core Team 2021 Certificate - {data.name}
        </title>
        <link rel="stylesheet" href="../css/cert.css" />
      </Head>
      <div id="page-container">
        <div id="pf1" className="pf w0 h0 canvas" data-page-no={1}>
          <div id="certa" className="pc pc1 w0 h0">
            <div id="certb" className="c x0 y0 w1 h0">
              <div className="certname t m0 x1 h1 y1 ff1 fs0 fc0 sc0 ls0 ws0">
                {data.name}
              </div>
              <div
                id="certc"
                className="t m0 x1 h2 y2 ff2 fs1 fc0 sc0 ls0 ws0 texta"
              >
                is hereby awarded this Certificate of Appreciation for
                successfully serving as a <br />
                Google Developer Student Club Core Team Member at JSS Science
                &amp; Technology University, Mysuru for the 2020 - 2021 academic
                year.
              </div>
              <div id="certd" className="t m0 x2 h4 y5 ff2 fs3 fc1 sc0 ls0 ws0">
                <span className="sml">
                  Certificate ID: <strong>{data.id}</strong>{" "}
                </span>
                <br />
                <span className="sml">
                  Date of Issue: <strong>July 5, 2021</strong>
                </span>{" "}
                <br />
                <span className="sml">
                  Verify the authenticity of this certificate at: <br />
                  <strong>dscjssstu.in/c/{data.id}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="dl">
          <a id="dlbtn" className="buttonDownload">
            Download PDF
          </a>
          <a id="dlbtn2" className="buttonDownload">
            Download PNG
          </a>
        </div>
      </div>
    </>
  );
}
