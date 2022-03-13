import * as React from 'react';

// Routes
import RoutesMain from 'routes/Routes';

//// Components
import Spinner from 'components/Spinner';

export default function App() {
  return (
    <>
      <RoutesMain />

      <Spinner />
    </>
  );
}
