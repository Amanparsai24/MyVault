import { Route, Routes } from 'react-router-dom';
import { protectedRoutes, publicRoutes } from "./routes";
import './App.css'
import { Suspense } from 'react';
import AdminLayout from './pages/components/AdminLayout';

function App() {

  return (
    <>
      <Routes>

        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {route.component}
              </Suspense>}
            key={idx}
          />
        ))}

        {protectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminLayout>
                  {route.component}
                </AdminLayout>
              </Suspense>}
            key={idx}
          />
        ))}

      </Routes>
    </>
  )
}

export default App
