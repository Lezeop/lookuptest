function fakeUpload() {
  const fileInput = document.getElementById("upload");

  if (!fileInput.files.length) {
    alert("Please upload a photo first!");
    return;
  }

  console.log("Upload clicked"); // 추적용

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }, 2000);
}

function joinWaitlist() {
  console.log("Waitlist clicked"); // 추적용
  window.location.href = "https://tally.so"; // 👉 나중에 네 폼 링크로 바꿔
}