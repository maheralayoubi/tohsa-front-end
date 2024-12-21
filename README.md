# Tohsa Front End

This is a Next.js project for the Tohsa front end application.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deploy](#deploy)
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

Contains the main pages and components of the application.

### all-pages/

Contains all the source code of the application.

### DB/

- Contains the dynamic data of the application.
- Each json file contain dummy data

#### global-components/

Reusable UI components.

### public/

Static assets such as images and fonts

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
