import Link from "next/link";

type FormFooterProps = {
  heading: string;
  href: string;
  text: string;
};

const FormFooter = ({ heading, href, text }: FormFooterProps) => {
  return (
    <div className="flex items-center justify-center gap-1 text-secondaryText">
      <span className="text-xs mid:text-sm">{heading}</span>
      <Link href={href} className="flex items-center justify-center">
        <span className="text-xs underline underline-offset-2 mid:text-sm">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default FormFooter;
