import { formatNumber } from "@/lib/formatters";
import blueBank from "@/public/icons/blue-bank.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Card, Grid2 } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import LightTooltip from "./LightTooltip";
import PackageCardActions from "./PackageCardActions";
import { Package } from "../../hooks/usePackeges";

interface PackageRowProps {
  hasBorder?: boolean;
  children: ReactNode;
}

interface Props {
  packageInfo: Package;
  supplierName: string;
}

const PackageCard = ({ packageInfo, supplierName }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: { md: 447 } }}
      className="flex flex-col items-center px-4 py-6 rounded-2xl border-black border-opacity-20"
    >
      <Grid2 container rowSpacing={2} className="p-0 mb-6">
        <PackageRows>
          <SupplierRow
            supplierName={supplierName}
            prepayment_amount={packageInfo.prepayment_amount}
          />
        </PackageRows>

        <PackageRows>
          <RegularRow
            label="مبلغ قسط ماهانه"
            value={packageInfo.installment_amount}
            profix="تومان"
          />
        </PackageRows>

        <PackageRows>
          <RegularRow
            label="سود"
            value={packageInfo.prepayment_percentage}
            profix="درصد"
          />
        </PackageRows>

        <PackageRows hasBorder={false}>
          <RegularRow
            label="مجموع بازپرداخت"
            value={packageInfo.sum_installment_amount}
            profix="تومان"
            emphasize
          />
        </PackageRows>
      </Grid2>
      <PackageCardActions />
    </Card>
  );
};

const PackageRows = ({ hasBorder = true, children }: PackageRowProps) => {
  return (
    <div
      className={`${
        hasBorder ? "border-b pb-4" : ""
      } flex justify-between w-full`}
    >
      {children}
    </div>
  );
};

const SupplierRow = ({
  supplierName,
  prepayment_amount,
}: {
  supplierName: string;
  prepayment_amount: number;
}) => {
  const tooltipTitle = (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <p className="text-middle-text text-center">
        حق اشتراک برای عضویت در طرح زمین و دریافت وام ۵۰ میلیون تومانی:
      </p>
      <p className="text-dark-text font-bold"> {prepayment_amount} تومان</p>
    </Box>
  );

  return (
    <>
      <Box display="flex">
        <Image
          src={blueBank}
          width={32}
          height={32}
          style={{ objectFit: "contain" }}
          alt="bankLogo"
          className="pl-2"
        />
        <p className="text-xl font-bold">{supplierName}</p>
      </Box>
      <p className="text-dark-info font-medium">
        طرح زمین{" "}
        <LightTooltip title={tooltipTitle} arrow>
          <InfoOutlinedIcon color="info" fontSize="small" />
        </LightTooltip>
      </p>
    </>
  );
};

const RegularRow = ({
  label,
  value,
  profix,
  emphasize = false,
}: {
  label: string;
  value: number;
  profix?: string;
  emphasize?: boolean;
}) => {
  return (
    <>
      <p>{label}</p>
      <p className={`${emphasize ? "text-2xl" : "text-lg"}`}>
        {formatNumber(value)}{" "}
        {profix && <span className="text-sm">{profix}</span>}
      </p>
    </>
  );
};

export default PackageCard;
