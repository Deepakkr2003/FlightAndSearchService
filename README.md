# Welcome to flights service

## Porject sertup
- clone the project on your local
- Execut `npm install` on the same path as of your root directory of he downloaded project
- Create a `.env` file in the root directory and add the following environment variable 
    - `PORT=3000`
- Inside the `src/config`  folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_dB_LOGIN_NAME>,
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```


## DB Design
  - Airplane Table
  - Flight 
  - City Table
  - Airport

  - A filght belongs to an airplane but one airplane can be used in multiple flight
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport



## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)