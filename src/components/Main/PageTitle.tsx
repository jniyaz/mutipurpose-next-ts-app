const PageTitle = ({ title }: { title: string }) => {
  return (
    <h3
      className="font-bold text-lg sm:text-xl md:text-2xl text-gray-700 py-4"
      dangerouslySetInnerHTML={{ __html: title }}
    ></h3>
  );
};

export default PageTitle;
