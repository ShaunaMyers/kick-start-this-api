# kick-start-this-api

# Turing Tip Jar API

This API was built with Express with a PostgreSQL database for the project [Kickstart This](https://github.com/ShaunaMyers/kick-start-this).

The API is deployed on Heroku: [here](https://kickstartthisapi.herokuapp.com/)

Fetches can be made directly from the link above or this repo can be installed and run locally 

## Badges 

<p style="text-align: center;"> 
    <img alt="JavaScript Badge" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
    <img alt="Express Badge" src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat-square" />
    <img alt="Express Badge" src="https://img.shields.io/badge/PostgreSQL-4169e1?logo=postgresql&logoColor=000&style=flat-square" />
</p>


## Features

- Allows clients to: 
  - fetch all products from a PostgreSQL Database hosted on Heroku 
  - post a new product
  - delete a tip
  - add a new product or update an existing product- funds raised 
  
## Installation

Clone the repository and install dependencies

```szh 
git clone git@github.com:ShaunaMyers/kick-start-this.git
cd kick-start-this
npm install 
```

## Deployment

To deploy, `cd` into the project folder and run

```zsh
npm start
``` 

Fetches can be made from the following endpoints: 

## Get Endpoint

| Purpose   | URL      | Verb   | Request Body | Sample Response |
| :-------- | :------- | :------- | :------------ | :------------ |
| Get all tips | / | GET |  N/A | `{"rows": [{"product_id": 1, "title": "Baby Mop", "description": "The Baby Mop is a onesie with mop pieces attached to help crawling babies clean and polish floors.", "funds_goal": 15000, "funds_raised": 2000, "images": "["https://www.awesomeinventions.com/wp-content/uploads/2019/11/baby-mop-onesie-red.jpg, "https://i.dailymail.co.uk/i/pix/2012/11/02/article-2226731-15CF1841000005DC-668_634x779.jpg", "https://i.pinimg.com/originals/2b/b7/73/2bb7735e1f509606893484dc97baec20.jpg"]", "creator_name": "Buddy McGurck", "creator_email": "buddy_is_the_best@gmail.com" |

## Author

- [@Shauna Meyers](https://github.com/ShaunaMyers)  
