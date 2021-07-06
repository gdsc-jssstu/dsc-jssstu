import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../../components/layout";
import CustomError from "../../components/CustomError";
import { useRouter } from "next/router";
import useSWR from "swr";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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

  const dlbtnRef = useRef(null);
  const dlbtn2Ref = useRef(null);

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: "legal",
  });
  const readyImage = (container, certview, certtext) => {
    var certid = document.getElementById("certd");

    container.classList.add("saveview");
    certview.classList.add("notran");
    certid.classList.add("x2a");

    certview.classList.remove("h0");
    certview.classList.remove("w0");

    certtext.classList.add("tran");
    certtext.classList.add("tranb");
  };
  const closeImage = (container, certview, certtext) => {
    var certid = document.getElementById("certd");

    container.classList.remove("saveview");
    certview.classList.remove("notran");
    certid.classList.remove("x2a");

    certview.classList.add("h0");
    certview.classList.add("w0");

    certtext.classList.remove("tran");
    certtext.classList.remove("tranb");
  };
  const downloadPDF = () => {
    var container = document.getElementById("pf1");
    var certview = document.getElementById("certa");
    var certtext = document.getElementById("certb");

    readyImage(container, certview, certtext);

    const filename = "DSC_CoreTeam-Certificate2021.pdf";

    html2canvas(container, {
      scale: 1,
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 14.2, 8.5);
      pdf.save(filename);
    });

    //reverse
    closeImage(container, certview, certtext);
  };
  const downloadPNG = () => {
    var container = document.getElementById("pf1");
    var certview = document.getElementById("certa");
    var certtext = document.getElementById("certb");
    readyImage(container, certview, certtext);

    html2canvas(container, {
      scale: 1,
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "DSC_CoreTeam-Certificate2021.png";
      link.href = canvas.toDataURL("image/png");
      link.target = "_blank";
      link.click();
    });

    //reverse
    closeImage(container, certview, certtext);
  };

  useEffect(() => {
    var container = document.getElementById("pf1");
    html2canvas(container, {
      scale: 1,
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      var link = document.createElement("za");
      document.body.appendChild(link);
      link.download = "DSC_CoreTeam-Certificate2021.png";
      link.href = canvas.toDataURL("image/png");

      document
        .querySelector("meta[property=og\\:image]")
        .setAttribute("content", link.href);
    });
  });

  if (error) return <CustomError />;
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
          <a
            id="dlbtn"
            className="buttonDownload"
            ref={dlbtnRef}
            onClick={downloadPDF}
          >
            Download PDF
          </a>
          <a
            id="dlbtn2"
            className="buttonDownload"
            ref={dlbtn2Ref}
            onClick={downloadPNG}
          >
            Download PNG
          </a>
        </div>
        <div id="author">
          <p>
            GDSC Certificate 2021. Tool made with ❤️ by{" "}
            <Link href="/">GDSC JSSSTU</Link>
          </p>
        </div>
      </div>
    </>
  );
}
