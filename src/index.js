import _ from 'lodash';
import './css/style.css';
import icon from './asset/vue.png';
// require('jquery');
function component() {
    var elem = document.createElement('div');
    // element.innerHTML = _.join(['Hello','webpack'], '');
    elem.classList.add('red');
    elem.classList.add('iconfont');
    elem.classList.add('icon-huomiao');
    var btn = document.createElement('button')
    btn.innerHTML = '点击';
    btn.onclick = function () {
        //懒加载
        import('./js/print').then(function(module){
            var printM = module.printM;
            printM(666);
        })
    }
    elem.appendChild(btn);
    return elem;
}
document.body.appendChild(component());
