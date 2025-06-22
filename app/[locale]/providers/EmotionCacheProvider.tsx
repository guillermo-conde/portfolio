"use client";

import { CacheProvider } from "@emotion/react";
import createCache, { EmotionCache } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

interface ExtendedEmotionCache extends EmotionCache {
  flush?: () => string[];
}

export default function EmotionCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" }) as ExtendedEmotionCache;
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    cache.flush = flush;
    return cache;
  });

  useServerInsertedHTML(() => {
    const names = cache.flush?.();
    if (names?.length) {
      return (
        <style
          key={cache.key}
          data-emotion={`${cache.key} ${names.join(" ")}`}
          dangerouslySetInnerHTML={{
            __html: names
              .map((name: string) => cache.inserted[name])
              .filter(Boolean)
              .join(""),
          }}
        />
      );
    }
    return null;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
