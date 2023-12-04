import { Heading } from '@chakra-ui/react';

export const Pruebas = () => {
  return (
    <div className="div">
      <Heading id="tit"> ¿ Que color preferis ? </Heading> <br />
      <form action="">
        <label className="lab" htmlFor="ramarillo">
          Amarillo:
        </label>{' '}
        {''}
        <input type="radio" name="amarillo" id="ramarillo" />
        {''}
        <label className="lab" htmlFor="razul">
          Azul:
        </label>{' '}
        {''}
        <input type="radio" name="amarillo" id="razul" />
        <label className="lab" htmlFor="rverde">
          {' '}
          Verde:
        </label>{' '}
        {''}
        <input type="radio" name="amarillo" id="rverde" />
      </form>
    </div>
  );
};

export const OtraPrueba = () => {
  return (
    <div className="div">
      <Heading id="tit"> ¿ Cual es tu fruta preferida?</Heading> <br />
      <label className="lab" htmlFor="chpera">
        {' '}
        Pera:
      </label>{' '}
      {''}
      <input type="checkbox" name="Pera" id="chpera" />
      <label className="lab" htmlFor="chmanzana">
        {' '}
        Manzana:
      </label>{' '}
      {''}
      <input type="checkbox" name="Manzana" id="chmanzana" />
      <label className="lab" htmlFor="chbanana">
        {' '}
        Banana:
      </label>{' '}
      {''}
      <input type="checkbox" name="Banana" id="chbanana" />
    </div>
  );
};
