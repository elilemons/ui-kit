import _ from 'lodash';
import button from 'html-loader!../../modules/button/button.html';

function component() {
    var element = document.createElement('div');    

    element.innerHTML = button;
    return element;
  }
  
//   let element = component();
document.body.appendChild(component());

//   if (module.hot) {
//       module.hot.accept('./print.js', function() {
//           document.body.removeChild(element);
//           element = component(); // Re-render the component
//           document.body.appendChild(element);
//       });
//   }