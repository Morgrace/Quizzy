import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import RecentActivity from './components/RecentActivity';
const App = function () {
  return (
    <div className=" grid h-[100vh]">
      <div className="!p-[1rem_1.5rem_0]">
        <Header />
        <main>
          <Categories />
          <RecentActivity />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
