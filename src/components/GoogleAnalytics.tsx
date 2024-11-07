import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-MDC3HW7XW4'); // Your measurement ID
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-MDC3HW7XW4', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
