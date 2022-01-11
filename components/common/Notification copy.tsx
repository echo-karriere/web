interface Props {
  message: string;
  url: string;
}

export function Notification({ message }: Props): JSX.Element {
  return (
    <div className="bg-c1">
      <div className="flex justify-center items-center">
        <div className="m-3">
          <p className="text-gray-800 md:text-lg text-xl">{message}</p>
        </div>
      </div>
    </div>
  );
}
