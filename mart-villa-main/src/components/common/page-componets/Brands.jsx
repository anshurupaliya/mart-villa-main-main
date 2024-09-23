import { brands } from "../../../data/dummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="mx-auto sub-heading">brands</h1>
        <h1 className="heading">our brands</h1>
        <p>
        At MartVilla, we are proud to collaborate with some of the most prestigious and trusted brands in the real estate industry.
        </p>
      </div>
      <div className="flex-wrap p-4 mt-8 flex-center-center gap-x-16 gap-y-5">
        {brands.map((image, i) => (
          <div className="group" key={i}>
            <img
              src={image}
              alt=""
              className="w-20 group-hover:scale-125 transition-a"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
