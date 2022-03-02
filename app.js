// search button
const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = "";
    // get url
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
// disply phone
const displayPhone = (phones) => {
    const container = document.getElementById('display-phone');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                    <img src="${phone.image}" class=" w-75 card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.brand}</h5>
                        <p class="card-text">${phone.phone_name}</p>
                        <button onclick="showDetails()" class="bg-success px-3 text-white py-1">DETAILS</button>
                    </div>
                </div>
        `;
        container.appendChild(div);

    });
}

// show details
const showDetails = () => {
    const container = document.getElementById('show-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
             <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text"></p>
                  <p class="card-text"></p>
                  <p class="card-text"></p>
                  <p class="card-text"></p>
                </div>
`
}