import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import './App.css'
import '@smastrom/react-rating/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProviders from './Providers/AuthProviders';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
      
      <ToastContainer />
    </QueryClientProvider>
  </AuthProviders>
)
