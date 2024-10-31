document.getElementById('feedingLog').addEventListener("submit", async function(event){
    event.preventDefault();
    
    // get selected radio btn
    const selectedOption_1 = document.querySelector('input[name="roommate"]:checked').value;
    
    const selectedOption_2 = document.getElementById('dropdown').value;
    
    const selectedOption_3 = document.getElementById('grievance').value;
    
    // update page/content immediately
    document.getElementById("displayContent_1").textContent = selectedOption_1;
    
    document.getElementById("displayContent_2").textContent = selectedOption_2;
    
    document.getElementById("displayContent_3").textContent = selectedOption_3;
});