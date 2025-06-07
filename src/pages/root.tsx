/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @updated_at: 2024-09-11 12:59:49
 */
import { Toaster } from 'react-hot-toast';
import { Outlet, useNavigate } from 'react-router-dom';

export default () => {
  return (
    <div id="app" className="text-dark-text font-p1 relative mx-auto h-full text-base">
      <Outlet />
      <Toaster containerClassName="text-sm" />
    </div>
  );
};
