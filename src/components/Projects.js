import React from 'react';
import styles from '../styles.module.css';
import data from '../projects.json';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: data
    }
  }

  render() {
    console.log('projects', this.state.projects)
    return (
      <div className={styles.projectsContainer}>

        {this.state.projects.map (item => {
          return (
            <div className={styles.projectWrap}>
              <h3 className={styles.projectTitle}>{item["Project"]}</h3>
              <p className={styles.project}>{item["Intro"]}</p>
              <a href={item["Github"]}>Github</a> <br/>

            </div>
          )
        })}
      </div>
    )
  }
}

export default Projects;