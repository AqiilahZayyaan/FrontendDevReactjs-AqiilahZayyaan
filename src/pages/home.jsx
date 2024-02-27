import Navbar from "../components/Parts/Navbar/Navbar";
import FilterLayouts from "../components/Layouts/HomeLayouts/FilterLayouts";
import RestaurantLayouts from "../components/Layouts/HomeLayouts/RestaurantLayouts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <FilterLayouts />
      <RestaurantLayouts />
    </>
  );
};

export default HomePage;
