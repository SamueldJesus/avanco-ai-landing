"use strict";
const menu = document.querySelector(".menu-button");
const navigation = document.getElementById("navigation");
menu.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(expanded));
  navigation.classList.toggle("open", expanded);
});
navigation.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    navigation.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.focus();
  }
});
const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});
function updateCalculator() {
  const hours = Number(document.getElementById("hours").value);
  const cost = Number(document.getElementById("cost").value);
  const reduction = Number(document.getElementById("reduction").value);
  const recovered = (hours * 4.33 * reduction) / 100;
  document.getElementById("hours-value").textContent = hours + " h";
  document.getElementById("cost-value").textContent = money.format(cost);
  document.getElementById("reduction-value").textContent = reduction + "%";
  document.getElementById("time-result").textContent =
    Math.round(recovered) + " h/mês";
  document.getElementById("money-result").textContent = money.format(
    recovered * cost,
  );
}
["hours", "cost", "reduction"].forEach((id) =>
  document.getElementById(id).addEventListener("input", updateCalculator),
);
updateCalculator();
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", () => phoneInput.setCustomValidity(""));
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const digits = phoneInput.value.replace(/\D/g, "");
  const validPhone = /^(?:55)?[1-9][0-9][0-9]{8,9}$/.test(digits);
  phoneInput.setCustomValidity(
    validPhone ? "" : "Informe um WhatsApp válido com DDD.",
  );
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    "Olá! Quero conversar sobre um diagnóstico comercial B2B.",
    "",
    "Nome: " + data.get("name"),
    "Empresa: " + data.get("company"),
    "WhatsApp: " + data.get("phone"),
    "Segmento: " + data.get("segment"),
    "Pessoas no comercial: " + data.get("team"),
    "CRM: " + (data.get("crm") || "Não informado"),
    "Gargalo: " + data.get("challenge"),
  ].join("\n");
  window.location.assign(
    "https://wa.me/5571996463942?text=" + encodeURIComponent(message),
  );
});
