import React, { Suspense } from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Spinner } from "@nextui-org/react";

// Lazy load the pages
const Home = React.lazy(() => import('./pages/Home'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Community = React.lazy(() => import('./pages/Community'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const GetStarted = React.lazy(() => import('./pages/GetStarted'));
const TeamMembers = React.lazy(() => import('./pages/Team'));

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
         <Route 
            index 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } 
          />
         <Route 
            path="/resources" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Resources />
              </Suspense>
            } 
          />
         <Route 
            path="/community" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Community />
              </Suspense>
            } 
          />
         <Route 
            path="/about" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            } 
          />
         <Route 
            path="/contact" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } 
          />
         <Route 
            path="/get-started" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GetStarted />
              </Suspense>
            } 
          />
         <Route 
            path="/team-members" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <TeamMembers />
              </Suspense>
            } 
          />
      </Route>
    )
  );

  return (
    <div className=''>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/"></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64 w-full">
     <Spinner size="lg" color="warning"/>
  </div>
);
