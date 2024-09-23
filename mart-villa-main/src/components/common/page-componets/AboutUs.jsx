import { BiCreditCard, BiGlobe, BiHomeAlt } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="pt-16 pb-20">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src="/images/property (16).jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="/images/property (26).jpg"
            alt=""
            className="absolute object-cover w-48 h-64 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="sub-heading">about us</h1>
          <h1 className="heading">we decorate your home environment</h1>
          <p className="mt-3">
          Welcome to MartVilla, where your real estate dreams become a reality. With a passion for excellence and a commitment to personalized service, we have been redefining the property experience for [number] years.
          </p>
          <p className="mt-3">
At MartVilla, we believe that finding the perfect home or investment is more than just a transaction; it’s a journey. Our team of dedicated professionals brings extensive market knowledge, unmatched expertise, and a genuine understanding of your needs to every interaction.
          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiHomeAlt />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  the perfect residency
                </h1>
                <p>
                At MartVilla, we are dedicated to helping you find the perfect residency that matches your lifestyle and preferences. 
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  global architect experts
                </h1>
                <p>
                Our team of global architect experts brings a wealth of experience and innovative design solutions to every project. 
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCreditCard />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  total payment transparency
                </h1>
                <p>
                We believe in building trust through total payment transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
