## JS Project Proposal: Tesla, Media and ~~Tweets~~Reddit(TMT)
Live Link : https://dingtianding.github.io/TMT/


--Background--
Tesla, Media and Tweets(TMT) is a data visualization project that creates a stock chart of a popular stock, and attempts to analyze direct and indirect relationship between current events as well as the CEO's twitter acitivty. The site will visualize Stock prices, and it will collect list of major events from media and Elon Musk Tweets. The graph will be marked differently according the type of current events and there will be filter for events types. It will create a ranking of the most significant events while incorporating some simple price analysis.

Update: Due to issue with the Twitter API and News API is now paid, Reddit API is now used instead to obtain current events. All reference to tweets will be used toward reddit posts.

--Functionality & MVPs--
With the TMT, users will be able to:

1. Observe Tesla's stock price in chart over a period of time
2. Obtain the latest current events via a News API.
3. 

In addition, this project will include:

An About modal describing the consideration when determining current events's impact on the stock price.
A production README




Nav links include links to this project's Github repo, my LinkedIn and AngelList, and the About modal.
Stock Filter will include Current Events(may be sub-groups), Major Tweets, and Reset buttons to reset the filter.
On the right, there will be clickable rectangles used to toggle between light and dark mode(Robinhood's two theme).
On the left, three clickable shapes will be used to toggle between the types of stock graphs and maybe additional stock prices(Daily High, Daily Low, Open, Close, etc) (Bonus)


--Technologies, Libraries, APIs--
This project will be implemented with the following technologies:

- **JavaScript**: Overall project was built with JavaScript, following are some highlights:

  - Fetch and Promises: manage asynchronous operation from multiple APIs and its resulting value.
  - Document Object Model(DOM) for element manipulations.
  - EventTarget: objects that can receive events and may have listeners for them.
  - Modals: dialog box/popup window that is displayed on top of the current page.

- **D3.js library**: Render dynamic and interactive charts upon every new search.

    -Chart.js also uses Fetch API for accessing and manipulating parts of the HTTP pipeline, and to create a synchronous functions
    -Chart.js Use Canvas API to draw graphic in conjunction customize graph

- **IEXcloud and FinHub APIs**: - stock data APIs for stock data including histirical price, analyst recommendations and earnings.

- **HTML and CSS**: for web structure and styling.

- **Webpack**: for bundle JavaScript files.

- **NPM**: to manage project dependencies.

---


