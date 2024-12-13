import { SearchIcon } from '@/assets/icons';
import { totals } from '@/constants/totals';
import BarChartSection from '@/components/bar-chart-section';
import PieChartSection from '@/components/pie-chart-section';
// import MapComponent from '@/components/map';
import CustomersList from '@/components/customers-list';
import FoodMenu from '@/components/food-menu';

function Home() {
  return (
    <>
      <section>
        <div>
          <h1>Hi, Taylor!</h1>
          <p>Let's check your store today</p>
        </div>
        <div>
          <input type="search" name="search" placeholder="Search..." />
          <img src={SearchIcon} alt="search-icon" />
        </div>
      </section>

      <section>
        {totals.map(({ icon, name, totalValue, id }) => (
          <div key={id}>
            <img
              src={icon}
              alt={`${name.split(' ').join('-').toLowerCase()}-icon`}
            />
            <p>{name}</p>
            <h1>{totalValue}</h1>
          </div>
        ))}
      </section>

      <BarChartSection />

      <PieChartSection />

      {/* <MapComponent /> */}
      <CustomersList />

      <FoodMenu />
    </>
  );
}

export default Home;
