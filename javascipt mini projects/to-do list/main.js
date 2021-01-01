showtask();
let addtaskinput = document.getElementById('addtaskinput');
// console.log("hello");
let addtaskbtn = document.getElementById('addtaskbtn');

addtaskbtn.addEventListener("click", function() {
    addtaskinputval = addtaskinput.value;
    // console.log(addtaskinputval);
    if (addtaskinputval.trim() != 0) {


        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskobj = [];

        } else {
            taskobj = JSON.parse(webtask);
        }
        taskobj.push(addtaskinputval);
        localStorage.setItem("localtask", JSON.stringify(taskobj));
    }
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
        <td><button style="border: none;background-color: white;" type="button"  onclick="edittask(${index})"  class="text-primary">Edit</button></td>
        <td><button style="border: none; background-color: white;" type="button" class="text-danger">Delete</button></td>
    </tr>`;



    });

    addedtasklist.innerHTML = html;
}

function edittask(index) {
    let saveindex = document.getElementById('saveindex');

    let addtaskbtn = document.getElementById('addtaskbtn');
    let savetaskbtn = document.getElementById('savetaskbtn');
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    addtaskinput.value = taskobj[index];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";

}
let savetaskbtn = document.getElementById('savetaskbtn');
savetaskbtn.addEventListener("click", function() {
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    let saveindex = document.getElementById('saveindex').value;
    taskobj[saveindex] = addtaskinput.value;
    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    addtaskinput.value = '';
    showtask();
})