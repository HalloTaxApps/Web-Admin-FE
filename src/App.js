import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableEducations from './Pages/Educations/TableEducations';
import FormEducations from './Pages/Educations/FormEducations';
import EditEducations from './Pages/Educations/EditEducations';
import TableNews from './Pages/News/TableNews';
import FormNews from './Pages/News/FormNews';
import EditNews from './Pages/News/EditNews';
import TablePralogin from './Pages/Pralogin/TablePralogin';
import FormPralogin from './Pages/Pralogin/FormPralogin';
import EditPralogin from './Pages/Pralogin/EditPralogin';
import TableAdvertisements from './Pages/Advertisements/TableAdvertisements';
import FormAdvertisements from './Pages/Advertisements/FormAdvertisements';
import EditAdvertisements from './Pages/Advertisements/EditAdvertisements';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/tableeducations'>
          <Route index element={<TableEducations />} />
        </Route>
        <Route path='/formeducations'>
          <Route index element={<FormEducations />} />
        </Route>
        <Route path='/editeducations'>
          <Route index element={<EditEducations />} />
        </Route>
        <Route path='/tablenews'>
          <Route index element={<TableNews />} />
        </Route>
        <Route path='/formnews'>
          <Route index element={<FormNews />} />
        </Route>
        <Route path='/editnews'>
          <Route index element={<EditNews />} />
        </Route>
        <Route path='/tablepralogin'>
          <Route index element={<TablePralogin />} />
        </Route>
        <Route path='/formpralogin'>
          <Route index element={<FormPralogin />} />
        </Route>
        <Route path='/editpralogin'>
          <Route index element={<EditPralogin />} />
        </Route>
        <Route path='/tableadvertisements'>
          <Route index element={<TableAdvertisements />} />
        </Route>
        <Route path='/formadvertisements'>
          <Route index element={<FormAdvertisements />} />
        </Route>
        <Route path='/editadvertisements'>
          <Route index element={<EditAdvertisements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
