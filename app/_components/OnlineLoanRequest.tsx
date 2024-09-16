import { formatCurency, formatNumber } from "@/lib/formatters";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import usePackages from "../../hooks/usePackeges";
import Filters from "./Filters";
import PackageCard from "./PackageCard";

const OnlineLoanRequest = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, error, isLoading } = usePackages();

  if (isLoading) return <p>loading......</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h4 className="my-10 text-2xl md:text-3xl">ماشین محاسبه‌گر اقساط</h4>
      <Filters
        title="مبلغ مورد نظر:"
        options={
          data?.credit_amounts.map((i) =>
            formatCurency(i).replace("ریال", "تومان")
          ) || []
        }
      />
      <Filters
        title="مدت زمان بازپرداخت:"
        options={
          data?.repayment_periods.map((i) => formatNumber(i) + " ماهه") || []
        }
      />
      <Grid2
        container
        rowSpacing={2}
        columnSpacing={isSmall ? 0 : 2}
        alignItems="center"
      >
        {data?.results.map(({ supplier }) =>
          supplier.packages.map(
            (packageInfo) =>
              packageInfo.is_active && (
                <PackageCard
                  key={supplier.name + packageInfo.package_id}
                  packageInfo={packageInfo}
                  supplierName={supplier.name}
                />
              )
          )
        )}
      </Grid2>
    </>
  );
};

export default OnlineLoanRequest;
