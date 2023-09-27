$("#Submit").click(function() {
    alert("Submit button was pressed");
})

$("#clear").click(function() {
    $("shoe_name").val("");
    $("year_released").val("");
    $("shoe_type").val("");
    $("brand").val("");
    $("price").val("");
    $("color").val("");
})