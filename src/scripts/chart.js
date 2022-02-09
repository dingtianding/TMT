const stockChart = (data) => {

    function retrieve(el){
    if (input.value ===''){
        alert('Please enter a stock!')
        return
    }
    newsList.innerHTML = ''
    
    el.preventDefault()

    const apiKey = '9803bf19a56d4f2784a06878e6855667'
    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{

        data.articles.forEach(article => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank')
        a.textContent = article.title
        li.appendChild(a);
        newsList.appendChild(li);
        })
    }).catch((error)=>{
        console.log(error)
    })
    }
}
export default stockChart