import { formatCurency, formatNumber } from "@/lib/formatters";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import usePackages, { Package } from "../../hooks/usePackeges";
import Filters from "./Filters";
import PackageCard from "./PackageCard";
import { useState } from "react";

const OnlineLoanRequest = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [selectedCreditAmount, setSelectedCreditAmount] = useState<
    number | null
  >(null);

  const [selectedInstallment_count, setSelectedPaymentPeriod] = useState<
    number | null
  >(null);

  const { data, error, isLoading } = usePackages();

  const conditions = (packageInfo: Package) => {
    return (
      packageInfo.is_active &&
      packageInfo.credit_amount === selectedCreditAmount &&
      packageInfo.installment_count === selectedInstallment_count
    );
  };

  if (isLoading) return <p>loading......</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h4 className="my-10 text-2xl md:text-3xl">ماشین محاسبه‌گر اقساط</h4>
      {data?.credit_amounts.length && (
        <Filters
          title="مبلغ مورد نظر:"
          options={
            data?.credit_amounts.map((i) => ({
              label: formatCurency(i).replace("ریال", "تومان"),
              amount: i,
            })) || []
          }
          onFilterChange={(value) => setSelectedCreditAmount(value)}
        />
      )}
      {data?.repayment_periods.length && (
        <Filters
          title="مدت زمان بازپرداخت:"
          options={
            data?.repayment_periods.map((i) => ({
              label: formatNumber(i) + " ماهه",
              amount: i,
            })) || []
          }
          onFilterChange={(value) => setSelectedPaymentPeriod(value)}
        />
      )}

      <Grid2
        container
        rowSpacing={2}
        columnSpacing={isSmall ? 0 : 2}
        alignItems="center"
      >
        {data?.results.map(({ supplier }) =>
          supplier.packages.map(
            (packageInfo) =>
              conditions(packageInfo) && (
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
