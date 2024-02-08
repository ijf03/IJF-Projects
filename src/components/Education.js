import React from 'react';
import * as styles from '../styles/education.module.css';

const Education = () => {
  return (
    <div>
      <table className={styles.educationSection}>
        <thead>
          <tr>
            <th>YEAR</th>
            <th>CERTIFICATION</th>
            <th>INSTITUTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2026</td>
            <td>Bachelor's in Computer Science</td>
            <td>Monash University</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Responsive Web Design</td>
            <td>freeCodeCamp.org</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Full Stack Web Development ( MERN Stack )</td>
            <td>Zuitt Coding Bootcamp</td>
          </tr>
          <tr>
            <td>2021 - 2023</td>
            <td>International Baccalaureate Diploma Programme</td>
            <td>Cebu International School</td>
          </tr>
          <tr>
            <td>2022</td>
            <td>Introduction to Python for Machine Learning</td>
            <td>University of British Columbia Future Global Leaders</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Higher Web Development Level 1 & Level 2</td>
            <td>San Francisco College of Technology & Design</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Introduction to Arduino Basics</td>
            <td>Compass Education</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;
