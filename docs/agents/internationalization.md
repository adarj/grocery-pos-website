# Internationalization guide for agents

Apply [ADR 0005](../adr/0005-internationalized-routing-model.md) before creating
routes, messages, formatting, or commercial context.
Implemented behavior and qualification live in the
[i18n foundation](../architecture/internationalization.md).

- Use `/[lang]` and `Language`'s exact route validation/public exposure queries.
  English at `/en` is the only public language; `/en-XA` is development-only.
  Unsupported values must return 404 rather than fallback English.
  Do not derive market, currency, or tax jurisdiction from the language.
- Pass formatting locale and monetary currency explicitly. Do not hard-code US
  formats or USD because content is English, or treat formatting as commercial authority.
- Use `Messages`' semantic keys for this engineering surface; keep literals out of UI.
  Use whole messages with named interpolation rather than concatenated fragments;
  account for plural forms and variable order.
- Set `lang`/direction from content context. Use language names, never flags, for
  language selection. Avoid fixed-width, text-in-image, or left/right layout assumptions.
- Exercise pseudo-localization early as non-public qualification infrastructure.
  Follow ADR 0005's controlled-environment and production-exclusion rules for
  language selection and discovery. Check RTL and representative locale formatting
  when relevant; pseudo-language routes must not imply a real market.
- Before adding a second public language, qualify weighted `Accept-Language` matching
  against registry-derived public candidates. The present operation is default-only.
- Keep heavyweight translation tooling deferred until actual plural/interpolation,
  resource, or multilingual editorial requirements justify it.

Report implicit defaults and lost context at API seams, not only untranslated text.
