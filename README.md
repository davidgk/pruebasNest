#Pruebas en Nest

The app contains a default admin user

## Run it locally 

1. Install Node.js (lts-version v14.16.0)
2. Install yarn if not present curl -o- -L https://yarnpkg.com/install.sh | bash (macOS and generic Unix environments)
3. Install required dependencies by yarn
4. cp .example.env .env.dev
5. cp .example.env.test .env.test
6. Create your DB (i.e. psql for Postgres: psql -U <user> -h <host> -c "create database <db name>;") with same name as your .env file. into your docker db instance
   1. On bash ( I recommend to add it in your bash aliases)
      1. ````
         cd project_path
         source ./prj_aliases/prueba_base_aliases
         debug
         ````
7.- Run migrations:
```
   npm run migrations:run:dev
```
8.- Default admin user is adm@adm.com and pass is adm, create your user and change this user admin permissions to not allow to log in with it and use yours


## About migrations:

don't forget to install typeorm-cli:



```
npm i typeorm-cli
```

