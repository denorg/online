# 🕸️ Online

Check if your machine is currently online and connected to the internet in Deno.

[![Test CI](https://github.com/denorg/online/workflows/Test%20CI/badge.svg)](https://github.com/denorg/online/actions)

```ts
import { isOnline } from "https://deno.land/x/online/mod.ts";

const result = await isOnline(); // boolean
```

Alternatively, you can use it directly from the CLI:

```bash
deno run --allow-net https://deno.land/x/online/cli.ts
```

You can also install it globally using the following:

```bash
deno install --allow-net -n online https://deno.land/x/online/mod.ts
```

Then, the package is available to run:

```bash
online # Result: You are online
```

Required permissions:

1. `--allow-net`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## ⭐ Related Work

- [sindresorhus/is-online](https://github.com/sindresorhus/is-online) is the Node.js project serving as inspiration for this one

## 📄 License

MIT © [Denorg](https://den.org.in)
