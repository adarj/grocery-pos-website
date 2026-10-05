# Internationalization guide for agents

Apply [ADR 0005](../adr/0005-internationalized-routing-model.md) before creating
routes, messages, formatting, or commercial context.

- Use an explicit content language route, initially `/en/...`; validate supported
  values. Do not derive market, currency, or tax jurisdiction from the language.
- Pass formatting locale and monetary currency explicitly. Do not hard-code US
  formats or USD because content is English, or treat formatting as commercial authority.
- Keep translatable messages in the chosen message/content boundary once established.
  Use whole messages with named interpolation rather than concatenated fragments;
  account for plural forms and variable order.
- Set `lang`/direction from content context. Use language names, never flags, for
  language selection. Avoid fixed-width, text-in-image, or left/right layout assumptions.
- Exercise pseudo-localization early as non-public qualification infrastructure.
  Follow ADR 0005's controlled-environment and production-exclusion rules for
  language selection and discovery. Check RTL and representative locale formatting
  when relevant; pseudo-language routes must not imply a real market.
- Do not install a translation library or create resources in M0.1. Resource formats,
  fallback/negotiation details, and final library need a working framework and content.

Report implicit defaults and lost context at API seams, not only untranslated text.
