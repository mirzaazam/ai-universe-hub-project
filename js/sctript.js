
// load all Data 
const loadAllData = async () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data.tools)
    showAllData(data.data.tools);
}
const showAllData = (data) => {
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
                         <button class="card-btn">
                            <i class="fa-solid text-danger fw-semibold fa-arrow-right" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        `;
        container.appendChild(divChild);
    })
}


loadAllData();