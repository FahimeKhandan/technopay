import Filters from "./Filters";

const OnlineLoanRequest = () => {
  return (
    <>
      <h4 className="my-10 text-2xl md:text-3xl">ماشین محاسبه‌گر اقساط</h4>
      <Filters
        title="مبلغ مورد نظر:"
        options={[
          "۱۰٬۰۰۰٬۰۰۰ تومان",
          "۱۰٬۰۰۰٬۰۰۰ تومان",
          "۱۰٬۰۰۰٬۰۰۰ تومان",
          "۱۰٬۰۰۰٬۰۰۰ تومان",
          "۲۰٬۰۰۰٬۰۰۰ تومان",
          "۳۰٬۰۰۰٬۰۰۰ تومان",
        ]}
      />
    </>
  );
};

export default OnlineLoanRequest;
