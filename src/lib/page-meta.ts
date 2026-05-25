import { useEffect } from "react";

type MetaTag = { name?: string; property?: string; content: string };
type ScriptTag = { src?: string; children?: string; async?: boolean };

export function usePageMeta(opts: {
  title?: string;
  meta?: MetaTag[];
  scripts?: ScriptTag[];
}) {
  useEffect(() => {
    const added: HTMLElement[] = [];
    const prevTitle = document.title;

    if (opts.title) document.title = opts.title;

    for (const m of opts.meta ?? []) {
      const key = m.name ? `name="${m.name}"` : `property="${m.property}"`;
      const selector = `meta[${key}]`;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (m.name) el.setAttribute("name", m.name);
        if (m.property) el.setAttribute("property", m.property);
        document.head.appendChild(el);
        added.push(el);
      }
      el.setAttribute("content", m.content);
    }

    for (const s of opts.scripts ?? []) {
      const el = document.createElement("script");
      if (s.src) el.src = s.src;
      if (s.async !== false) el.async = true;
      if (s.children) el.text = s.children;
      document.body.appendChild(el);
      added.push(el);
    }

    return () => {
      document.title = prevTitle;
      for (const el of added) el.remove();
    };
  }, [opts.title, JSON.stringify(opts.meta), JSON.stringify(opts.scripts)]);
}
