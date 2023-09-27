var data = '[{"Name":"Nike SB Dunk Low", "Released": "09/01/2020", "Type": "sneaker", "Brand": "Nike", "Price": "$95", "Color": "Red/White"},{"Name":"Ultra Boost", "Released": "11/30/2022", "Type": "running", "Brand": "Adidas", "Price": "$200", "Color": "Black"}, {"Name":"Jordan 1", "Released": "08/31/2019", "Type": "high-top", "Brand": "Nike", "Price": "$160", "Color": "Obsidian Blue"},{"Name":"Yeezy Boost 350 v2", "Released": "03/21/2022", "Type": "runner", "Brand": "Adidas", "Price": "$230", "Color": "Bone"}, {"Name":"J Balvin Medellin Sunset", "Released": "09/23/2023", "Type": "sneaker", "Brand": "Nike", "Price": "$250", "Color": "Multi-Color"}]';

var jsonObject = JSON.parse(data);
main();

function main(){
    console.log(data);
    console.log(jsonObject)
    showTable();
}

function showTable() {
    var htmlString = "";
    for(var i = 0; i < jsonObject.length; i++){
        htmlString += "<tr>";
        htmlString += "<td>" + jsonObject[i].Name + "</td>";
        htmlString += "<td>" + jsonObject[i].Released + "</td>";
        htmlString += "<td>" + jsonObject[i].Type + "</td>";
        htmlString += "<td>" + jsonObject[i].Brand + "</td>";
        htmlString += "<td>" + jsonObject[i].Price + "</td>";
        htmlString += "<td>" + jsonObject[i].Color + "</td>";

        htmlString += "</tr>";
    }
    
    $("#shoe_table").html(htmlString);
}