<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

PRS Welcome || License MIT

Welcome to PGQL! Our product allows you to seamlessly visualize your SQL database tables and perform edits right in the application. No more writing queries.

## Getting Started

Requirements

You'll need a Postgres database with it's respective URI. After logging in, input your URI in the provided space to get started.

That's it!

## Features

PostGres-Query-Less(PGQL) is an open-source web application that can be used to connect to any cloud PostgreSQL database to visualize and adjust it’s content. We strive to provide our users with a simple interface to communicate with their cloud databases through onClick functionality. When users make changes in their visualized database, queries are automated to adjust their databases directly in real-time.

Currently the application supports UPDATE and DELETE queries. Once a URI is inputted, our application visualizes all the tables and populates the data into interactive table cells. These cells can be updated, onClick, and once a change is made the user can press ENTER to execute built in queries that update your database in real-time. To delete rows, users can change the primary key value of the target row to “-1” and press ENTER. 


Making Edits

Simply click onto a cell and edit as you like. Queries are made after each keystroke, so it isn't necessary to press enter or click out of the cell to double check that a query to update your data was made.

//maybe add header for filtering your data if we can push that feature on time//

Resources

Built on //list technologies here//

Creators: insert our names hyperlinked to our github here
