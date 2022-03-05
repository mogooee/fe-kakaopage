import { renderingNav } from "../index.js";
import { settingContents } from "../controllers/setting-contents.js";

const blockingRerendering = (selectedElement) => {
  if (selectedElement.id === "selected") return true;
};

export const handleCategory = (e) => {
  if (e.target.nodeName !== "LI") return;
  const selectedElement = e.target;
  const selectedValue = selectedElement.dataset.value;
  const selectedNav = e.target.parentNode.parentNode
    .getAttribute("class")
    .split(" ")[0];
  if (blockingRerendering(selectedElement)) return;
  renderingNav(selectedNav, selectedElement);
  settingContents(selectedNav, selectedValue);
};
