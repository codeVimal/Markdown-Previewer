import React from 'react';
import Styles from './Style.css';

const MarkdownTable = () => {
  return (
    <center>
    <table>
      <thead>
        <tr>
          <th>ELEMENT</th>
          <th>MARKDOWN SYNTAX</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Heading</td>
          <td># H1<br />## H2<br />### H3</td>
        </tr>
        <tr>
          <td>Bold</td>
          <td>**bold text**</td>
        </tr>
        <tr>
          <td>Italic</td>
          <td>*italicized text*</td>
        </tr>
        <tr>
          <td>Blockquote</td>
          <td> blockquote</td>
        </tr>
        <tr>
          <td>Ordered List</td>
          <td>1. First item<br />2. Second item<br />3. Third item</td>
        </tr>
        <tr>
          <td>Unordered List</td>
          <td>- First item<br />- Second item<br />- Third item</td>
        </tr>
        <tr>
          <td>Code</td>
          <td>`code`</td>
        </tr>
        <tr>
          <td>Horizontal Rule</td>
          <td>---</td>
        </tr>
        <tr>
          <td>Link</td>
          <td>[title](https://www.example.com)</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>![alt text](image.jpg)</td>
        </tr>
      </tbody>
    </table>
    </center>
  );
};

export default MarkdownTable;
