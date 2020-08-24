import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import useDarkMode from 'use-dark-mode';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import styles from '../styles/Projects.module.scss';
import getIcon from '../utils/get-icon';

const ProjectsPage = ({ location }) => {
  const { value } = useDarkMode();

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      site {
        siteMetadata {
          projects {
            id
            title
            description
            github_link
            project_link
            tools
          }
        }
      }
      useDarkHook: file(absolutePath: { regex: "/dummy-project.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      noted: file(absolutePath: { regex: "/dummy-project-2.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fossbracket: file(absolutePath: { regex: "/dummy-project-2.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { projects } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <SEO title={'Projects'} />
      <div className={styles.projects}>
        <div className={styles.projects_heading}>
          <h1>My Projects</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officiis laboriosam
            blanditiis adipisci non molestiae id odit dicta eaque expedita!
          </p>
        </div>
        <div className={styles.projects_flex}>
          {projects.map((project) => (
            <div className={styles.projects_single}>
              <Image
                fluid={data[project.id].childImageSharp.fluid}
                alt={''}
                className="project_img"
              />
              <div className={styles.projects_single_heading}>
                <h2>
                  {project.title}{' '}
                  {project.project_link && (
                    <a
                      href={project.project_link}
                      target="_blank"
                      rel="noreferrer"
                      title="View Project"
                    >
                      {getIcon('EXTERNAL_LINK', '1.2rem')}
                    </a>
                  )}
                </h2>
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  {getIcon('GITHUB', '0.88rem', value ? '#F1F1F1' : '#000000')} GitHub
                </a>
              </div>
              <div className={styles.projects_single_skills}>
                <strong>Technologies: </strong>
                <span>
                  {project.tools.map(
                    (tool, index) => `${tool}${index === project.tools.length - 1 ? '' : ', '}`
                  )}
                </span>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
