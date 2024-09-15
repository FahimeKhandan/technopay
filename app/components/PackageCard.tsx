import { Card, CardContent } from "@mui/material";
import { Fragment } from "react";
import PackageCardActions from "./PackageCardActions";

interface PackageRowProps {
  label: string;
  value: string;
  hasBorder: boolean;
}

const PackageRows = ({ label, value, hasBorder }: PackageRowProps) => {
  return (
    <div
      className={`${
        hasBorder ? "border-b" : ""
      } flex justify-between w-full py-4`}
    >
      <div>
        <p>{label}</p>
      </div>
      <div>
        <p>{value}</p>
        <span>{}</span>
      </div>
    </div>
  );
};

const rows = [
  { label: "مبلغ قسط ماهانه", value: "۹۳۵٬۹۴۴ تومان" },
  { label: "سود", value: "۲۲ درصد" },
  { label: "مجموع بازپرداخت", value: "۱۲٬۴۸۱٬۳۲۶ تومان" },
  { label: "بانک", value: "طرح زمین" },
];

const PackageCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: { md: 447 } }}
      className="flex flex-col items-center px-8 py-4 rounded-2xl border-black border-opacity-20"
    >
      <CardContent className="w-full p-0 mb-8">
        {rows.map((row, index) => (
          <Fragment key={index}>
            <PackageRows
              value={row.value}
              label={row.label}
              hasBorder={index + 1 !== rows.length}
            />
          </Fragment>
        ))}
      </CardContent>
      <PackageCardActions />
    </Card>
  );
};

export default PackageCard;
