import { configure } from '@storybook/react';
import './style.scss';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
