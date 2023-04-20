import React from 'react';
import Style from './About.css';
class About extends React.Component {
  render() {
    return (
      <div id='body' className="container mt-5">
        <h2>Markdown Previewer</h2>
        <p>Markdown Previewer is an online application that allows you to write and preview Markdown code in real-time. With our app, you can create formatted documents, blog posts, or any other text-based content quickly and easily.</p>

        <h2>Version</h2>
        <p>1.0.0 (Released on April 17, 2023)</p>
        
        <h2>Developer</h2>
        <p>Markdown Previewer was developed by John Doe, a web developer with over 5 years of experience in front-end development.</p>
        
        <h2>Acknowledgments</h2>
        <p>Markdown Previewer was built using the following open-source libraries:</p>
        <ul>
          <li><a href="https://reactjs.org/">React</a></li>
          <li><a href="https://marked.js.org/">Marked</a></li>
          <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
          <li><a href="https://fontawesome.com/">FontAwesome</a></li>
        </ul>
        
        <h2>Privacy Policy</h2>
        <p>Markdown Previewer does not collect any user data. However, we use cookies to improve user experience and provide personalized content.</p>
        
        <h2>Contact</h2>
        <p>For support, questions, or feedback, please  <a href="mailto:support@markdownpreviewer.com">email us</a>.</p>
      </div>
    );
  }
}

export default About;
