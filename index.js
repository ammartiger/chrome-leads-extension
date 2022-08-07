let myLeads=[];
const inputEl =document.getElementById("input-el") 
const inputBtn =document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")


const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads);
}
/*
myLeads.push("ammar")
console.log(myLeads)
console.log(typeof myLeads)
myLeads=JSON.stringify(myLeads)
console.log(typeof myLeads)
localStorage.setItem("Name","Ammar");
let name1= localStorage.getItem("Name")
console.log(name1)
*/
//console.log(ulEl)
//let lead="www.awesomelead.com"

inputBtn.addEventListener("click", function(){
    //console.log("button clicked")
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //console.log(myLeads)
    console.log(localStorage.getItem("myLeads"))
    render(myLeads);
    inputEl.value=""
    
})

deleteBtn.addEventListener("dblclick", ()=>{
    //console.log("button clicked")
    localStorage.clear;
    myLeads=[];
    render(myLeads);
    inputEl.value=""
    
})

function render(leads){
    let listItems=""
    for(let y=0;y<leads.length;y++){
        listItems += `
            <li>
                <a target='_blank' href='${leads[y]}'>
                    ${leads[y]}
                </a>
            </li>
        `
    // console.log(listItems)
    }
    //console.log(listItems)
    ulEl.innerHTML=listItems;
}

//Another method for loop
/*for(let x of myLeads){ 
    console.log(x)
}
console.log(myLeads)
*/

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify( myLeads ) )
        render(myLeads)
    })
    

})