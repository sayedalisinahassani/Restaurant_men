const pizza=document.querySelector('.pizza_request_btn');
const hamberger=document.querySelector('.hamburger_request_btn');
const beer=document.querySelector('.beer_request_btn');
const save_order=document.querySelector('ul');
const order=document.querySelector('.order')
const send_required=document.querySelector('.send_menu');
const total=document.querySelector('.total');
const complete_order=document.querySelector('.complete_order');
const card_details=document.querySelector('.card_details');
const pay_btn=document.querySelector('.pay_button');
const final=document.querySelector('.final');
const person_name=document.querySelector('.person_name');

let count=0;
// pizza Event
pizza.addEventListener('click',()=>{
    send_required.classList.remove('hidden2');
    order.classList.remove('hidden3');
    final.classList.add('hidden4');
    count+=14;
    let task=pizzaTask();
    task.innerHTML+="<span class=remove>remove</span>"
    save_order.appendChild(task);
    total.innerHTML='$'+count

})
// hamberger Event
hamberger.addEventListener('click',()=>{
    send_required.classList.remove('hidden2');
    order.classList.remove('hidden3');
    final.classList.add('hidden4');
    count+=12;
    let task=hambergerTask();
    task.innerHTML+="<span class=remove>remove</span>"
    save_order.appendChild(task);
    total.innerHTML='$'+count
})
// beer Event
beer.addEventListener('click',()=>{
    send_required.classList.remove('hidden2')
    order.classList.remove('hidden3');
    final.classList.add('hidden4');
    count+=12;
    let task=beerTask();
    task.innerHTML+="<span class=remove>remove</span>"
    save_order.appendChild(task);
    total.innerHTML='$'+count
})
// remove function

function remove_btn(e){
    if(e.target.nodeName==='SPAN'){
        e.target.parentElement.style='display: none';
    };
}
// add pizza element
function pizzaTask(){
    let li=document.createElement('li');
    li.innerHTML=`pizza <span class=price>$14</span>`;
    return li;
}
// add hamburger element
function hambergerTask(){
    let li=document.createElement('li');
    li.innerHTML=`hamburger <span class=price>$12</span>`;
    return li;
}
// add beer element
function beerTask(){
    let li=document.createElement('li');
    li.innerHTML=`beer <span class=price>$12</span>`;
    return li;
}
// complete order
complete_order.addEventListener('click',()=>{
    card_details.classList.remove('hidden');
})
// pay_btn
pay_btn.addEventListener('click',function(){
    const name_btn=String(document.querySelector('.name_btn').value);
    const number_btn=Number(document.querySelector('.number_btn').value);
    const text_btn=String(document.querySelector('.text_btn').value);
    if(name_btn!=='' && number_btn!=='' && text_btn !==''){
        person_name.textContent=`thanks, ${name_btn} your order is on its way!`
        card_details.classList.add('hidden');
        final.classList.remove('hidden4');
        send_required.classList.add('hidden2');
        order.classList.add('hidden3');
        save_order.innerHTML='';
        count=0;
    };
})
document.addEventListener('click',function(event){
    if(!card_details.contains(event.target) && event.target!==complete_order ){
        card_details.classList.add('hidden')
    }
})

save_order.addEventListener('click',remove_btn);

