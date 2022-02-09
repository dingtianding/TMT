export default {
    search: function(stockName, searchLimit, sortBy){
        fetch(`http://www.reddit.com/search.json?q=${stockName}&sort=hot&limit=10`)
        .then(res => res.json())
        .then(data => data.data.children.map(data =>
            data.data))
            .catch(err => console.log(err));
    }
};