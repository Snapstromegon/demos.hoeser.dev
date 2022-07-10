async function main() {
  const data = (await import("./data.json", { assert: { type: "json" } }))
    .default;
  console.log("dynamic", data);
}
main();
