import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Profile Image Challenge', module).add('Read Me', () => (
  <div>
    <h1>Profile image component Challenge</h1>
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
        <img src="/profile-mock.png" />
      </li>
      <li>
        <div>For a none available image it will show:</div>
        <img src="/image-not-available.png" />
      </li>
      <li>
        <div>On click will animate to this:</div>
        <img src="/on-click.png" />
      </li>
      <li>
        <div>On hover will animate a tooltip that shows the user’s name:</div>
        <img src="/on-hover-tooltip.png" />
      </li>
    </ol>
  </div>
)).add('profile image comp', () => {
  return (
    <div>Your component Here</div>
  )
});
