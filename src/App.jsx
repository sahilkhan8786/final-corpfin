import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/onboarding/sign-in";
import SignUp from "./pages/onboarding/sign-up";
import SignPersonalDetails from "./pages/onboarding/sign-personal-details";
import SignBusinessDetails from "./pages/onboarding/sign-business-details";
import ForgotPassword from "./pages/onboarding/forgot-password";
import ResetPassword from "./pages/onboarding/reset-password";
import SignupCompleted from "./pages/onboarding/sign-up-completed";
import Maintenance from "./pages/onboarding/Maintenance";
import Page404 from "./pages/onboarding/page404";
import Desktop1 from "./pages/onboarding/desktop-1";
import SellerListingDetailsPage from "./pages/midmarket_Seller/SellerListingDetailsPage";
import MidMarketLandingPage from "./pages/landing_pages/MidMarketLandingPage";
import MasterLandingPageEarlyStage from "./pages/landing_pages/MasterLandingPageEarlyStage";
import DashboardSeller from "./pages/midmarket_Seller/DashboardSeller";
import BuyersEvaluation from "./pages/midmarket_Seller/BuyersEvaluation";
import StartupSellerLisitngDetailsPage from "./pages/startup_seller/StartupSellerLisitngDetailsPage";
import MyListingStartupSeller from "./pages/startup_seller/MyListingStartupSeller";
import EvaluateBuyerStartupSeller from "./pages/startup_seller/EvaluateBuyerStartupSeller";
import EvaluateBuyerStartupSellerResponse from "./pages/startup_seller/EvaluateBuyerStartupSellerResponse";
import ResponsePopup from "./pages/startup_seller/ResponsePopup";
import MidmarketSellerOverview from "./pages/midmarket_Seller/MidmarketSellerOverview";
import StartSellerOverview from "./pages/startup_seller/StartupSellerOverview";
import BuysideLandingPage from "./pages/landing_pages/BuysideLandingPage";
import SellSideLandingPage from "./pages/landing_pages/SellSideLandingPage";
import PricingPlans from "./pages/landing_pages/PricingPlans";
import Contacts from "./pages/landing_pages/Contacts";
import FAQ from "./pages/landing_pages/FAQ";
import AboutUs from "./pages/landing_pages/AboutUs";
import StartupLandingPageEarlyStage from "./pages/landing_pages/StartupLandingPageEarlyStage";
import InvestorLandingPageEarlyStage from "./pages/landing_pages/InvestorLandingPageEarlyStage";
import MasterLandingpage from "./pages/landing_pages/MasterLandingpage";
import RootLayout from "./layouts/RootLayout";
import StartUpInvestorDashboard from "./pages/Startupuppages/StartUpInvestorDashboard";
import MidmarketBuyerDashboard from "./pages/MidmarketBuyers/MidmarketBuyerDashboard";
import StaticLandingPage from "./pages/landing_pages/StaticLandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import MidmarketOverviewPage from "./pages/MidmarketBuyers/MidmarketOverviewPage";
import MidmarketBuyerSubscription from "./pages/MidmarketBuyers/MidmarketBuyerSubscription";
import MidMarketBuyerSubscriptionplan from "./pages/MidmarketBuyers/MidMarketBuyerSubscriptionplan";
import MidMarketBuyerSettings from "./pages/MidmarketBuyers/MidMarketBuyerSettings";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MasterLandingpage />
      },
      {
        path: '/mid-market-landing-page',
        element: <MidMarketLandingPage />
      },
      {
        path: '/start-up-landing-page',
        element: <StartupLandingPageEarlyStage />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/pricing',
        element: <PricingPlans />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      {
        path: '/contact',
        element: <Contacts />
      },
      {
        path: '/master-landingpage-early-stage',
        element: <MasterLandingPageEarlyStage />
      },
      {
        path: '/investor-landing-page-early-stage',
        element: <InvestorLandingPageEarlyStage />
      },
      {
        path: '/startup-landing-page-early-stage',
        element: <StartupLandingPageEarlyStage />
      },
      {
        path: '/buyside-landing-page',
        element: <BuysideLandingPage />
      },
      {
        path: '/sellside-landing-page',
        element: <SellSideLandingPage />
      },
      {
        path: '/static-landing-page',
        element: <StaticLandingPage />
      },
    ]
  },
  {
    path: '/midmarket-seller-dashbaord',
    element: <DashboardSeller />
  },
  {
    path: '/startp-seller-dashbaord',
    element: <EvaluateBuyerStartupSeller />
  },
  {
    path: '/startup-seller-dashbaord',
    element: <MyListingStartupSeller />
  },
  {
    path: '/midmarket-seller-listing-detail-page',
    element: <SellerListingDetailsPage />
  },
  {
    path: '/startup-seller-listing-detail-page',
    element: <StartupSellerLisitngDetailsPage />
  },
  {
    path: '/midmarket-seller-buyer-evaluation',
    element: <BuyersEvaluation />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/personal-signin-details',
    element: <SignPersonalDetails />
  },
  {
    path: '/sign-in-business-details',
    element: <SignBusinessDetails />
  },
  {
    path: '/signup-completed',
    element: <SignupCompleted />
  },
  {
    path: '/desktop',
    element: <Desktop1 />
  },
  {
    path: '/mid-market-seller-overview',
    element: <MidmarketSellerOverview />
  },
  {
    path: '/start-up-seller-overview',
    element: <StartSellerOverview />
  },
  {
    path: '/start-up-investor-dashboard',
    element: <StartUpInvestorDashboard />
  },

  {
    path: '/mid-market-buyer-dashboard',
    element: <MidmarketBuyerDashboard />
  },

  {
    path: '/maintenance',
    element: <Maintenance />
  },
  {
    path: '/not-found',
    element: <Page404 />
  },
  {
    path: '/eval-buyer-startupsellerresponse',
    element: <EvaluateBuyerStartupSellerResponse />
  },
  {
    path: '/response-popup',
    element: <ResponsePopup />
  },

  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <MidmarketOverviewPage />
      },
      {
        path: 'subscription',
        element: <MidmarketBuyerSubscription />,

      },
      {
        path: 'subscription-selected',
        element: <MidMarketBuyerSubscriptionplan />
      },
      {
        path: 'settings',
        element: <MidMarketBuyerSettings />
      }

    ]
  }

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
