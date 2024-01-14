import { lazy, Suspense } from "react";

const LazyComponentCall = lazy(() => import("./LazyComponent.js"));

export const MainComponent = () => {
  return (
    <div>
      <p>Main component content</p>
      {/* Use Suspense to handle the loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponentCall />
      </Suspense>
    </div>
  );
};

export default MainComponent;
