import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

function AppRouter() {
    return (
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          {Object.values(routerConfig).map(({ element, path }) => (
            <Route
              key={path}
              element={(
                <div className="page-wrapper">{element}</div>
                        )}
              path={path}
            />
                ))}
        </Routes>
      </Suspense>
    );
}

export default AppRouter;
