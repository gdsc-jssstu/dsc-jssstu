import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

export default function Projects() {
  return (
    <Layout page="projects">
      <Head>
        <title>{siteTitle} - Projects</title>
        <link rel="stylesheet" href="css/projects.css" />
      </Head>

      <div className="main main-raised" style={{ marginTop: "20" }}>
        <div className="container-page">
          <div className="row mt-5">
            <div className="col-lg-6">
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <h1 className="title">Projects</h1>
              <p className="description">
                Learning goes hand-in-hand with building new and cool projects.
                Here, we build new things all the time! Here are a few of
                them:
              </p>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="row">
            {projectData.map((project, idx) => (
              <div className="column" key={idx}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
