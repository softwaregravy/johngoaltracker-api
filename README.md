# Prerequisite

<div align="center">

<a target="_blank" href="https://nodejs.org/en">![Node.js version](https://img.shields.io/badge/Node.js-18.5.0-black?logo=nodedotjs)</a>
<a target="_blank" href="https://www.npmjs.com/">![npm Version](https://img.shields.io/badge/npm-9.5.0-black?logo=npm)</a>
<a target="_blank" href="https://www.docker.com/get-started/">![Docker Desktop Version](https://img.shields.io/badge/Docker%20Desktop-4.19.0-black?logo=docker)</a>

</div>

<br/>

# Installation

Clone and navigate to the repository root.

Run the following commands

```bash
# Initialise third parties in Docker
npm run third-party:initialize

# Define environment variables
echo "PORT=3099" > .env
echo "DATABASE_URL=postgres://root:root@localhost:5442/api" >> .env
echo "AUTHENTICATION_SECRET=your-secret" >> .env
echo "CLIENT_BASE_URL=http://localhost:8099" >> .env

# Install dependencies and initialise the database
npm install
npm run database:initialize
npm run database:migration:run
```

<br/>

# Development

```bash
npm run dev
```

## Debugging

You can attach the VSCode debugger.

## Migration

The database schema is automatically synchronized during local development.

To prepare a migration for your production database. Update the `DATABASE_URL` with the production data url so that TypeORM can compare the entities of the code base with the schema of your production database.

Once updated, run the following commands

```bash
# Generate migration files
npm run database:migration:generate

# Apply migration files
npm run database:migration:run
```

<br/>

# Third Parties

## <a target="_blank" href="http://localhost:5052/login">PgAdmin</a>

<a target="_blank" href="http://localhost:5052/login">![PgAdmin Version](https://img.shields.io/badge/PgAdmin_5.5.0-Open-blue?logo=postgresql)</a>

View and query your local database.

### Authentication

| Credential        | Value           |
| ----------------- | --------------- |
| User email        | admin@admin.com |
| User password     | root            |
| Database password | root            |

### Register your server

| Key                            | Value                                 |
| ------------------------------ | ------------------------------------- |
| General > Name                 | `EY7cjw-johngoaltracker`            |
| Connection > Host name/address | `EY7cjw-johngoaltracker-postgresql` |
| Connection > Port              | 5432                                  |
| Connection > Username          | root                                  |
| Connection > Password          | root                                  |

<br/>

## <a target="_blank" href="http://localhost:8022">Mailpit</a>

<a target="_blank" href="http://localhost:8022">![Mailpit Version](https://img.shields.io/badge/Mailpit-Open-blue?logo=mail)</a>

Local email SMTP where all emails are sent.

# Support

Post a message in the channel <a target="_blank" href="https://discord.gg/n9ezQtmy">`#support`</a> of the Marblism Discord server.
