let jacket = { 
  size: "M", 
  color: "Black", 
  id: 1 
};

console.log(JSON.stringify(jacket));

jacket.size = "L";
console.log(JSON.stringify(jacket));

jacket["size"] = "S";
console.log(JSON.stringify(jacket));

delete jacket.size;
console.log(JSON.stringify(jacket));

jacket.size = "M";
console.log(JSON.stringify(jacket));

delete jacket.color;
jacket.colors = {
  colorFront: "Black",
  colorBack: "Black",
  colorSleeves: "White"
};
console.log(JSON.stringify(jacket));

jacket.colors.colorFront = "Gray";
jacket.colors.colorBack = "Gray";
console.log(JSON.stringify(jacket));

jacket.materials = [
  "Cotton", "Polyester"
];
