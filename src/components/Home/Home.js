import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";

const Home = () => {
  return (
    <section>
      <Hero />
      <SearchForm/>
      <List />
    </section>
  );
};

export default Home;