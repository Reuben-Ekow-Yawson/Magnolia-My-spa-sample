import React from 'react';
import ReactDOM from 'react-dom';
import { EditablePage } from '@magnolia/react-editor';
import Home from './pages/Home';
import Text from './components/Text';
import Navigate from './components/Navigate';
import Image from './components/Image';
import ImgText from './components/ImgText';

const config = {
  componentMappings: {
    'my-spa:pages/Home': Home,
    'my-spa:components/Text': Text,
    'my-spa:components/Navigate': Navigate,
    'my-spa:components/Image': Image,
    'my-spa:components/Img': ImgText,
  },
};

class App extends React.Component {
  state = {};

  async componentDidMount() {
    const isPagesApp = window.location.search.includes('mgnlPreview');
    let templateAnnotations;


    const languages = ['en', 'de']
    const rootNodeName = 'Home'
    const pathname = window.location.pathname;

    let currentLanguage = languages[0];

    languages.some(function (language) {
      if (new RegExp('/' + language + '($|/)').test(pathname)) {
        currentLanguage = language;

        return true;
      }
    });

    let nodePath = '/' + rootNodeName + pathname.replace(new RegExp('(.*' + rootNodeName + '|.html|/$)', 'g'), '');

    nodePath = nodePath.replace(new RegExp('/' + currentLanguage + '($|/)'), '/');
    
    const pageRes = await fetch('http://localhost:8080/magnoliaAuthor/.rest/pages' + nodePath  + '?lang=' + currentLanguage);
    const page = await pageRes.json();

    if (isPagesApp) {
      const templateAnnotationsRes = await fetch(
        'http://localhost:8080/magnoliaAuthor/.rest/template-annotations/v1' + nodePath 
      );

      templateAnnotations = await templateAnnotationsRes.json();
    }

    this.setState({ page, templateAnnotations });
  }

  render() {
    const { page, templateAnnotations } = this.state;

    return (
      <div className='App'>
        {page && config && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);