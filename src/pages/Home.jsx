import Header from '../containers/Header';
import SearchHero from '../containers/SearchHero';
import PowerStatsSelect from '../containers/PowerStatsSelect';
import HeroCardList from '../containers/HeroCardList';
import Footer from '../containers/Footer';

export const Home = () => {

  return (
    <>
      <Header />
      <SearchHero />
      <PowerStatsSelect />
      <HeroCardList />
      <Footer />
    </>
  );
};

