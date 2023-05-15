# flask + vite + svelte

This is a plain starter project for a Flask app with a Svelte frontend. You should have Node, Python, and Pip installed before starting.

Project inspired by and forked from [pkage/flask-svelte-vite](https://github.com/pkage/flask-svelte-vite)

If you're unfamiliar with Svelte, you can find some notes in `/frontend/README.md` and the [Svelte docs](https://svelte.dev/docs). If you're learning Svelte, you can make use of the official interactive Svelte tutorial [here](https://svelte.dev/tutorial/basics).

## Setup

Clone this repo without git history using Degit.

```sh
npx degit OllieJT/flask-svelte-vite your-project-name
cd your-project-name
```

Install svelte dependencies

```sh
cd frontend
npm install
```

## Development

# Backend

The Flask app serves files from the `/frontend/dist/` directory. This means the frontend must either be built before the backend can serve it, or in development mode.

### Frontend

For all intents and purposes, the frontend is a standalone Svelte app. You should `cd` into the project and run commands from there when working on the frontend.

#### Scripts

| Script                | Description                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`         | Starts the development server using Vite, enabling hot-module replacement and other development features.                                                  |
| `npm run build`       | Builds the project for production use, optimizing and minifying the code for deployment.                                                                   |
| `npm run preview`     | Serves the built version of your site for previewing purposes, simulating a production deployment.                                                         |
| `npm run check`       | Runs a checks on the Svelte components in the project for best-practices such as accesibility issues.                                                      |
| `npm run check:watch` | Same as `check` but in watch mode, meaning it will continually check your code as you make changes.                                                        |
| `npm run lint`        | Checks if the codebase adheres to the formatting rules specified by Prettier and ESLint, both are tools to enforce code style and find potential problems. |
| `npm run format`      | Formats the codebase according to the rules specified by Prettier, automatically fixing any formatting inconsistencies.                                    |
| `npm run test`        | Runs the tests for the project using Vitest, a test runner optimized for Vite.                                                                             |
