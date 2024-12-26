import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import PageLayout from './pages/page-layout/PageLayout';
import Blog from './pages/blog/Blog';
import Testimonials from './pages/testimonials/Testimonials';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Faq from './pages/faq/Faq';
import OurCoreValues from './pages/our-core-values/OurCoreValues';
import WhoWeAre from './pages/who-we-are/WhoWeAre';
import CareerOpportunities from './pages/career-opportunities/CareerOpportunities';
import LogisticsServices from './pages/logistics-services/LogisticsServices';
import Consultation from './pages/consultation/Consultation';
import BusinessManagement from './pages/business-management/businessManagement';
import BrandingAndSales from './pages/branding-and-sales/BrandingAndSales';
import Marketing from './pages/marketing/Marketing';
import ContactUs from './pages/contact-us/ContactUs';
import SingleBlog from './pages/single-blog/SingleBlog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/testimonials',
          element: <Testimonials />,
        },
        {
          path: '/contact-us',
          element: <ContactUs />,
        },
      ],
    },
    {
      path: '/about',
      element: <PageLayout />,
      children: [
        {
          path: '',
          element: <About />,
        },
        {
          path: 'career-opportunities',
          element: <CareerOpportunities />,
        },
        {
          path: 'our-core-values',
          element: <OurCoreValues />,
        },
        {
          path: 'who-we-are',
          element: <WhoWeAre />,
        },
        {
          path: 'frequently-asked-questions',
          element: <Faq />,
        },
      ],
    },
    {
      path: '/services',
      element: <PageLayout />,
      children: [
        {
          path: '',
          element: <Services />,
        },
        {
          path: 'logistics-services',
          element: <LogisticsServices />,
        },
        {
          path: 'branding-and-sales',
          element: <BrandingAndSales />,
        },
        {
          path: 'business-management',
          element: <BusinessManagement />,
        },
        {
          path: 'marketing',
          element: <Marketing />,
        },
        {
          path: 'consultation',
          element: <Consultation />,
        },
      ],
    },
    {
      path: '/blog',
      element: <PageLayout />,
      children: [
        {
          path: '',
          element: <Blog />,
        },

        {
          path: ':id',
          element: <SingleBlog />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
