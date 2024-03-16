import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './assets/css/style.css';
import { Home, About, ChamberCommittee, ThinkMosmanFirst, Events, MemberCategory, Join, News, Contact } from './components/index.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='chamber-committee' element={<ChamberCommittee />} />
      <Route path='think-mosman-first' element={<ThinkMosmanFirst />} />
      <Route path='events' element={<Events />} />
      <Route path='member-category' element={<MemberCategory />} />
      <Route path='join' element={<Join />} />
      <Route path='news' element={<News />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
