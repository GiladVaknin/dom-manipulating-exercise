const ul = document.getElementById("list");
const button = document.getElementById("Add item");
const input = document.getElementById("item");
button.onclick = handleClick;
function handleClick() {
  const value = input.value;
  input.value = "";
  const li = document.createElement("LI");
  const liSpan = document.createElement("SPAN");
  const liButton = document.createElement("BUTTON");
  li.append(liSpan);
  li.append(liButton);
  liSpan.textContent = value;
  liButton.textContent = "delete";
  ul.append(li);
  input.focus();
  liButton.onclick = function () {
    ul.removeChild(li);
    input.focus();
  };
}
