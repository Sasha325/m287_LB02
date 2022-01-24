const dropList = document.querySelectorAll(".sizes"),
  fromSize = document.querySelector(".from select"),
  getButton = document.querySelector("form button");
fromRegion = document.querySelector(".from-region select");
toRegion = document.querySelector(".to-region select");
sexSelectors = document.getElementsByName("sex");
convertableRegions = document.getElementsByClassName("convertable-regions");
console.log(convertableRegions)

let sex = "men";
let from = "us";
let size = sizes[sex][0][from];
let to = "eu";

const regions = '{"us":"US", "uk":"UK", "eu":"EU"}';

fromSize.addEventListener("change", (e) => {
  size = e.target.value;
});

fromRegion.addEventListener("change", (e) => {
  from = e.target.value;
  computeFromSizes();
  loadFlag(e.target);
});

toRegion.addEventListener("change", (e) => {
  to = e.target.value;
  loadFlag(e.target);
});

getButton.addEventListener("click", (e) => {
  e.preventDefault(); //preventing form from submitting
  getShoeSize();
});

function computeRegions() {
  const parsedRegions = JSON.parse(regions);
    let optionTag;
  console.log(parsedRegions);
  for (let i=0; i<2; i++){
      for (const key in parsedRegions) {
          if (i===1 && key==='eu') {
              optionTag = `<option value="${key}" selected>${parsedRegions[key]}</option>`;
          }else{
              optionTag = `<option value="${key}">${parsedRegions[key]}</option>`;
          }
        convertableRegions[i].insertAdjacentHTML("beforeend", optionTag);
      }
  }
}

function computeFromSizes() {
  while (fromSize.lastElementChild) {
    fromSize.removeChild(fromSize.lastElementChild);
  }

  let sizesArray = [];

  sizes[sex].forEach((i) => {
    sizesArray.push(i[from]);
  });
  sizesArray = [...new Set(sizesArray)];
  for (let index in sizesArray) {
    let optionTag = `<option value="${sizesArray[index]}">${sizesArray[index]}</option>`;
    fromSize.insertAdjacentHTML("beforeend", optionTag);
  }
  size = sizesArray[0];
}

function computeToSize() {
  let temp = sizes[sex].filter((i) => i[from] == size);
  return temp[0][to];
}

function getRadioVals() {
  let radios = document.getElementsByName("sex");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      sex = radios[i].value;
    }
  }
}

function loadFlag(element) {
  let imgTag = element.parentElement.querySelector("img"); // selecting img tag of particular drop list
  if (element.value === "us") {
    // passing country code of a selected currency code in a img url
    imgTag.src = `https://flagcdn.com/48x36/us.png`;
  } else if (element.value === "eu") {
    imgTag.src = `https://flagcdn.com/48x36/eu.png`;
  } else {
    imgTag.src = `https://flagcdn.com/48x36/gb.png`;
  }
}

function getShoeSize() {
  const resultField = document.querySelector("#result");

  resultField.innerText = computeToSize();
}

for (let i = 0; i < sexSelectors.length; i++) {
  sexSelectors[i].addEventListener("click", () => {
    getRadioVals();
    computeFromSizes();
  });
}

computeRegions()
computeFromSizes();
