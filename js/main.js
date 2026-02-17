const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value.trim();
    const workflow = form.elements["workflow"].value.trim();
    const goal = form.elements["goal"].value.trim();

    const subject = encodeURIComponent("AI Readiness Score Request");
    const body = encodeURIComponent(
      `Hi Mopik Automation,\n\nI want to claim an AI Readiness Score.\n\nBusiness/Channel: ${name}\nCurrent promo workflow: ${workflow}\nWhat I want automated: ${goal}\n\nThanks!`
    );

    // IMPORTANT: Replace with your real email
    const email = "mm2887@njit.edu";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
