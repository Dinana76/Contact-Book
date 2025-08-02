

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apikey")) {
        window.open("enter-api-key.html", "_self");
        return null; // optional: stops further code execution
    }
    return localStorage.getItem("apikey");
}