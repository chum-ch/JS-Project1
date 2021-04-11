// ====================================================Create the Mune Function==================================================
function createOwnMenu(event){
    event.preventDefault();
    let informationList = document.querySelector(".informationList");
    let food = document.getElementById("food").value.toUpperCase();
    if (food === ""){
        window.alert("Please input your food name!");
    }
    else{
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = food;  
        
        let i = document.createElement("i");

        i.classList.add("fa", "fa-trash");
        
        ul.appendChild(li);
        ul.appendChild(i);
        informationList.appendChild(ul);
        document.getElementById("food").value = "";
        
    }
}
// ========================Sort Menu==================


// ====================================================Create Order Name Food==================================================
function createOrderFood(event){
    event.preventDefault();
    // =================================Get Value From Input===================================
    let gridInformation = document.querySelector(".gridInformation");
    let nameOrderFood = document.querySelector("#foodOrder").value;
    let numberOrder = document.querySelector("#numberOrder").value;
    let pricesOrder = document.querySelector("#pricesOrder").value;
    let dateOrder = document.querySelector("#dateOrder").value;

    // =================================Alert SMS If Input Empty===================================
    if (nameOrderFood === ""){
        window.alert("Please input name of you favorite food!");
    }
    else if (numberOrder <= 0 || numberOrder === ""){
        window.alert("Please input the number you wnat to order!");
    }
    else if (pricesOrder <=0 || pricesOrder === ""){
        window.alert("Please input your prices want you wnant to order!");
    }
    else if (dateOrder === ""){
        window.alert("Please choose the date that you recieve order!");
    }
    else{
    // =================================Create Structure Element In Container Two===================================
        let mixThree = document.createElement("div");
        mixThree.className = "mixThree";
        mixThree.style.display = "flex"
        let price = document.createElement("div");
        price.className = "price";
    
        let priceParagraph = document.createElement("p");
        priceParagraph.textContent = pricesOrder;
    
        let h4 = document.createElement("h4");
        h4.textContent = numberOrder;
        let dateName = document.createElement("div");
        dateName.className = "date-name";
    
        let nameParagraph = document.createElement("p");
        nameParagraph.className = "name";
        nameParagraph.textContent =  nameOrderFood;
    
        let dateParagraph = document.createElement("p");
        dateParagraph.className = "date";
        dateParagraph.textContent = dateOrder;
    
        let editAndDelete = document.createElement("div");
        editAndDelete.className = "edit-delete";
    
        let iconTrash = document.createElement("i");
        iconTrash.classList.add("fa", "fa-trash");
    
        let iconEdit = document.createElement("i");
        iconEdit.classList.add("fa", "fa-edit");
    // ================================= Add to Div Element ===================================
        price.appendChild(priceParagraph);
        price.appendChild(h4);

        dateName.appendChild(nameParagraph);
        dateName.appendChild(dateParagraph);
    
        editAndDelete.appendChild(iconTrash);
        editAndDelete.appendChild(iconEdit);
    
        mixThree.appendChild(price);
        mixThree.appendChild(dateName);
        mixThree.appendChild(editAndDelete);
    
        gridInformation.appendChild(mixThree);
        arrayMixThree.push(mixThree)
        removeOrder(event)
        refreshContainerTwo();
    }
}
arrayMixThree = [];
index = 0;
// ==============================Refresh Value Container Two==============================
function refreshContainerTwo(){
    document.querySelector("#foodOrder").value = "";
    document.querySelector("#numberOrder").value = "";
    document.querySelector("#pricesOrder").value = "";
    document.querySelector("#dateOrder").value = "";
}

// ====================================================Edit Order Food==================================================


arrayTable = [];
arrayName = [];
arrayCloseTable = [];

function exsperCooker(event){
    let firstName = document.querySelector("#fname-expert").value;
    let lastName = document.querySelector("#lname-expert").value;
    let ages = document.querySelector("#age").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    if (firstName === ""){
        window.alert("Please input the name!");
    }
    else if (lastName === ""){
        window.alert("Please input the last name!");
    }
    else if (ages === ""){
        window.alert("Please input the ages!");
    }
    else if (phone === ""){
        window.alert("Please input the phone!");
    }
    else if(email === ""){
        window.alert("Please input the email!");
    }
    else{
        let informationExpert = document.querySelector(".informationExpert");
        let countryID = document.querySelector("#countryID").value;
        let aboutU = document.createElement("div");
        aboutU.classList.add("aboutU");

        let boxColor = document.createElement("div");
        boxColor.className = "box-color";
        boxColor.textContent = countryID.toUpperCase();
        let ranColor = boxColor.style.background = bgChange();

        let pName = document.createElement("p");
        pName.textContent = firstName.toUpperCase();

        let h4 = document.createElement("h4");
        h4.textContent = "More";
        
        let i = document.createElement("i");
        i.classList.add("fa", "fa-trash");

        let mouseOver = document.createElement("div");
        mouseOver.className = "mouseOver";

        let mouseOverP = document.createElement("p");
        mouseOverP.textContent = "Please click " + h4.textContent + " to view more detail about " + pName.textContent;
        mouseOver.appendChild(mouseOverP);
        aboutU.appendChild(boxColor);
        aboutU.appendChild(pName);
        aboutU.appendChild(h4)
        aboutU.appendChild(i);
        aboutU.appendChild(mouseOver)
        informationExpert.appendChild(aboutU);


        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let firstTr = document.createElement("tr");
        let thFullname = document.createElement("th");
        thFullname.colSpan = "6";
        thFullname.textContent = firstName.toUpperCase() +" "+ lastName.toUpperCase();
        firstTr.id = "secret";
        firstTr.style.background = ranColor;
        let secondTr = document.createElement("tr");
        let fNameTh = document.createElement("th");
        fNameTh.textContent = "First name";
        let lNameTh = document.createElement("th");
        lNameTh.textContent = "Last name";
        let ageTh = document.createElement("th");
        ageTh.textContent = "Ages";
        let countryTh = document.createElement("th");
        countryTh.textContent = "Country";
        let phoneTh = document.createElement("th");
        phoneTh.textContent = "Phone";
        let emailTh = document.createElement("th");
        emailTh.textContent = "Email";

        let tbody = document.createElement("tbody");
        let thirdTr = document.createElement("tr");
        let fNameTd = document.createElement("td");
        fNameTd.textContent = firstName;
        let lNameTd = document.createElement("td");
        lNameTd.textContent = lastName;
        let ageTd = document.createElement("td");
        ageTd.textContent = ages;
        let countryTd = document.createElement("td");
        countryTd.textContent = countryID;
        let phoneTd = document.createElement("td");
        phoneTd.textContent = phone;
        let emailTd = document.createElement("td");
        emailTd.textContent = email;

        firstTr.appendChild(thFullname);
        thead.appendChild(firstTr);
        secondTr.appendChild(fNameTh);
        secondTr.appendChild(lNameTh);
        secondTr.appendChild(ageTh);
        secondTr.appendChild(countryTh);
        secondTr.appendChild(phoneTh);
        secondTr.appendChild(emailTh);
        thead.appendChild(secondTr);
        
        thirdTr.appendChild(fNameTd);
        thirdTr.appendChild(lNameTd);
        thirdTr.appendChild(ageTd);
        thirdTr.appendChild(countryTd);
        thirdTr.appendChild(phoneTd);
        thirdTr.appendChild(emailTd);
        tbody.appendChild(thirdTr);

        table.appendChild(thead);
        table.appendChild(tbody);
        informationExpert.appendChild(table);
    
        let addBtnCloseTable = document.createElement("button");
        addBtnCloseTable.id = "closeTable";
        addBtnCloseTable.textContent = "Close"
        informationExpert.appendChild(addBtnCloseTable);


        arrayName.push(aboutU)
        arrayTable.push(table)
        arrayCloseTable.push(addBtnCloseTable)
        aboutU.addEventListener("mouseover", ()=>{
            mouseOver.style.opacity = "1";
        });
        aboutU.addEventListener("mouseout", ()=>{
            mouseOver.style.opacity = "0";
        });
        
        h4.addEventListener("click", ()=>{
            for(let items of arrayName){
                items.style.display = "none";
            }
            document.querySelector(".girdExpert form").style.display = "none";
            document.querySelector(".informationExpert .searchCooker").style.display = "none";
            aboutU.nextElementSibling.style.display = "block";
            table.nextElementSibling.style.display = "block";
        });

        let closeTable = document.querySelectorAll(".informationExpert #closeTable");
        for (let allcloseTB of closeTable){
            allcloseTB.addEventListener("click", ()=>{
                for(let items of arrayName){
                    items.style.display = "flex";
                }
                for(let tableItems of arrayTable){
                    tableItems.style.display = "none";
                }
                for(let closeTableItems of arrayCloseTable){
                    closeTableItems.style.display = "none"
                }
                document.querySelector(".girdExpert form").style.display = "block";
                document.querySelector(".informationExpert .searchCooker").style.display = "flex";
            });
        }
        refreshContainerThree()
    }
}



// ==============================================Container Three Expert Cooker======================================

// ========================Random Color For Label========================
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function bgChange() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}

// ===================================Remove Items Container Three=============================
function removeExpertCooker (event){
    if(event.target.className === "fa fa-trash"){
        window.alert("Are you sure want to delete?")
        event.target.parentElement.remove();
    }
}

// ==============================Refresh ExsperCooker ===================================
function refreshContainerThree(){
    document.querySelector("#fname-expert").value = "";
    document.querySelector("#lname-expert").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#country").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#email").value = "";
}


function searchName(){
    let inputCooker = document.querySelector(".searchCooker #search").value.toUpperCase();
    let allP = document.querySelectorAll(".aboutU p")
    console.log(allP)
    for(let i of allP){
        if (i.textContent.indexOf(inputCooker) === -1){
            i.parentElement.style.display = "none";
        }
        else{
            i.parentElement.style.display = "flex";
        }
    }
}
// ================================Remove Items Container Two=================================
function removeOrder(event){
    event.preventDefault()
    let removeOrderListApp = document.querySelector(".mixThree");
    if (event.target.className === "fa fa-trash"){
        window.alert("Are you sure want to delete?")
        removeOrderListApp.parentNode.removeChild(removeOrderListApp);
    }
    else if (event.target.className === "fa fa-edit"){
        document.querySelector("#Order-btn").style.display = "none";
        document.querySelector("#foodOrder").value = document.querySelector(".mixThree .date-name .name").textContent;
        document.querySelector("#numberOrder").value = document.querySelector(".mixThree .price h4").textContent;
        document.querySelector("#pricesOrder").value = document.querySelector(".mixThree .price p").textContent;
        document.querySelector("#dateOrder").value = document.querySelector(".mixThree .date-name .date").textContent;
        let update = document.querySelector("#update");
        update.style.display ="block";
        update.addEventListener("click", (event)=>{
            event.preventDefault()
            document.querySelector(".mixThree .date-name .name").textContent = document.querySelector("#foodOrder").value;
            document.querySelector(".mixThree .price h4").textContent = document.querySelector("#numberOrder").value;
            document.querySelector(".mixThree .price p").textContent = document.querySelector("#pricesOrder").value;
            document.querySelector(".mixThree .date-name .date").textContent = document.querySelector("#dateOrder").value;
            update.style.display = "none"
            document.querySelector("#Order-btn").style.display = "block";
            refreshContainerTwo();
        });
    }
}
// ================================= Button Hide and Show Container One==========================================
function hideInformation(){
    let information = document.querySelector(".information");
    information.style.display = "none";
}
function showInformation(){
    let information = document.querySelector(".information");
    information.style.display = "block";
}

// ==================================Remove The Itmes Container One====================================
function removeItem(event) {
    if (event.target.className === "fa fa-trash"){
        window.alert("Are you sure want to delete?")
        event.target.parentElement.remove();
    }
}
// ==================================Event Click Create Menu======================================
let creatMenu = document.getElementById("createMenu");
creatMenu.addEventListener("click", createOwnMenu);

// =============================Event Click Remove Item Container One=============================
let eventOnClick = document.querySelector(".informationList");
eventOnClick.addEventListener("click", removeItem);


// ==========================Event Click Hide And Show Information Containter One==============================
let hide = document.getElementById("hide");
hide.addEventListener("click", hideInformation);

let show = document.getElementById("show");
show.addEventListener("click", showInformation);

// ==========================================Event Click Create Order Food===============================================
let orderFood = document.getElementById("Order-btn");
orderFood.addEventListener("click", createOrderFood);

// ==========================================Event Click Remove Item Order===============================================
let eventRemoveOrder = document.querySelector(".gridInformation");
eventRemoveOrder.addEventListener("click", removeOrder);

// ============================================Event Click Remoe Item Expert======================================
let btnSubmit = document.getElementById("btn-expert");
btnSubmit.addEventListener("click", exsperCooker)

let informationExpert = document.querySelector(".informationExpert");
informationExpert.addEventListener("click", removeExpertCooker);

let search = document.querySelector(".searchCooker #search")
search.addEventListener("keyup", searchName)

// ====================================== Hide And Show All The Menu=================================
// ============================== Container One==================================
let listHome = document.querySelector("#list-home");
listHome.addEventListener("click", ()=>{
    document.querySelector(".containerOne").style.display = "block";
    document.querySelector(".containerTwo").style.display = "block";
    document.querySelector(".containerThree").style.display = "block";
});
let listMenu = document.querySelector("#list-menu");
listMenu.addEventListener("click", ()=>{
    document.querySelector(".containerOne").style.display = "block";
    document.querySelector(".containerTwo").style.display = "none";
    document.querySelector(".containerThree").style.display = "none";
});

    // =================================Container Two===================================
let listOrder = document.querySelector("#list-order")
listOrder.addEventListener("click", ()=>{
    document.querySelector(".containerTwo").style.display = "block";
    document.querySelector(".containerOne").style.display = "none";
    document.querySelector(".containerThree").style.display = "none";
});

// ================== Exspert==================
let listExpert = document.querySelector("#list-expert");
listExpert.addEventListener("click", ()=>{
    document.querySelector(".containerOne").style.display = "none";
    document.querySelector(".containerTwo").style.display = "none";
    document.querySelector(".containerThree").style.display = "block";
});
