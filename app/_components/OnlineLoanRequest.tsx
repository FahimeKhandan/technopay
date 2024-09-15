import { formatCurency, formatNumber } from "@/lib/formatters";
import { Grid2, useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Filters from "./Filters";
import PackageCard from "./PackageCard";

export interface Package {
  collateral_amount: number;
  credit_amount: number;
  guarantee_type: string;
  installment_amount: number;
  installment_count: number;
  interest_percentage: number;
  is_active: boolean;
  package_id: string;
  prepayment_amount: number;
  prepayment_percentage: number;
  sum_installment_amount: number;
}

export interface Supplier {
  supplier: { name: string; packages: Package[] };
}

interface FetchedData {
  credit_amounts: number[];
  repayment_periods: number[];
  results: Supplier[];
}

const OnlineLoanRequest = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, error, isLoading } = useQuery<FetchedData, Error>({
    queryKey: ["package-list"],
    queryFn: () =>
      axios
        .get<FetchedData>(
          " https://api.mockfly.dev/mocks/76aee9c2-52cc-455f-a37f-df519ec6ab06/api/package-list"
        )
        .then((res) => res.data),
    staleTime: 60 * 60 * 1000,
    retry: 3,
  });

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
