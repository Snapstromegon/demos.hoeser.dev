const staticMarker = document.querySelector("#static");
const dynamicMarker = document.querySelector("#dynamic");
async function main() {
  try {
    await import("./static.js");
    staticMarker.innerText = "✔️";
  } catch (e) {
    staticMarker.innerText = "❌";
  }

  try {
    await import("./dynamic.js");
    dynamicMarker.innerText = "✔️";
  } catch (e) {
    console.trace(e)
    dynamicMarker.innerText = "❌";
  }
}
main();
