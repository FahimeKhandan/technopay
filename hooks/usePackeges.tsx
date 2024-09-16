import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<FetchedData>("/api/package-list");

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

const usePackages = () => {
  return useQuery<FetchedData, Error>({
    queryKey: ["package-list"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 1000,
    retry: 3,
  });
};

export default usePackages;
