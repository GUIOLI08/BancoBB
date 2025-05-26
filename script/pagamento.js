const botao = document.getElementById("notification");
const icon1 = document.getElementById("notification-icon");
const icon2 = document.getElementById("icon-notification");
const botaoDashboard = document.getElementById("dashboard");
const botaoPayment = document.getElementById("payments");
const botaoCards = document.getElementById("cards");
const botaoSettings = document.getElementById("settings");
const botaoAccount = document.getElementById("account");
const botaoSignout = document.getElementById("signout");

botao.addEventListener("mouseover", function(){
    icon1.style.display = "none"
    icon2.style.display = "block"
});
botao.addEventListener("mouseleave", function(){
    icon1.style.display = "block"
    icon2.style.display = "none"
});
botaoDashboard.addEventListener("click", () => {
    window.location.href = "../pages/dashboard.html";
});
botaoPayment.addEventListener("click", () => {
    window.location.href = "../pages/pagamento.html";
});
botaoCards.addEventListener("click", () => {
    window.location.href = "../pages/cartoes.html";
});
botaoSettings.addEventListener("click", () => {
    window.location.href = "../pages/configuracoes.html";
});
botaoAccount.addEventListener("click", () => {
    window.location.href = "../pages/conta.html";
});
botaoSignout.addEventListener("click", () => {
    window.location.href = "../pages/landingpage.html"
});