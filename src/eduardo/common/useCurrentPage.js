import { useEffect, useState } from 'react';

export function useCurrentPage(routes) {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const r = Object.entries(routes);
    let match = null;

    for (let i = 0; i < r.length; i++) {
      if (window.location.href.match(r[i][1])) {
        match = r[i][0];
        break;
      }
    }

    setRoute(match ?? 'default');
  }, [routes]);

  return route;
}
