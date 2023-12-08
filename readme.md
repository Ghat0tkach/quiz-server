
## Quiz Server 


to run the server

``npm install``
``nodemon index.js``


create .env file and assign values of
PORT=5000
DATABASE_URL="your mongodb url"
ACCESS_TOKEN_SECRET="any combination of numbers letter"
REFRESH_TOKEN_SECRET="any combination of numbers letter "


## Authentication routes

To test authentication routes

go to postman/thunder Client
## For login 

``POST http://localhost:8000/api/v1/auth/login``
login should be in this format
```
{
  "email":"your username"
  "password":"your password"

}
```

TO register
``POST http://localhost:8000/api/v1/auth/register``

{
  "name":"your name"
  "email":"your email"
  "password":"your password"
  "branch":"your branch"
  "domain":"your domain"

  
}











## To post technical questions
Questions are in technical.js [edit the question to upload them]

``POST http://localhost:8000/api/v1/question/technical``

## To view and delete
``GET http://localhost:8000/api/v1/question/technical``
``DELETE http://localhost:8000/api/v1/question/technical```

## To post management questions
Questions are in management.js[edit the question to upload them]

``POST http://localhost:8000/api/v1/question/management``


## To view and delete
``GET http://localhost:8000/api/v1/question/management``
``DELETE http://localhost:8000/api/v1/question/management``
