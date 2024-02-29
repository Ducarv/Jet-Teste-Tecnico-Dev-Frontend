import { CarTable } from "./components/CarTable";
import { data } from "./data/data"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center items-center h-screen">
        <div className="overflow-x-auto w-full">
          <CarTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
