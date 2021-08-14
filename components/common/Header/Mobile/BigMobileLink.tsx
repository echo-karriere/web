import Link from "next/link";

interface Props {
  title: string;
  to: string;
  Icon: () => JSX.Element;
}

export const BigMobileLink = ({ title, to, Icon }: Props): JSX.Element => {
  return (
    <Link href={to}>
      <a href={to} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
        <Icon />
        <span className="ml-3 text-base font-medium text-gray-900">{title}</span>
      </a>
    </Link>
  );
};
