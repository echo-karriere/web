import { ReactNode, TdHTMLAttributes } from "react";

interface ItemProps {
  title: string;
  time: string;
}

const Item = ({ title, time }: ItemProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center p-1 md:p-2">
      <h4>{title}</h4>
      <p className="text-gray-600 font-bold">{time}</p>
    </div>
  );
};

const Head = ({ title }: Pick<ItemProps, "title">): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center p-1 md:p-2">
      <h4>{title}</h4>
    </div>
  );
};

interface TDProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  bg: string;
}

const Td = ({ children, bg, ...props }: TDProps): JSX.Element => (
  <td className={`rounded transition-opacity ${bg}`} {...props}>
    {children}
  </td>
);

export const Schedule = (): JSX.Element => {
  return (
    <table className="table-fixed border-separate" style={{ borderSpacing: "2px" }}>
      <tbody>
        <tr>
          <th />
          <Td colSpan={6} rowSpan={4} bg="bg-c2">
            <Item title="Introduksjon og lynpresentasjoner" time="10:00-11:15" />
          </Td>
        </tr>
        <tr>
          <th />
        </tr>
        <tr>
          <th />
        </tr>
        <tr>
          <th />
        </tr>
        <tr>
          <th />
          <Td bg="bg-c4">
            <Head title="Foredrag, spor 1" />
          </Td>
          <Td bg="bg-c4">
            <Head title="Foredrag, spor 2" />
          </Td>
          <Td bg="bg-c4">
            <Head title="Workshop, spor 1" />
          </Td>
          <Td bg="bg-c4">
            <Head title="Workshop, spor 2" />
          </Td>
          <Td bg="bg-c4">
            <Head title="Workshop, spor 3" />
          </Td>
          <Td rowSpan={8} bg="bg-c2">
            <Item title="Stands åpner" time="11:15-16:00" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Bouvet" time="11:30-11:50" />
          </Td>
          <Td bg="bg-c1">
            <Item title="Knowit" time="11:30-11:50" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Finn" time="11:30-13:00" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Kantega" time="11:30-13:00" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="DNB" time="11:30-13:00" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={1} bg="bg-c1">
            <Item title="Kongsberg Gruppen" time="12:00-12:20" />
          </Td>
          <Td bg="bg-c1">
            <Item title="Stacc" time="12:00-12:30" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={1} bg="bg-c3">
            <Item title="Ingen" time="" />
          </Td>
          <Td bg="bg-c1">
            <Item title="Tripletex" time="12:30-12:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-14:00" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-14:00" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-14:00" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-14:00" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-14:00" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Bekk" time="14:00-14:20" />
          </Td>
          <Td bg="bg-c1">
            <Item title="Equinor" time="14:00-14:20" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Knowit" time="14:00-15:30" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Stacc" time="14:00-15:30" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Capgemini" time="14:00-15:30" />
          </Td>
          <td></td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Atea" time="14:30-14:50" />
          </Td>
          <Td bg="bg-c1">
            <Item title="TietoEVRY" time="14:30-14:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="DNB" time="15:00-15:20" />
          </Td>
          <Td bg="bg-c1">
            <Item title="PwC Norge" time="15:00-15:20" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={6} bg="bg-c4">
            <Item title="echo karriere over" time="16:00" />
          </Td>
        </tr>
      </tbody>
    </table>
  );
};
