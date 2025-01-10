# React Router v6 useParams Hook Error

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6 outside of a route component.  The `useParams` hook requires the routing context provided by React Router, which is not available globally.

## Problem

The `useParams` hook is designed to be used within components rendered by React Router's `<Route>` or `<Routes>` components. Attempting to access it outside of this context results in an error because the routing context is undefined.

## Solution

The solution involves ensuring the `useParams` hook is used within a component rendered within a route. This ensures the routing context is available.

## Usage

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

Observe the error in `bug.js` and its resolution in `bugSolution.js`.