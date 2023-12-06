import { Heading } from '@chakra-ui/react';

export const Pruebas = () => {
  return (
    <div className="div">
      <Heading as="h1" id="tit">
        {' '}
        ¿ Que color preferis ?{' '}
      </Heading>{' '}
      <br />
      <form action="">
        <label className="la" htmlFor="ramarillo">
          Amarillo: {''}
        </label>
        <input type="radio" name="amarillo" id="ramarillo" />
        {''}{' '}
        <label className="la" htmlFor="razul">
          Azul: {''}
        </label>
        <input type="radio" name="amarillo" id="razul" /> {''}
        <label className="la" htmlFor="rverde">
          Verde: {''}
        </label>
        <input type="radio" name="amarillo" id="rverde" />
      </form>
    </div>
  );
};

export const OtraPrueba = () => {
  return (
    <form className="frm">
      <fieldset className="field">
        <legend className="cab"> ¿ Cual es tu fruta preferida?</legend>
        <br />
        <label className="la" htmlFor="chpera">
          Pera:{' '}
        </label>
        <input className="in" type="checkbox" name="Pera" id="chpera" />{' '}
        <label className="la" htmlFor="chmanzana">
          {' '}
          Manzana: {''}
        </label>
        <input type="checkbox" name="Manzana" id="chmanzana" /> {''}
        <label className="la" htmlFor="chbanana">
          Banana: {''}
        </label>
        <input type="checkbox" name="Banana" id="chbanana" />
      </fieldset>
    </form>
  );
};
