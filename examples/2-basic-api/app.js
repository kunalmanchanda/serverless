const result = document.querySelector('.result')

const fetchData = async () => {
    console.log('second example')
    try {
        const { data } = await axios.get('/api/2-basic-api')
        // result.textContent = JSON.stringify(data)
        console.log(data)
        const products = data.map((product) => {
            const {image:{url}, name, price} = product
            return `<article class="product">
            <img src= "${url}" alt="${name}"/>
            <div class="info">
                <h5>${name}</h5>
                <h5 class="price">$${price}</h5>
            </div>
            </article>`
        }).join(' ')
        result.innerHTML = products
    }
    catch(err) {
        console.log(err)
    }
}

fetchData()