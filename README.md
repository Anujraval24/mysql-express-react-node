# mysql-express-react-node

> MySQL ( Sequelize ORM ) + Express JS + React JS ( Tailwind CSS + Typescript ) + Node JS

### Steps to run mysql-express-react-node-backend

1. yarn add global sequelize-cli
2. yarn
3. yarn migration
4. cp .env .env-example
5. yarn dev

##### Config MYSQL | Sequelize

1. npx sequelize-cli init
2. npx sequelize-cli db:create
3. npx sequelize-cli db:migrate
4. npx sequelize-cli db:migrate:undo
5. npx sequelize-cli seed:generate --name User
