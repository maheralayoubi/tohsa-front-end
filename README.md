# Tohsa Front End

This is a Next.js project for the Tohsa front end application.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Modifying Page Content](#modifying-page-content)
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

- Houses the core pages and components of the application.
- Each folder corresponds to a specific route, representing individual pages of the website.

### all-pages/

- Contains all the source code of the application.
- Each folder represents a page with the following structure:

#### index.tsx :

- Main file rendering all page sections

#### 2. sections/

- This folder for all sections components of the page.
- Contain components folder that contain some components that used in sections for the same page

#### 3. data/

- Stores static JSON data for the page

### DB/

- Contains the dynamic data of the application.
- Each json file contain dummy data for some pages .

### global-components/

- Contains reusable UI components from many pages .

### public/

- Static assets such as images and fonts

## Modifying Page Content

To modify page data:

1. Navigate to the `DB` folder in your project directory.
2. Select the appropriate JSON file corresponding to the data you wish to modify (e.g., blogs, news, etc.).
3. Edit the content within the file as needed.

Important notes:

- Adhere strictly to the existing JSON structure to avoid complications during data retrieval and display.
- Ensure that any modified image sources are valid and accessible.

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
