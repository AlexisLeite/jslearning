import { Link } from '@chakra-ui/react';

export const Pages = () => {
  return (
    <ul className="Pages">
      <li>
        <Link className="button white" href="/eduardo2/incoming">
          Incoming messages
        </Link>
      </li>
      <li>
        <Link className="button white" href="/eduardo2/products">
          Products
        </Link>
      </li>
    </ul>
  );
};
