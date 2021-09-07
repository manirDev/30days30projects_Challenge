const checkbox = document.getElementById('checkbox');
const basic = document.getElementById('basic');
const pro = document.getElementById('pro');
const diamond = document.getElementById('diamond');


checkbox.addEventListener('click', () => {
  basic.textContent = basic.textContent === '$99' ? 'FREE' : '$99';
  pro.textContent = pro.textContent === '$299' ? '$29 ' : '$299';
  diamond.textContent = diamond.textContent === '$999' ? '$99' : '$999';

});