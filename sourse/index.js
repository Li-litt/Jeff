const clickMe = document.querySelector(".click-me");
const target = document.querySelector(".wrapper");

clickMe.addEventListener("click", () => {
  target.innerHTML = `<div class='container'>
                        <img class='jeff1' src="./sourse/imgs/Jeff.jpg" alt="Jeff">
                        <div class='text-wrapper'><p class='text1'>Thanks to you I can study.</p></div>
                        </div>
                        <button class="click-me" id='click-me-again'>Click me again :)</button>`;

  const clickMeAgain = document.querySelector("#click-me-again");
  clickMeAgain.addEventListener("click", () => {
    target.innerHTML = `<div class='container'>
                        <img class='jeff2' src="./sourse/imgs/Jeff2.jpg" alt="Jeff">
                        <div class='text-wrapper'><p class='text1'>This guy helps people and loves animals. God is always with you! Thank you Jeff!</p>
                        <button class="click-me" id='refresh'>Refresh</button></div>
                        </div>`;
                        
    const refresh = document.querySelector("#refresh");
    refresh.addEventListener("click", () => {
      location.reload();
    });
  });
});
