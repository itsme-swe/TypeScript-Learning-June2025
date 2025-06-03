// 💥 Creating Promise
const fetchData = (val: boolean): Promise<string> => {
  return new Promise((res, rej) => {
    if (val) {
      setTimeout(() => {
        res("Data fetched successfully");
      }, 3000);
    } else {
      rej("Error found!");
    }
  });
};

fetchData(false)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// 💥 Async Await

async function fetchAPIData(): Promise<string> {
  return "Data fetched";
}

async function getData(): Promise<void> {
  try {
    const data = await fetchAPIData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
