document.getElementById('feedingLog').addEventListener("submit", async function(event){
    event.preventDefault();

    // timestamp calculations
    const timestamp = Date.now();
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString(); // calculates to users local time
    const time = Math.ceil(date); 
    const formattedTime = time.toLocaleTimeString();
    // calculates to users local time
    
    
    // get selected/inputed values from the form
    const roommate = document.querySelector('input[name="roommate"]:checked').value;
    const grievance = document.getElementById('grievance').value;
    const mealtime = formattedDate+" "+formattedTime;
    
    // update the page content immediately 
    document.getElementById("displayContent").innerHTML = `
        <p class="content">Fed by: ${roommate}</p>
        <p class="content-time">${mealtime}</p>
        <p class="content">Grievances: ${grievance}</p>
    `;

    // send data to the server
    const response = await fetch("/update-content", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ roommate, mealtime, grievance })
    });

    if (!response.ok) {
        alert("Failed to update content on server.")
    }
});
