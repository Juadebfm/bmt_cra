import Questions from "../components/Lcomp/Questions";

const FAQ = () => {
  return (
    <section className="mt-48 px-[25px] md:px-16 ">
      <h2 className="text-[34px] md:text-[44px] leading-[1.2] capitalize font-[600] text-primary_red text-center w-full md:w-max m-auto">
        Frequently Asked Questions{" "}
      </h2>
      <section className="w-full md:w-[90%] m-auto mt-12">
        <Questions />
      </section>
    </section>
  );
};

export default FAQ;
