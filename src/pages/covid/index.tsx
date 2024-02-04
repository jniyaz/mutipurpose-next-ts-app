import PageTitle from "@/components/Main/PageTitle";

const index = () => {
  return (
    <section className="py-8 animation-fade animation-delay relative">
      <div className="container mx-auto px-0 sm:px-5">
        <PageTitle title={"Covid Stats"} />
        <div className="flex p-1 py-12 bg-white place-content-center">
          <h3 className="font-semibold text-gray-800 my-2 hover:underline text-lg">
            We are updating, Please check back soon.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default index;
