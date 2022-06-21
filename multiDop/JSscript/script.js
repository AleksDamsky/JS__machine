let addButton = document.querySelector('.Button');
let addInput = document.querySelector('.Input');
let addList = document.querySelector('.cases')

let newArr = [];

if(localStorage.getItem('todo')){
    newArr = JSON.parse(localStorage.getItem('todo'))
    displayList();
};

addButton.addEventListener('click', () =>{

    let newObj = {
        massage : addInput.value,
        checked : false,
    }

    newArr.push(newObj);

    displayList();

    localStorage.setItem('todo', JSON.stringify(newArr));
})


function displayList(){

    let displayCases = '';

    newArr.forEach(function(item, i){
        displayCases += `
        <li>
        <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
        <label for="item_${i}">${item.massage}</label>
        </li>
        `;

        addList.innerHTML = displayCases;
    })

}


addList.addEventListener('changes',(event) =>{
    let addEvent = event.target.getAttribute('.id');
})