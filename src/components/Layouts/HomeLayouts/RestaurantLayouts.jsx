import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Card from "../../Parts/Home/Card";
import { useNavigate } from "react-router-dom";
import { getRandomPrice, getRandomStatus } from "../../../data/data";

const RestaurantLayouts = () => {
  const { data, loading, error } = useFetch();
  const [showCount, setShowCount] = useState(8); // Menampilkan 8 item pertama
  const itemsPerPage = 4;
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleLoadMore = () => {
    setShowCount(showCount + itemsPerPage);
  };

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const isAllDataLoaded = showCount >= data?.restaurants.length;
  console.log(data.restaurants);

  return (
    <section className="px-8 py-8">
      <div className="container mx-auto">
        <h1 className="mb-8 text-2xl">All Restaurants</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.restaurants.slice(0, showCount).map((v) => {
            const { randomStatus, colorStatus } = getRandomStatus();
            return (
              <Card
                key={v.id}
                src={`https://restaurant-api.dicoding.dev/images/medium/${v.pictureId}`}
                name={v.name}
                city={v.city}
                price={getRandomPrice()}
                randomStatus={randomStatus}
                colorStatus={colorStatus}
                rating={v.rating}
                onClick={() => handleDetail(v.id)}
              />
            );
          })}
        </div>
        {!isAllDataLoaded && (
          <div className="flex items-center justify-center my-16">
            <button
              className="w-[30%] border py-2 border-[#002B56]"
              onClick={handleLoadMore}
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantLayouts;
