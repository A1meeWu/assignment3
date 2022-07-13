const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455-983-0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455-983-0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455-345-0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321-345-0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function generateTable(data) {
  const table = document.createElement("table");
  createTableHead(table, data.tableHeader);
  createTableBody(table, data.tableContent);
  document.querySelector(".table-container").appendChild(table);
}

function createTableHead(table, header) {
  const tr = document.createElement("tr");
  header.map((v) => {
    const th = document.createElement("th");
    th.textContent = v;
    tr.appendChild(th);
  });
  table.appendChild(tr);
}

function createTableBody(table, body) {
  body.forEach((v) => {
    const tr = document.createElement("tr");

    Object.values(v).forEach((item) => {
      const tb = document.createElement("td");
      tb.textContent = item;
      tr.appendChild(tb);
    });
    table.appendChild(tr);
  });
}

generateTable(tableInfo);

//Question2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const orderList = document.createElement("ol");

list.forEach((v) => {
  const li = document.createElement("li");
  li.textContent = v;
  orderList.appendChild(li);
});
document.querySelector(".list-container").appendChild(orderList);

const unorderedList = document.createElement("ul");
list.forEach((v) => {
  const li = document.createElement("li");
  li.textContent = v;
  unorderedList.appendChild(li);
});
document.querySelector(".unOrderedList-container").appendChild(unorderedList);

//question3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const dropdownlist = document.getElementById("city");

dropDownList.forEach((v) => {
  const option = document.createElement("option");
  option.setAttribute("value", Object.values(v)[0]);
  option.text = Object.values(v)[1];
  dropdownlist.appendChild(option);
});
