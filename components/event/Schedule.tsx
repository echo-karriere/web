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

interface TDProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  bg: string;
}

const Td = ({ children, bg, ...props }: TDProps): JSX.Element => (
  <td className={`md:py-2 md:px-4 rounded transition-opacity ${bg}`} {...props}>
    {children}
  </td>
);

export const Schedule = (): JSX.Element => {
  return (
    <table className="table-fixed border-separate" style={{ borderSpacing: "2px" }}>
      <tbody>
        <tr>
          <th />
          <Td colSpan={5} rowSpan={4} bg="bg-c2">
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
          <Td bg="bg-c1">
            <Item title="Bouvet" time="11:30-11:50" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: Knowit" time="11:30-13:00" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: Stacc" time="11:30-13:00" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: DNB" time="11:30-13:00" />
          </Td>
          <Td rowSpan={9} bg="bg-c2">
            <Item title="Standrom åpner" time="11:15-16:00" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={1} bg="bg-c1">
            <Item title="AppearTV" time="12:00-12:20" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Kongsberg Gruppen" time="12:30-12:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Tripletex" time="13:00-13:20" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-13:30" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-13:30" />
          </Td>
          <Td bg="bg-c3">
            <Item title="Pause" time="13:00-13:30" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Tieto Evry" time="13:30-13:50" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: Finn" time="13:30-15:00" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: Kantega" time="13:30-15:00" />
          </Td>
          <Td rowSpan={3} bg="bg-c5">
            <Item title="Workshop: Capgemini" time="13:30-15:00" />
          </Td>
          <td></td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Bekk" time="14:00-14:20" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Stacc" time="14:30-14:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="DNB" time="15:00-15:20" />
          </Td>
          <Td rowSpan={2} bg="bg-c3">
            <Item title="Workshops ferdig" time="" />
          </Td>
          <Td rowSpan={2} bg="bg-c3">
            <Item title="Workshops ferdig" time="" />
          </Td>
          <Td rowSpan={2} bg="bg-c3">
            <Item title="Workshops ferdig" time="" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td bg="bg-c1">
            <Item title="Knowit" time="15:30-15:50" />
          </Td>
        </tr>
        <tr>
          <th />
          <Td colSpan={5} bg="bg-c4">
            <Item title="echo karriere over" time="16:00" />
          </Td>
        </tr>
      </tbody>
    </table>
  );
};
