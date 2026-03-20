document.addEventListener("DOMContentLoaded", function () {

  const uploadBtn = document.getElementById("uploadBtn");
  const fileInput = document.getElementById("upload");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  const submitEmail = document.getElementById("submitEmail");
  const emailInput = document.getElementById("emailInput");

  let collectedEmails = [];

  uploadBtn.addEventListener("click", function () {

    if (!fileInput.files.length) {
      alert("사진을 먼저 업로드해주세요 / Please upload a photo first");
      return;
    }

    loading.classList.remove("hidden");

    setTimeout(() => {
      loading.classList.add("hidden");
      result.classList.remove("hidden");
    }, 2000);
  });

  submitEmail.addEventListener("click", function () {

    const email = emailInput.value;

    if (!email) {
      alert("이메일을 입력해주세요 / Please enter your email");
      return;
    }

    collectedEmails.push(email);

    console.log("Collected emails:", collectedEmails);

    alert("Thanks! We'll notify you soon 🚀");
  });

});
