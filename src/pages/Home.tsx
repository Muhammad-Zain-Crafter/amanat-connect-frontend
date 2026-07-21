import { useEffect } from "react";
import Hero from "../components/Hero";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchAssets } from "../features/asset/assetThunk";
import Features from "../components/Features";
import AllAssets from "../components/AllAssets";
import HowItWorks from "../components/HowItWorks";
import { StatsSection } from "../components/StatsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useAppDispatch();

  const assetState = useAppSelector((state) => state.asset);

  useEffect(() => {
    dispatch(fetchAssets({ page: 1, search: "" }));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Features/>
      <AllAssets />
      <HowItWorks/>
      <StatsSection/>
      <CTASection/>
      <Footer/>
    </>
  );
};

export default Home;