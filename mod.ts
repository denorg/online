export interface OnlineParams {
  timeout?: number;
}

/**
 * Timeout a Promise after a duration
 * @param ms - Number of miliseconds
 * @param promise - Promise to return
 * @source https://github.com/github/fetch/issues/175#issuecomment-216791333
 */
function timeoutPromise(
  ms: number,
  promise: Promise<boolean>,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve(false);
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        resolve(false);
      },
    );
  });
}

async function checkOnline(
  params?: OnlineParams,
): Promise<boolean> {
  const text =
    await (await (await fetch("http://captive.apple.com/hotspot-detect.html", {
      headers: {
        "User-Agent": "CaptiveNetworkSupport/1.0 wispr",
      },
    }))
      .blob()).text();
  return (text ?? "").toLowerCase().includes("success");
}

/** Check if you are online and connected to the internet */
export function isOnline(params?: OnlineParams) {
  if (params?.timeout) {
    return timeoutPromise(params.timeout, checkOnline(params));
  }
  return checkOnline(params);
}
