const hypixie = require("hypixie");

(async () => {
  const { displayname } = await hypixie("player", {
    uuid: "56da43a4-088d-4a76-82b6-dd431535015e",
    key: "05cc4989-e416-4378-853f-5c1fa6c79bd3"
  });

  document.body.innerHTML = "<h1>Today's date is " + displayname + "</h1>"
})();
