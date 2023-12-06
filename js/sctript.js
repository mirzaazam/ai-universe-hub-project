
// load all Data 
const loadAllData = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data.tools)
    const arrayData = data.data.tools;
    const sixData = arrayData.slice(0, 6);
    showAllData(sixData);
}
const showAllData = (data) => {
    //stop spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');
    //show all btn
    const showAll = document.getElementById('show-all-btn');
    showAll.classList.remove('d-none');

    //get main container
    const container = document.getElementById('div-container');

    //get for each item 
    data.forEach(item => {
        console.log(item);
        //create a div for each card show here
        const divChild = document.createElement('div');
        divChild.classList.add('col');
        //daynamic card insert to div_child
        divChild.innerHTML = `
        <div class="card h-100 p-3">
                <img class="rounded-3" src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                    <ol>
                        <li>${item.features[0]}</li>
                        <li>${item.features[1]}</li>
                        <li>${item.features[2]}</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer px-4">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>${item.name}</h4>
                        <small class="text-body-secondary"><i class="fa-regular fa-calendar"></i> ${item.published_in}</small>
                    </div>
                    <div>
                         <button onclick="modalCardValue('${encodeURIComponent(JSON.stringify(item))}')" class="card-btn">
                            <i class="fa-solid text-danger fw-semibold fa-arrow-right" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        `;
        //append div_child
        container.appendChild(divChild);
    })
}

/*------------------------
            Modal
---------------------------*/
const modalCardValue = (dataString) => {
    const data = JSON.parse(decodeURIComponent(dataString));
    console.log(data);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
                    <div class="col">
                        <div class="card border-danger-subtle modal-bg-color h-100">
                            
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <div class="d-flex">
                                    <div>
                                        <h6>Feature</h6>
                                        <ul>
                                            <li>${data.features[0]}</li>
                                            <li>${data.features[1]}</li>
                                            <li>${data.features[2]}</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h6>Feature</h6>
                                        <ul>
                                            <li>${data.features[0]}</li>
                                            <li>${data.features[1]}</li>
                                            <li>${data.features[2]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 position-relative">
                            <img src="${data.image}" class="card-img-top" alt="...">
                            <div class="position-absolute top-0 end-0 text-white w-25 bg-danger rounded-3 text-center">Hello</div>
                            <div class="card-body">
                                <h5 class="card-title">${data.name}</h5>
                                <p class="card-text">${data.published_in}</p>
                            </div>
                        </div>
                    </div>
    `;
    // console.log(data);
}


loadAllData();
//stop spinner
const spinner = document.getElementById('spinner');
spinner.classList.remove('d-none');

//show all btn
const showAll = document.getElementById('show-all-btn');
showAll.classList.add('d-none');

/*------------------------------------
    fetch data for show all btn
--------------------------------------*/

const loadData = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data.data.tools);
}
const showData = (data) => {
    //stop spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.add('d-none');

    //get main container
    const container = document.getElementById('div-container');

    //get for each item 
    data.forEach(item => {
        console.log(item);
        //create a div for each card show here
        const divChild = document.createElement('div');
        divChild.classList.add('col');
        //daynamic card insert to div_child
        divChild.innerHTML = `
        <div class="card h-100 p-3">
                <img class="rounded-3" src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                    <ol>
                        <li>${item.features[0]}</li>
                        <li>${item.features[1]}</li>
                        <li>${item.features[2]}</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer px-4">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>${item.name}</h4>
                        <small class="text-body-secondary"><i class="fa-regular fa-calendar"></i> ${item.published_in}</small>
                    </div>
                    <div>
                         <button onclick="modalCardValue('${encodeURIComponent(JSON.stringify(item))}')" class="card-btn">
                            <i class="fa-solid text-danger fw-semibold fa-arrow-right" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        `;
        //append div_child
        container.appendChild(divChild);
    })
}

/*-----------------------
        spinner
-------------------------*/
document.getElementById('show-all-btn').addEventListener('click', function () {
    //get main container
    const container = document.getElementById('div-container');
    container.innerHTML = '';

    loadData();

    //start spinner
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('d-none');

    //show all btn
    const showAll = document.getElementById('show-all-btn');
    showAll.classList.add('d-none');
})