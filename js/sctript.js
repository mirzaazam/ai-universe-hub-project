
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
        //daynamic card insert to divchild
        divChild.innerHTML = `
        <div class="card h-100 p-3">
                <img class="rounded-3" src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
        </div>

        `;
        container.appendChild(divChild);
    })
}


loadAllData();