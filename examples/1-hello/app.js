const result = document.querySelector('.result')

fetchData = async() => {
    console.log('fetch data call')
    try {
        // const { data } = await axios.get('/.netlify/functions/1-hello')
        const { data } = await axios.get('/api/1-hello')
        console.log(data)
        result.textContent = data
    }
    catch(err) {
        console.log(err.response.data)
        result.textContent = err.response.data        
    }
}

fetchData()