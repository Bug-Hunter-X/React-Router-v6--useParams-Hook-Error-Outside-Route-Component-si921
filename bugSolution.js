The correct approach involves using `useParams` only within a component rendered within a route:

```javascript
// Correct usage
import { useParams } from 'react-router-dom';
import { useRoutes, Route, Routes } from 'react-router-dom';

const MyComponent = () => {
  const params = useParams();
  return <div>Param: {params.id}</div>;
};

const App = () => {
  let element = useRoutes([
    {path: '/:id', element: <MyComponent/>},
    {path: '/', element: <div>Home</div>}
  ]);
  return element;
}

// ... rest of the App.js
```

By placing `MyComponent` within a route, the `useParams` hook now has access to the routing context, and the error is resolved.  If you need to access parameters from elsewhere in your application, consider passing the parameters down as props from a component within a route.