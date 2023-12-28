import CATEGORY from "../../components/Home/CATEGORY";
import Discount from "../../components/Home/Discount";
import HeaderSection from "../../components/Home/HeaderSection";
import ImageSection from "../../components/Home/ImageSection";
import Parallax from "../../components/Home/Parallax";

const Home = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <ImageSection></ImageSection>
      <CATEGORY></CATEGORY>
      <Discount></Discount>
      <Parallax></Parallax>
    </div>
  );
};

export default Home;
