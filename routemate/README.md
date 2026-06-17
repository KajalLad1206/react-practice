# RouteMate

RouteMate is a React Router practical for learning nested routes, route params, query params, navigation, and fallback routing.

## First Step

Create the app with Create React App:

```bash
npx create-react-app routemate
cd routemate
npm install react-router-dom
```

## What This App Demonstrates

- `useNavigate` for programmatic navigation, used in the Contact page to send the user back to `/`
- `navigate()` for redirect-style routing after a button click or form action
- `Outlet` for rendering nested child routes inside the parent Contact route
- `useSearchParams` for reading query string values from the URL
- `useLocation` for inspecting the current location object
- `useParams` for reading dynamic route values like `:id`
- `Navigate` for route redirection
- `*` wildcard routing for the page-not-found screen

## Route Structure

The app currently includes these routes:

- `/` - Home
- `/products` - Product list
- `/products/:id` - Product detail page
- `/contact` - Parent contact page with nested routes
- `/contact/in` - Contact In
- `/contact/ca` - Contact Ca
- `/contact/us` - Contact Us
- `/admin` - Admin route
- `*` - Page not found

## How The Hooks Are Used

### `useNavigate`

The Contact page uses `useNavigate` to move the user back to the home page when the submit button is clicked.

### `Outlet`

The Contact page renders an `Outlet`, so its nested routes appear inside the parent page layout.

### `useSearchParams`

The Product List page reads URL search parameters so it can work with query strings such as `?keyword=phone`.

### `useParams`

The Product Detail page reads the dynamic `id` from `/products/:id`.

## Available Scripts

In the project directory, run:

### `npm start`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production in the `build` folder.

### `npm run eject`

Copies the build configuration into your project. This is permanent, so use it only if you need full control.

## Notes

This practical is focused on React Router concepts and is a good practice setup for nested routing, redirects, and URL-based state.
