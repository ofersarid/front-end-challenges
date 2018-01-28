import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Profile Image', module).add('Read Me', () => (
  <div>
    <h1>Profile Image</h1>
    <ol>
      <li>
        <div>Create a profile image component that accepts 3 properties -</div>
        <ul>
          <li>imageSrc: (String)</li>
          <li>userName: (String)</li>
          <li>size: (One of - s / m / l)</li>
        </ul>
      </li>
      <li>
        <div>For the image profile-1.jpg inside the public folder it should look like this:</div>
        <img src="./profile-mock.png" alt="" />
      </li>
      <li>
        <div>For a none available image it will show:</div>
        <img src="./image-not-available.png" alt="" />
        <div>(text should be real text - not an image)</div>
      </li>
      <li>
        <div>On click will animate to this:</div>
        <img src="./on-click.png" alt="" />
      </li>
      <li>
        <div>On hover will animate a tooltip that shows the user’s name:</div>
        <img src="./on-hover-tooltip.png" alt="" />
        <div>(use the already installed&nbsp;
          <a href="https://www.npmjs.com/package/react-tooltip" target="blank" >react-tooltip</a>&nbsp;
          package)
        </div>
      </li>
    </ol>
  </div>
)).add('profile image comp', () => (
  <div>
    <h1>Profile Image</h1>
    <div>Your component Here</div>
  </div>
));

storiesOf('Text Area', module).add('Read Me', () => (
  <div>
    <h1>Text Area</h1>
    <ol>
      <li>
        this component has a min and max number of rows. If input exceeds the max amount of rows a scrollbar will
        appear.
      </li>
      <li>
        if the user has not yet reached the max number of rows an empty line will always be provided at the bottom
      </li>
      <li>
        Line breaks should work when hitting “Enter”, and word breaks to new line
      </li>
      <li>
        Pasting text in should also preserve the defined behaviour
      </li>
      <li>
        The animation for the textarea height is essential.
      </li>
      <li>
        Please notice that there should be no text “jumps” and that is what makes this a senior challenge (to achieve
        this you will need to think outside of the box - this is not a naive textarea solution)
      </li>
    </ol>
    <iframe
      src="https://drive.google.com/file/d/0B44JvAgVgFegSjVHbG1CZHBxNm8/preview"
      width="640"
      height="480"
      title="textarea-movie"
    />
  </div>
)).add('text area comp', () => (
  <div>
    <h1>Text Area</h1>
    <div>Your component Here</div>
  </div>
));
