import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import getIcon from '../utils/get-icon';
import styles from '../styles/Skills.module.scss';

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      site {
        siteMetadata {
          skills {
            name
            label
          }
        }
      }
    }
  `);

  const { skills } = data.site.siteMetadata;

  return (
    <div className={styles.skills}>
      <h3 className={styles.skills_heading}>
        Technologies I work with{' '}
        <span role="img" aria-label="">
          🔨
        </span>
      </h3>
      <div className={styles.skills_flex}>
        {skills.map((item, index) => (
          <div className={styles.skills_item} key={item.name + index}>
            {getIcon(item.name, '48')}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
