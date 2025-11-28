import { Suspense } from "react";
import { useState } from "react";
import { lazy } from "react";

const LazyLoadingUser = lazy(() => import('./LazyLoadingUser'));

function LazyLoading() {

  const [load, setLoad] = useState(false);

  return (
    <div>
      <h2>Lazy Loading in React Js</h2>
      {
        load ? <Suspense fallback={<h3>Loading ... ... </h3>}> <LazyLoadingUser /></Suspense> : null
      }
      <button onClick={() => setLoad(true)}>Load User</button>
    </div>
  )
}

export default LazyLoading;