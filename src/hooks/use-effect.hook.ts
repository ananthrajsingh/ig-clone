import { Query } from "@datorama/akita";
import { useMemo, useState, useRef, useEffect } from "react";
import { Observable, Subscription } from "rxjs";

export function useQuery<T, U extends keyof T>(query: Query<T>, select: U) {
    const initial = useMemo(() => query.getValue()[select], [query, select]);

    const [latest, setLatest] = useState(initial);

    const select$ = useRef<Observable<T[U]>>();
    const sub = useRef<Subscription>();

    useEffect(
      function() {
          if (sub.current) {
              sub.current.unsubscribe();
              setLatest(initial);
          }

          select$.current = query.select(select);

          sub.current = select$.current.subscribe(function(value) {
              setLatest(value);
          });

          return () => sub.current && sub.current.unsubscribe();
      },
      [query, select]
    );

    return latest;
}
