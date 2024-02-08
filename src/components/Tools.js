import React from 'react';
import * as styles from '../styles/tools.module.css'; // assuming you are using CSS modules
import git from '../images/tools/logo-git.png';
import gitlab from '../images/tools/logo-gitlab-ci-cd.png';
import GitHub from '../images/tools/GitHub.png';
import chromedevtools from '../images/tools/chrome-devtools.svg';
import HTML from '../images/tools/logo-html5.png';
import CSS from '../images/tools/logo-css3.png';
import Bootstrap from '../images/tools/logo-bootstrap.png';
import JavaScript from '../images/tools/logo-javascript.png';
import Reactjs from '../images/tools/logo-react.png';
import Gatsbyjs from '../images/tools/Gatsby_Logo.png';
import Nodejs from '../images/tools/logo-nodejs.png';
import Expressjs from '../images/tools/logo-expressjs.png';
import MongoDB from '../images/tools/logo-mongodb.png';
import Postman from '../images/tools/logo-postman.png';
import RESTAPI from '../images/tools/logo-rest.png';
import JSDOM from '../images/tools/jsdom.png';
import AWS from '../images/tools/aws.png';
import Figma from '../images/tools/logo-figma.png';
import Python from '../images/tools/logo-python.png';
import Trello from '../images/tools/logo-trello.png';


const Tools = () => {
  return (
    <section id="tools" className={styles.toolsSection}>
      <div className={styles.row}>
        {/* Front-End Tools */}
        <div className={styles.col}>
          <div className={styles.text}>
            <h5>FRONTEND</h5>
            <div className={styles.flexColumn}>

            <div className={styles.flexRow}>
                <img src={HTML} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className={styles.flexRow}>
                <img src={CSS} alt="CSS" />
                <p>CSS</p>
              </div>
              <div className={styles.flexRow}>
                <img src={JavaScript} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Bootstrap} alt="Bootstrap" />
                <p>Bootstrap</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Reactjs} alt="React.js" />
                <p>React.js</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Gatsbyjs} alt="Gatsby.js" />
                <p>Gatsby.js</p>
              </div>
              <div className={styles.flexRow}>
                <img src={chromedevtools} alt="Chrome Developer Tools" />
                <p>Chrome Developer Tools</p>
              </div>           

            </div>
          </div>
        </div>

        {/* Back-End Tools */}
        <div className={styles.col}>
          <div className={styles.text}>
            <h5>BACKEND</h5>
            <div className={styles.flexColumn}>
   
              <div className={styles.flexRow}>
                <img src={Nodejs} alt="Node.js" />
                <p>Node.js</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Expressjs} alt="Express.js" />
                <p>Express.js</p>
              </div>
              <div className={styles.flexRow}>
                <img src={MongoDB} alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Postman} alt="Postman" />
                <p>Postman</p>
              </div>
              <div className={styles.flexRow}>
                <img src={RESTAPI} alt="REST API" />
                <p>REST API</p>
              </div>

            </div>
          </div>
        </div>

        {/* Full-Stack Tools */}
        <div className={styles.col}>
          <div className={styles.text}>
            <h5>FULLSTACK</h5>
            <div className={styles.flexColumn}>

            <div className={styles.flexRow}>
                <img src={JSDOM} alt="JS DOM Manipulation" />
                <p>JS DOM Manipulation</p>
              </div>
              <div className={styles.flexRow}>
                <p>API integration with Fetch</p>
              </div>
              <div className={styles.flexRow}>
                <p>SDLC</p>
              </div>

            </div>
          </div>
        </div>


        <div className={styles.col}>
          <div className={styles.text}>
            <h5>OTHERS</h5>
            <div className={styles.flexColumn}>

            <div className={styles.flexRow}>
                <img src={AWS} alt="AWS" />
                <p>AWS</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Figma} alt="Figma" />
                <p>Figma</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Python} alt="Python" />
                <p>Python</p>
              </div>
              <div className={styles.flexRow}>
                <img src={Trello} alt="Trello" />
                <p>Trello</p>
              </div>
              <div className={styles.flexRow}>
                <img src={git} alt="Git" />
                <p>Git</p>
              </div>
              <div className={styles.flexRow}>
                <img src={gitlab} alt="GitLab" />
                <p>GitLab</p>
              </div>
              <div className={styles.flexRow}>
                <img src={GitHub} alt="GitHub" />
                <p>GitHub</p>
              </div>
            
          </div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Tools;
