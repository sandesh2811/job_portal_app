import Link from "next/link";

type FormFooterProps = {
  heading: string;
  href: string;
  text: string;
};

const FormFooter = ({ heading, href, text }: FormFooterProps) => {
  return (
    <div className="flex gap-1 items-center justify-center text-secondaryText">
      <span className="text-sm">{heading}</span>
      <Link href={href}>
        <span className="text-sm underline underline-offset-3 ">{text}</span>
      </Link>
    </div>
  );
};

export default FormFooter;
