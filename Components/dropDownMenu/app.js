dropdownBtn = document.querySelector(".dropdownBtn");
console.log(dropdownBtn);

dropdownBtn.addEventListener("mouseover", showDropDownMenus);

function showDropDownMenus(e) {
  const menus = document.querySelector(".dropdownItems");
  e.preventDefault();
  menus.classList.add("show");
  console.log("show");
}
