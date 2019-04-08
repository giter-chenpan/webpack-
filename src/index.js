import  _ from 'lodash';
import printMe from './print';
import './index.scss';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('div');
    element.innerHTML = _.join(['hello00000','webpack'], '');

    btn.innerHTML = '然后查看  console！';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

if (module.hot) {
       module.hot.accept('./print.js', function() {
             console.log('Accepting the updated printMe !');
             printMe();
          })
    }