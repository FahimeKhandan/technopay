import { formatCurency, formatNumber } from "@/lib/formatters";
import { Grid2, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import usePackages, { PackageInfo } from "../../hooks/usePackeges";
import Filters from "./Filters";
import FiltersSkeleton from "./FiltersSkeleton";
import PackageCard from "./PackageCard";

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

  const conditions = (packageInfo: PackageInfo) => {
    return (
      packageInfo.is_active &&
      packageInfo.credit_amount === selectedCreditAmount &&
      packageInfo.installment_count === selectedInstallment_count
    );
  };

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h4 className="my-10 text-2xl md:text-3xl font-[900]">
        ماشین محاسبه‌گر اقساط
      </h4>
      {isLoading && <FiltersSkeleton title="مبلغ مورد نظر:" />}
      {!isLoading && data?.credit_amounts.length && (
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

      {isLoading && <FiltersSkeleton title="مدت زمان بازپرداخت:" />}
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
        {isLoading && (
          <Skeleton animation="wave" width={450} height={500} />
        )}
        {!isLoading &&
          data?.results.map(({ supplier }) =>
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
