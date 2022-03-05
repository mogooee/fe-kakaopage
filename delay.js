const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  }).then((time) => {
    console.log(`${time / 1000}초가 지났습니다.`);
  });
};

delay(3000);
