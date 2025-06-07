/**
 * @email: aric.zheng@alo7.com
 * @description: Routes for ApplyAI app.
 * @updated_at: 2024-08-21 14:16:33
 */
import Root from '@/pages/root';
import HomeRoot from './home/root';
import StudentPage from './student';
import ContactPage from './contact';
import AboutPage from './about';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomeRoot />} />
      <Route path="/home" element={<HomeRoot />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);
