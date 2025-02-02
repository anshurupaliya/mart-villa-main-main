import { FiCheck } from "react-icons/fi";

const ServiceDescription = () => {
  return (
    <div>
      <img
        src="/images/property (17).jpg"
        alt=""
        className="w-full h-[300px] object-cover"
      />
      <p className="mt-2">
      <strong>SEE WHY OUR RESIDENTS CALL OUR COMMUNITY HOME.</strong><br></br>
Surround yourself with fresh energy, high-tech amenities, and elevated style. Indulge in extraordinary amenities, relax in appealing social spaces, and cultivate your ideal life. We're the fresh look in this historic district - a vibrant new community for movers and shakers.
      </p>
      <h1 className="mt-4 text-2xl font-semibold">
        Making your ideas come to reality with a good home
      </h1>
      <p className="mt-2">
      A bold new life awaits you at MartVilla, a brand new community of apartment homes situated at the cutting edge of modern design. Residents of MartVilla enjoy luxury living with a sparkling swimming pool, fitness center and indoor game, parking garage and temple. Discover a MartVilla from our convenient location. Nothing quite complements a comfortable, stylish home like an array of luxury amenities.
      </p>
      <div className="flex-col gap-3 mt-3 flex-align-center sm:flex-row">
        <img
          src="/images/property (15).jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <img
          src="/images/property (18).jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
      </div>
      {/* <p className="mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nam, quo
        cumque tempora, vitae aut consequatur ipsam, alias libero quaerat unde
        tempore sit officiis. Nemo debitis neque alias, harum possimus impedit
        non itaque culpa recusandae odit cupiditate illo dolores numquam.
      </p> */}
      <div className="mt-3">
        <div className="flex-align-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Outstanding Property</p>
        </div>
        <div className="mt-2 flex-align-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Professional and experienced human resource</p>
        </div>
        <div className="mt-2 flex-align-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Provide the best services for users</p>
        </div>
        <div className="mt-2 flex-align-center gap-x-2">
          <div className="icon-box text-primary !bg-primary/20">
            <FiCheck />
          </div>
          <p>Modern city locations and exceptional lifestyle</p>
        </div>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aut
          quasi, sit delectus labore, sed repellendus magni rerum beatae
          deserunt libero. Iusto magnam numquam blanditiis similique assumenda
          consectetur ducimus voluptates?
        </p>
      </div>
    </div>
  );
};

export default ServiceDescription;
