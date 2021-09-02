function fiveHeads() {
  let headsCount = 0;
  let attempts = 0;
  return new Promise((resolve, reject) => {
    if (result === "heads" && headsCount < 5) {
      attempts++;
      headsCount++;
    } else {
      headsCount = 0;
    }
  });
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
