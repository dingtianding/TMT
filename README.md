## JS Project Proposal: Tesla, Media and Tweets(TMT)
Live Link : https://dingtianding.github.io/TMT/


--Background--
Tesla, Media and Tweets(TMT) is a data visualization project that creates a stock chart of a popular stock, and attempts to analyze direct and indirect relationship between current events as well as the CEO's twitter acitivty. The site will visualize Stock prices, and it will collect list of major events from media and Elon Musk Tweets. The graph will be marked differently according the type of current events and there will be filter for events types. It will create a ranking of the most significant events while incorporating some simple price analysis.


--Functionality & MVPs--
With the TMT, users will be able to:

1. Observe Tesla's stock price in chart over a period of time
2. Select the type of factors(events or tweets) to be marked up on the chart
3. Rank the biggest gainer and loser dates and link to the events or tweets on the dates.

In addition, this project will include:

An About modal describing the consideration when determining current events's impact on the stock price.
A production README

--Wireframes--
![Wireframe](https://github.com/dingtianding/JS_Project/blob/main/src/images/WireFrame.jpeg)


Nav links include links to this project's Github repo, my LinkedIn and AngelList, and the About modal.
Stock Filter will include Current Events(may be sub-groups), Major Tweets, and Reset buttons to reset the filter.
On the right, there will be clickable rectangles used to toggle between light and dark mode(Robinhood's two theme).
On the left, three clickable shapes will be used to toggle between the types of stock graphs and maybe additional stock prices(Daily High, Daily Low, Open, Close, etc) (Bonus)


--Technologies, Libraries, APIs--
This project will be implemented with the following technologies:

The IEX Cloud API to pull market datas for the stock
The Chart.js API to render the stock chart
    -Chart.js also uses Fetch API for accessing and manipulating parts of the HTTP pipeline, and to create a synchronous functions
    -Chart.js Use Canvas API to draw graphic in conjunction customize graph
Webpack to bundle and transpile the source JavaScript code
npm to manage project dependencies

--Implementation Timeline--
NB:

Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Get sample charts to show up on the screen with chart.js and d3. Spend time getting comfortable with the IEX Cloud API, and try to pull some market data in order to decide what to include on the stock page.

Monday: Dedicate this day toward implementing the Market Data properly on the chart visualization, and add any additional relative market data. Implement a professional visual of the chart and make it pretty.

Tuesday: Compile list of current events related to the stock with maybe a News Search API and CEO tweets. Create link to relevent News article or specific tweets and create mark up on the chart.

Wednesday: Finish implementing current event's mark up if I have not finished. Then to create a page to rank the Biggest Gainer and Loser dates and the respective events that has occured.

Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

-- Bonus features --
There are many directions this stock visualization could eventually go. Some anticipated updates are:

Add options for other stocks and maybe even to pull CyptoCoins Prices
Automatically dentify major increase or major decrease in price.(+/-10%)
Filter for current events that occured on those dates.
Set up criteria for stock's risk rating similar to S&P and Moody's. 
