import { useEffect, useState } from 'react';

export function useCurrentPage(routes) {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const r = Object.entries(routes);
    for (let i = 0; i < r.length; i++) {
      if (window.location.href.match(r[i][1])) {
        setRoute(r[i][0]);
        break;
      }
    }
  }, [routes]);

  return route;
}
