# 🕸️ Online

Check if your machine is currently online and connected to the internet in Deno.

```ts
import { isOnline } from "https://raw.githubusercontent.com/denorg/online/master/mod.ts";

const result = await isOnline(); // boolean
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
