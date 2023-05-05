// const button = document.querySelector('button');

// let model;
// let backdrop;

// button.addEventListener('click', showmodelhandler);

// function showmodelhandler(){
//     if (model){
//         return;
//     }
//     model = document.createElement('div');
//     model.className = 'model';

//     const modeltext = document.createElement('p');
//     modeltext.textContent = 'Are You Sure?';

//     const modelcancelaction = document.createElement('button');
//     modelcancelaction.textContent = 'No';
//     modelcancelaction.className = 'btn-no';
//     modelcancelaction.addEventListener('click', closemodel);

//     const modelyesaction = document.createElement('button');
//     modelyesaction.textContent = 'Yes';
//     modelyesaction.className = 'btn-yes';
//     modelyesaction.addEventListener('click', closemodel);

// model.append(modeltext);
// model.append(modelcancelaction);
// model.append(modelyesaction);

// document.body.append(model);

// backdrop = document.createElement('div');
// backdrop.className = 'backdrop';
// backdrop.addEventListener('click', closemodel);
// document.body.append(backdrop);

// }

// function closemodel(){
//     model.remove();
//     model = null;

//     backdrop.remove();
//     backdrop = null;
// }

const button = document.querySelector('button');
console.log(button);

let model;
let backdrop;

button.addEventListener('click', showmodelhandler);

function showmodelhandler(){
    if (model){
        return;
    }
    let alingment = document.createElement('div');
    alingment.className = 'alingment';
    alingment.style.display = "block";

    model = document.createElement('div');
    model.className = 'model';

    const modeltext = document.createElement('p');
    modeltext.textContent = 'Write Topic Name';
    
    const writetopic = document.createElement('input');
    writetopic.id = 'writetopic';

    const modelcancelaction = document.createElement('button');
    modelcancelaction.textContent = 'No';
    modelcancelaction.className = 'btn-no';
    modelcancelaction.addEventListener('click', closemodel);

    const modelyesaction = document.createElement('button');
    modelyesaction.textContent = 'Yes';
    modelyesaction.className = 'btn-yes';
    modelyesaction.addEventListener('click', addedtopic);

    alingment.append(modeltext);
    alingment.append(writetopic);
    model.append(alingment);
model.append(modelcancelaction);
model.append(modelyesaction);

document.body.append(model);

backdrop = document.createElement('div');
backdrop.className = 'backdrop';
backdrop.addEventListener('click', closemodel);
document.body.append(backdrop);

}

function closemodel(){
    model.remove();
    model = null;

    backdrop.remove();
    backdrop = null;
}
function addedtopic(){
    let topiccontent = document.getElementById("writetopic").value;
    let addedtopiccontent = document.createTextNode(topiccontent);
    let addedtopiccontentli = document.createElement('li');
    let orderlist = document.getElementById("orderlist");
    addedtopiccontentli.append(addedtopiccontent);
    orderlist.append(addedtopiccontentli);
    // console.log(orderlist);
    model.remove();
    model = null;

    backdrop.remove();
    backdrop = null;

}