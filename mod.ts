/** Check if you are online and connected to the internet */
export async function isOnline(
  { timeout, family }: { timeout?: number; family?: number },
): Promise<boolean> {
  const text =
    await (await (await fetch("http://captive.apple.com/hotspot-detect.html"))
      .blob()).text();
  return (text ?? "").toLowerCase().includes("success");
}
