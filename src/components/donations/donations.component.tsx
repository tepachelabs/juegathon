import React, { FC } from "react";
import { Button } from "../button/button.component";

export const Donations: FC = () => {
  return (
    <div className="row text-center">
      <div className="col">
        <h3 className='d-inline m-4'>Necesitamos tu ayuda</h3>
        <Button className="btn btn-primary btn-lg px-4 me-md-2">Haz tu donación</Button>
      </div>
    </div>
  );
}
