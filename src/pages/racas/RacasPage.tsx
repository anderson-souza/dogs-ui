import React from "react";
import { getRacas } from "../../services/RacasService";
import { Return } from "../../interfaces/Return";

const RacasPage = () => {
  const [racas, setracas] = React.useState([]);

  async function loadRacas() {
    await getRacas
      .then((response: any) => {
        console.log(response);

        const { data } = response;

        setracas(data.message);

        console.log(typeof racas);
      })
      .catch((error: any) => {
        alert(error);
      });
  }

  React.useEffect(() => {
    loadRacas();
  }, []);

  return (
    <div>
      <ul>
        {Object.entries(racas).map((row: any) => (
          <li key={row[0]}>{row[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default RacasPage;
