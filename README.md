#Pruebas en Nest


## Para correrlo local
```
cd project_path
source ./prj_aliases/prueba_base_aliases
debug

```
1. Install Node.js (lts-version v14.16.0)
2. Install yarn if not present curl -o- -L https://yarnpkg.com/install.sh | bash (macOS and generic Unix environments)
3. Install required dependencies by yarn
4. cp .example.env .env.dev
5. cp .example.env.test .env.test
6. Create your DB (i.e. psql for Postgres: psql -U <user> -h <host> -c "create database <db name>;") with same name as your .env file. into your docker db instance
   1. On bash 
      1. ````
         cd project_path
         source ./prj_aliases/prueba_base_aliases
         debug
         ````
      

