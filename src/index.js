// import reddit from './scripts/reddit';

// const searchFrom = document.querySelector('.search');
// const input = document.querySelector('.input');
// const newsList = document.querySelector('.news-list');
// // const tweetsList = document.querySelector('.tweets-list');
// const redditsList = document.querySelector('.reddits-list');

// searchFrom.addEventListener('submit', el => { 
//     const stockName = input.value;
//     const sortBy = document.querySelector('input [name="sortby"]:checked').value;

//     const searchLimit = document.getElementsById('limit').value;

//     if (input.value ===''){
//         alert('Please enter a stock!')
//         return
//       }
//       input.value = '';

//       reddit.search(stockName, searchLimit, sortBy).then(results => {
//           console.log(results);
//       })
//     //   news.search(stockName)

//       el.preventDefault();

// })