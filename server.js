const FAVORITE_INSTRUCTOR = process.env.NAME;
function sleep(ms) {
  console.log(`${FAVORITE_INSTRUCTOR } rock!`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
