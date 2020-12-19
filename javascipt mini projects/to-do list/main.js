showtask();
let addtaskinput = document.getElementById('addtaskinput');
// console.log("hello");
let addtaskbtn = document.getElementById('addtaskbtn');

addtaskbtn.addEventListener("click", function() {
    addtaskinputval = addtaskinput.value;
    // console.log(addtaskinputval);
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];

    } else {
        taskobj = JSON.parse(webtask);
    }
    taskobj.push(addtaskinputval);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();

})

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];

    } else {
        taskobj = JSON.parse(webtask);
    }

    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskobj.forEach((item, index) => {
        html += ` <tr>
        <th scope="row">${index+1}</th>
        <td colspan="2" class="table-active">${item}</td>
        <td><button style="border: none; background-color: white;" type="button" class="text-primary">Edit</button></td>
        <td><button style="border: none; background-color: white;" type="button" class="text-danger">Delete</button></td>
    </tr>`;



    });

    addedtasklist.innerHTML = html;
}