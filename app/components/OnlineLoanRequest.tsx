import Filters from "./Filters";
import PackageCard from "./PackageCard";

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
      <Filters
        title="مدت زمان بازپرداخت::"
        options={["۶ ماهه", "۱۲ ماهه", "۱۸ ماهه"]}
      />
      <PackageCard/>
    </>
  );
};

export default OnlineLoanRequest;
