import { isOnline } from "https://deno.land/x/online/mod.ts";

isOnline()
  .then(result => console.log(result ? "You are online" : "You are not online"));
