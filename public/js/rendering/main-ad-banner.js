import { $ } from "../utils.js";
import { mainAdBanner } from "../components/main-ad-banner.js";
import { makingClone, changeTab } from "../event/event-slide.js";

export const renderingMainAd = (selectedValue) => {
  const item = fetch(
    "https://raw.githubusercontent.com/mogooee/fe-kakaopage/demo/data/ad-data.json"
  )
    .then((response) => response.json())
    .then((json) => json.filter((e) => e.category === selectedValue))
    .then((filter) =>
      filter
        .map((e, i) => mainAdBanner(e, i, filter.length))
        .reduce((acc, cur) => acc + cur)
    )
    .then((data) => ($(".event-slider").innerHTML = data))
    .then(() => {
      makingClone();
      changeTab();
    });
};
