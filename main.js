document.getElementById('feedingLog').addEventListener("submit", async function(event){
    event.preventDefault();
    
    // get selected radio btn
    const selectedOption_1 = document.querySelector('input[name="roommate"]:checked').value;
    
    // update page/content immediately
    document.getElementById("displayContent_1").textContent = selectedOption_1;
});