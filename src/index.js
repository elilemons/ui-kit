import _ from 'lodash';
import printMe from './print.js';
import buttonTemplate from 'html-loader!./button.html';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = buttonTemplate;
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  let element = component();
  document.body.appendChild(component());

  if (module.hot) {
      module.hot.accept('./print.js', function() {
          console.log('Accepting the updated printMe module!');
          document.body.removeChild(element);
          element = component(); // Re-render the component
          document.body.appendChild(element);
      })
  }