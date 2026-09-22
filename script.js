document.addEventListener("DOMContentLoaded", () => {
  const footerParagraph = document.querySelector(".footer p:last-child");
  if (footerParagraph) {
    footerParagraph.textContent = `Deliciously different food, made for every craving. © ${new Date().getFullYear()}`;
  }
});
