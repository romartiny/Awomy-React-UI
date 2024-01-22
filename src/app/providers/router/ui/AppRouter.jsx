import React, { Suspense } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';
import WelcomeLayout from '../../../../layouts/MainLayout/ui/WelcomeLayout';
import { PageLogoLoader } from '../../../../components/Loader';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLogoLoader/>}>
      <Routes>
        <Route path={'/'} element={<WelcomeLayout/>}>
          {
            Object.values(routeConfig).map(({element, path}) => (
              <Route key={path} path={path} element={
                  <Suspense fallback={<PageLogoLoader />}>
                    {element}
                  </Suspense>
                }
              />
            ))
          }
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
