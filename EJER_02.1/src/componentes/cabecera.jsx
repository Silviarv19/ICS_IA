

import { RelojEstatico } from './relojEstatico';

export function Cabecera() {
  const nombreModulo = 'Desarrollo Web en Entorno Cliente';

  return (
    <header>
      <h1>{nombreModulo}</h1>
      <RelojEstatico />
    </header>
  );
}

//la hora solo cambia al recargar la página. Esto ocurre porque la hora se calcula cuando se renderiza el componente. Como no hay ningún mecanismo que lo vuelva a renderizar automáticamente, la hora permanece igual hasta que se recarga la página.