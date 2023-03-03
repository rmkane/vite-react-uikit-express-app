import { useEffect, useState } from "react";

type DateResponse = {
  data: Date;
};

const dateFormatter = (timeZone: string): Intl.DateTimeFormat =>
  Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: timeZone,
  });

const formatters = {
  Eastern: dateFormatter("America/New_York"),
  Central: dateFormatter("America/Chicago"),
  Mountain: dateFormatter("America/Phoenix"),
  Pacific: dateFormatter("America/Los_Angeles"),
};

function Home() {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    fetch("http://localhost:8000/date")
      .then((res) => res.json())
      .then((json: DateResponse) => {
        setDate(new Date(json.data));
      });
  }, []);

  return (
    <>
      <h1>Time and Date Info</h1>
      <ul>
        {Object.entries(formatters).map(([region, formatter], index) => (
          <li>
            {region}: {formatter.format(date)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
