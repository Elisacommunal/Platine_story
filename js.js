/*$(document).ready(function(){
   
});


const p =  document.querySelector('.pblog')
p.classList.add('animated', 'slideInleft')

p.addEventListener('animationend', function() { doSomething() })
*/

const bloc1 =  document.querySelector('.pblog')
bloc1.classList.add('animated', 'fadeInRight')

bloc1.addEventListener('animationend', function() { doSomething() }, 5000);

const bloc2 =  document.querySelector('.pblog1')
bloc2.classList.add('animated', 'fadeInLeft')

bloc2.addEventListener('animationend', function() { doSomething()}, 5000);

const bloc3 =  document.querySelector('.pblog2')
bloc3.classList.add('animated', 'fadeInRight')

bloc3.addEventListener('animationend', function() { doSomething() }, 5000);
