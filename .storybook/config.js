import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import './style.scss';

function loadStories() {
  require('../src/stories');
}

setOptions({
  name: 'Front End Challenges',
  // url: 'https://github.com/kadirahq/storybook-addon-options',
  // goFullScreen: false,
  // showLeftPanel: true,
  showDownPanel: false,
  // showSearchBox: true,
  // downPanelInRight: true,
  // sortStoriesByKind: false,
});

configure(loadStories, module);
