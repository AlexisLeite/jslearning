const Celulares = [
  { marca: 'Motrola', modelo: 'J345', precio: '$5.000' },
  { marca: 'Samnsung', modelo: 'S520', precio: '$4.500' },
  { marca: 'Iphone', modelo: '11200', precio: '$54.000' },
  { marca: 'Samsung', modelo: 'Z52', precio: '$8.000' },
  { marca: 'Motrola', modelo: '5d23', precio: '$7.000' },
];

export const ListadoCelulares = () => (
  <ul id="ListaCelulares">
    {Celulares.map(current => (
      <li key={current.marca}>
        <span className="marca__etiqueta">Marca: </span>
        <strong className="marca"> {current.marca} </strong> - modelo:
        <strong className="modelo"> {current.modelo} </strong> - Precio:
        <strong className="precio"> {current.precio} </strong>
      </li>
    ))}
  </ul>
);
