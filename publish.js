// @ts-check
const { releasePublish } = require("nx/release");

async function main() {
  const result = await releasePublish({
    dryRun: true,
  });
  // Exit with 0 if all publish commands succeeded, otherwise exit with 1
  process.exit(Object.values(result).every((p) => p.code === 0) ? 0 : 1);
}

main();
