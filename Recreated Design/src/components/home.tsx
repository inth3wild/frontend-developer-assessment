import { SearchIcon } from '@/assets/icons';
import { totals } from '@/constants/totals';
import BarChartSection from '@/components/bar-chart-section';
import PieChartSection from '@/components/pie-chart-section';
import MapComponent from '@/components/map';
import CustomersList from '@/components/customers-list';
import FoodMenu from '@/components/food-menu';
import { Input } from '@/components/ui/input';

function Home() {
  return (
    <>
      <section className="mt-2">
        <div>
          <h1 className="font-bold">Hi, Taylor!</h1>
          <p className="text-light-grey">Let's check your store today</p>
        </div>
        <div className="relative mt-2">
          <Input type="search" placeholder="Search..." className="pl-8"></Input>
          <img
            src={SearchIcon}
            alt="search-icon"
            className="absolute top-1.5 left-1.5"
          />
        </div>
      </section>

      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5">
        {totals.map(({ icon, name, totalValue, id }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex flex-col items-start gap-2">
              <img
                src={icon}
                alt={`${name.split(' ').join('-').toLowerCase()}-icon`}
                className="h-6 w-6 text-gray-500"
              />
              <p className="text-sm font-medium text-gray-500">{name}</p>
              <p className="text-2xl font-bold">{totalValue}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <BarChartSection />

        <PieChartSection />
      </div>

      <MapComponent />

      <CustomersList />

      <FoodMenu />
    </>
  );
}

export default Home;
