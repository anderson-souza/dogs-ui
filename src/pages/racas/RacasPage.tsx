import * as React from "react";
import { getRacas } from "../../services/RacasService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Racas from "../../interfaces/Racas";
import { Button } from "primereact/button";

interface IState {
  dogs: Racas[];
}
export default class RacasPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    getRacas.then((response: any) => {
      const {
        data: { message },
      } = response;

      const racasArray: Racas[] = [];
      Object.entries(message).map((row: any) =>
        racasArray.push({ name: row[0], subRacas: row[1] })
      );
      this.setState({ dogs: racasArray });
    });
  }

  handleClick() {
    console.log("clicamos aqui viado");
  }

  actionTemplate() {
    return (
      <div>
        <Button
          type='button'
          icon='pi pi-search'
          className='p-button-success'
          style={{ marginRight: ".5em" }}
        />
        <Button
          type='button'
          icon='pi pi-pencil'
          className='p-button-warning'
        />
      </div>
    );
  }

  public render() {
    return (
      <DataTable value={this.state.dogs}>
        <Column field='name' header='Raça' />
        <Column header='Ações' body={this.actionTemplate} />
      </DataTable>
    );
  }
}
