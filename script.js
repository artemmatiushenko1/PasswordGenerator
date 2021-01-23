'use strict';

const btnsRow = document.querySelector('.btns-length');
const run = document.querySelector('.run');
const resultField = document.querySelector('.inner-result');
const copyBtn = document.querySelector('.copy');
const result = document.querySelector('.result');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
let length = null;

const generatePassword = function (length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789[]!?@#$%^&*()_+=';
    let result = '';

    while (result.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

btnsRow.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
        const pressed = e.target;
        const siblings = pressed.closest('.btns-length').querySelectorAll('.btn');
        siblings.forEach(btn => {
            if (btn !== pressed) {
                btn.classList.remove('active');
                btn.classList.add('regular');
            }
        })

        pressed.classList.remove('regular');
        pressed.classList.add('active');
        length = +pressed.getAttribute('id');
        result.value = '';
    }
});

run.addEventListener('click', function () {
    if (length === null) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        return;
    }

    result.value = generatePassword(length);
});

copyBtn.addEventListener('click', function () {
    result.select();
    document.execCommand('copy');
});

close.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('click')
})