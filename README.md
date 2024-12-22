# Tohsa Front End

This is a Next.js project for the Tohsa front end application.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Modify Page Content](#how-to-modify-page-content)
- [All Pages in Website](#all-pages-in-website)
- [Deploy](#Deployment)
- [Learn More](#learn-more)

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system (version 14 or higher).

### Installation

1. Clone this repository:

```bash
git clone https://github.com/maheralayoubi/tohsa-front-end.git
```

2. Navigate to the project directory:

```bash
cd tohsa-front-end
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open http://localhost:3000 with your browser to see the result.

## Project Structure

The project follows a standard Next.js structure with the following main directories:

#### app/

- Contains the main pages and components of the application.
- Every folder represents a route page of this site

### all-pages/

- Contains all the source code of the application.
- Contains several folders where each folder represents a page components and contains :

#### 1. index.tsx :

- This file is the main file of the page and render all page sections .

#### 2. sections/

- This folder for all sections components of the page.
- Contain components folder that contain some components that used in sections for the same page

#### 3. data/

- Contain all static data in json file for page .

### DB/

- Contains the dynamic data of the application.
- Each json file contain dummy data for some pages .

### global-components/

- Contains reusable UI components from many pages .

### public/

- Static assets such as images and fonts

## How to Modify Page Content

if you need to modify page data like blogs data or news data or others , go to DB folder and choose json file that you want to modify it and change contant as you prefer

note: you should adhear to the structure of the json data file for not causing problem is the process of get and display data
note: add the valid src for images that you modify it

## All Pages in Website

- /
- /about
- /contact-us
- /content/:id (like /content/1 /content/2 ...)
- /home-1
- /home-2
- /home-3
- /home-4 (the same of /)
- /learn
- /news
- /news/:id (like /news/1 /news/2 ...)
- /ontologies
- /privacy-policy
- /profile/:id (like /profile/1 /profile/2 ...)
- /projects
- /projects/:id (like /projects/1 /projects/2 ...)
- /search

## Deployment

After making modifications to the project, you'll need to rebuild and redeploy the application. Here's how to do it:

### Rebuilding the Project

To ensure all changes are applied correctly, you must rebuild the project before deploying. This process checks for any errors in your code.

1. Rebuild the project using the following command:

```bash
npm run build
```

This command will:

- Compile TypeScript files
- Process CSS and JavaScript
- Optimize assets
- Check for syntax errors and other issues

2. After successful completion of the build process, deploy files to your server.

### Important Notes

- Always run `npm run build` before deploying to catch any potential errors early.
- Importance of `npm run build`: This step is crucial for optimizing your application's performance and ensuring a smooth user experience in production.
- Error Checking: The build process includes checks to identify and prevent potential issues that could arise in the production environment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

an INDEX file, and the sections and folder for fixed data. The index file .
