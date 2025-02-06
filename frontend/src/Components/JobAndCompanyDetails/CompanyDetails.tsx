type CompanyDetailsProps = {
  companyName: string | undefined;
  location: string | undefined;
};

const CompanyDetails = ({ companyName, location }: CompanyDetailsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm mid:text-base">Company name: {companyName}</span>
      <span className="text-sm mid:text-base">Location: {location}</span>
    </div>
  );
};
export default CompanyDetails;
