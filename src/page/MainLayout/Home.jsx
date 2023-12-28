import CATEGORY from "../../components/Home/CATEGORY";
import Discount from "../../components/Home/Discount";
import HeaderSection from "../../components/Home/HeaderSection";
import ImageSection from "../../components/Home/ImageSection";
import Newsletter from "../../components/Home/Newsletter";
import Parallax from "../../components/Home/Parallax";
import ShopSafely from "../../components/Home/ShopSafely";

const Home = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <ImageSection></ImageSection>
      <CATEGORY></CATEGORY>
      <Discount></Discount>
      <Parallax></Parallax>
      <ShopSafely></ShopSafely>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
