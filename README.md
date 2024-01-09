This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

1. create the development Postgress db:

install postgresql via brew [postgres official docs](https://wiki.postgresql.org/wiki/Homebrew)

start up / stop / restart the service:

```
  brew services start postgresql
  brew services stop postgresql
  brew services restart postgresql
```

or homebrew based postgres install you may need to start with:

```
$ /opt/homebrew/Cellar/postgresql\@14/14.7.reinstall/bin/createuser -s postgres
```

Then with your initial user you can create the role for paam and the paam dev db:

```
psql -d postgres -U postgres or psql -d postgres

CREATE ROLE paam WITH PASSWORD 'paam';
ALTER ROLE "paam" with LOGIN CREATEDB;
CREATE DATABASE aa_dev;
GRANT ALL PRIVILEGES ON DATABASE aa_dev to paam;
```

then add this to the .env:

```
DATABASE_URL="postgresql://paam:paam@localhost:5432paa_dev?schema=public&connection_limit=1"`
```

Remember to update the user name / password / db location if your set up differed from step 1

#### Debugging postgres setup

if you where like me and updating to the latest version of postgres via hombrew youll see the following

```
jtyler@jesse:~ $ psql
psql: error: connection to server on socket "/tmp/.s.PGSQL.5432" failed: No such file or directory
	Is the server running locally and accepting connections on that socket?

jtyler@jesse:~ $ brew services info postgresql
postgresql@14 (homebrew.mxcl.postgresql@14)
Running: ✘
Loaded: ✔
Schedulable: ✘

jtyler@jesse:~ $ brew services list
Name          Status     User   File
postgresql@14 error  512 jtyler ~/Library/LaunchAgents/homebrew.mxcl.postgresql@14.plist
redis         none
```

this is because the maintainers updated the formula from just `postgres` to `postgres@<version>`. you will have to move your old dbs over:

```
  mv /usr/local/var/postgres /usr/local/var/postgresql@14
```

then you should be able to start the service up again.

2. in the project root, run

```
yarn install
```

3. Configure the .env files from the templates
   And add the appropriate secrets provided by @jtyler-dev.

4. Initialize the db
   under `packages/paam-prisma` run the following:

```
yarn run db:push
yarn run db:generate
yarn run db:seed (optional: puts seed data into you dev)
```

this pushes the `packages/paam-prisma/prisma/schema.prisma` definitions to the db and then
generates the prisma client that gives us access to all the features that [prisma](https://www.prisma.io/)
has to offer.

You will have to re-run `db:generate` if you update the db or its schema before you can use it.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Setup

1. create the development Postgress db:

On a fresh, homebrew based postgres install you may need to start with:

```
$ /opt/homebrew/Cellar/postgresql\@14/14.7.reinstall/bin/createuser -s postgres
```

Then with your initial user you can create the role for paam and the paam dev db:

```
psql -d postgres -U postgres

CREATE ROLE paam WITH PASSWORD 'paam';
ALTER ROLE "paam" with LOGIN CREATEDB;
CREATE DATABASE paam_dev;
GRANT ALL PRIVILEGES ON DATABASE paam_dev to paam;
```

```

```
