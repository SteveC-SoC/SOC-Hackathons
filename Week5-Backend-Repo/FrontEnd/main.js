
const mainList = document.querySelector("#items");
const inputForm = document.querySelector("#input-form");

const BACKEND_URL = "http://localhost:5000";  //keep to http as https 5001 didn't fetch

async function loadInitialSoc() {
  
  console.log("Test 1")
  const res = await fetch(`${BACKEND_URL}/Soc`);
  console.log("Test 2")
  const data = await res.json();
  console.log("Test 3")
  data.forEach(renderSoc);
}

function renderSoc(socRow) {
  const { id, Language, Definition, CodeExample, LinkResource, BlobExpert } = socRow;

  const span = document.createElement("span");
  span.innerText = `language ${Language} ${Definition} ${CodeExample} ${LinkResource} ${BlobExpert}`;

  const li = document.createElement("li");
  li.id = `Soc ${id}`;
  li.appendChild(createCheckbox(socRow));
  li.appendChild(span);
  li.appendChild(createDeleteButton(socRow));
  if (isComplete) {
    li.classList.add("completed");
  }
  mainList.appendChild(li);
}

function createCheckbox(socRow) {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", () => {
    toggleSocComplete(socRow);
  });
  return checkBox;
}

function createDeleteButton(socRow) {
  const button = document.createElement("button");
  button.innerText = "DELETE";
  button.addEventListener("click", () => {
    deleteSoc(socRow);
  });
  return button;
}


async function handleAddSoc(event) {
  // stops page reloading by default
  event.preventDefault();
  // get title and priority from form
  const partialSoc = {
    title: event.target[0].value,
    priority: event.target[1].value,
  };
  // sent to database and recieve full item including id
  const completeSoc = await sendSoc("/SocItems", "POST", partialTodo);  // CHECK PATH
  event.target.reset();
  renderSoc(completeSoc);
}

async function sendSoc(path, method, body = "") {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}

async function toggleSocComplete(socRow) {
  const li = document.querySelector(`#to-do-item-${socRow.id}`);
  await sendSoc(`/SocItems/${socRow.id}`, "PUT", {      //todoitems camel case
    ...socRow,
    isComplete: !li.classList.contains("completed"),
  });
  li.classList.toggle("completed");
}

async function deleteSoc(socRow) {
  const res = await fetch(`${BACKEND_URL}/SocItems/${socRow.id}`, {   //todoitems camel case
    method: "DELETE",
  });
  if (res.ok) {
    document.querySelector(`#to-do-item-${socRow.id}`).remove();
  }
}

inputForm.addEventListener("submit", handleAddSoc);

loadInitialSoc();
