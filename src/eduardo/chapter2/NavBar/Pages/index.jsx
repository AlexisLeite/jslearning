import { Link } from '@chakra-ui/react';

export const Pages = () => {
  return (
    <ul className="Pages">
      <li>
        <Link className="buttonwhite" href="/eduardo2/incoming">
          Incoming messages
        </Link>
      </li>
      <li>
        <Link className="buttonwhite" href="/eduardo2/products">
          Products
        </Link>
      </li>
      <li>
        <Link className="buttonwhite" href="/eduardo2/counter">
          Counter
        </Link>
      </li>
      <li>
        <Link className="buttonwhite" href="/eduardo2/todo">
          Todo
        </Link>
      </li>
      <li>
        <Link className="buttonwhite" href="/eduardo2/timer">
          Timer
        </Link>
      </li>
    </ul>
  );
};
