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
