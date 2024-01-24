'use strict';
let a = 3;
console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
      name: 'TV',
      price: 2000
    }

    resolve(product);
  }, 2000)
});

req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      // resolve(product)
      reject();
    }, 2000);
  });


}).then(data => {
  data.modify = true;
  return data;
}).then(data => {
  console.log(data);
}).catch(() => {
  console.error('error');
}).finally(() => {
  console.log('Finally');
})


const test = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
};


Promise.all([test(1000), test(2000), test(6000)]).then(() => {
  console.log('All');
});

Promise.race([test(1000), test(2000), test(6000)]).then(() => {
  console.log('All');
});

localStorage.setItem('number', 5);
localStorage.getItem('number');
// localStorage.removeItem('number');

const input = document.querySelector('input');

if (localStorage.getItem('isChecked')) {
  input.checked = true;
}

input.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
})

(function() {
  
}())