document.getElementById("penjumlahanform").addEventListener("submit", async (event) => {
    event.preventDefault() // agar web kita ga reload

    const firstNumber = document.getElementById(firstNumber).value
    const secondNumber = document.getElementById(secondNumber).value
    const result = document.getElementById(result).value

    try {
        const response = await fetch("http://localhost:3000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstNumber: firstNumber,
                secondNumber: secondNumber

            })
       })      
       
       const data = await response.json()

       if (response.ok) {
            result.textContent = 'Hasil penjumlahannya adalah'
    
    } catch (error) {
        result.textContent = "terjadi kesalahan!"
    }    


})
