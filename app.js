'use strict'

const btn = document.querySelector('#btn');
const quotespan = document.querySelector('#quotespan');
const authorspan = document.querySelector('#authorspan');
const copy = document.querySelector('#copy');
const volume = document.querySelector('#volume');
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');

loderHidden();

btn.addEventListener('click',async ()=>{
    loderVisible();
    const res = await fetch('https://quotable.io/random');
    const data = await res.json();
    quotespan.innerText = data.content;
    authorspan.innerText = data.author;
    loderHidden();
});

copy.addEventListener('click',()=>
{
    navigator.clipboard.writeText(quotespan.innerText);
});

volume.addEventListener('click',()=>
{
    let speech = new SpeechSynthesisUtterance(quotespan.innerText);
    speechSynthesis.speak(speech);
});

function loderHidden()
{
    loader.hidden = true;
    container.hidden = false;
}
function loderVisible()
{
    loader.hidden = false;
    container.hidden = true;
}