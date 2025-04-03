const btn = document.getElementById("btn-shorten");
const urlInput = document.getElementById("input-shorten");

async function shortenUrl(longUrl) {
    try {
        const response = await fetch(
            `https://tinyurl.com/api-create.php?url=${longUrl}`
        );
        if (!response.ok) throw new Error("Erro ao encurtar a URL");

        const shortUrl = await response.text();
        alert(shortUrl);
    } catch (error) {
        console.error("Erro:", error.message);
    }
}

function validateUrl(){
    if (urlInput.value.trim() === "") {
        alert("Insira uma URL");
    } else {
        shortenUrl(urlInput.value);
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    validateUrl()
});