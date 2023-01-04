let arrayMessages = [];

function startChat() {
  const funci = {
    chave: "c1322801",
  };

  const payloadMessageReplyAttendence = {
    message: "teste",
    originalMessage: "Olá matheus 1",
    originalUser: "João nascimento",
    timestamp: "13/01/2023",
    currentUser: "c1322801 Matheus",
  };

  const payloadMessageReplyAttendenceHimSelf = {
    message: "teste 2",
    originalMessage: "Olá matheus 2",
    originalUser: "c1322801 Matheus",
    timestamp: "13/01/2023",
    currentUser: "c1322810 Matheus",
  };

  arrayMessages.push(payloadMessageReplyAttendence);
  arrayMessages.push(payloadMessageReplyAttendenceHimSelf);

  const el = document.getElementById("main");

  arrayMessages.map((item) => {
    let nameBubbleOrigin = item.originalUser;

    if (funci.chave === item.originalUser.split(" ")[0]) {
      nameBubbleOrigin = "Você";
    } else {
      nameBubbleOrigin = item.originalUser;
    }

    const bubble = `<div style="display:flex;flex-direction:column;width:15rem">
            <span style="text-transform:uppercase;font-size:10px;align-self:flex-end;margin-bottom:4px">${item.currentUser}</span>
            <div style="background-color:#206bc4;display:flex;flex-direction:column;border-radius:6px;padding:6px 8px 0px;">
            <div  style="background-color:#13498a;display:flex;flex-direction:column;padding: 6px 12px;border-radius:4px;overflow:hidden;position:relative">
            <div style="height:100%;width:4px;background-color:white;position:absolute;top:0;left:-1px;"></div>
            <span style="color:white;font-size:10px;font-weight:500">${nameBubbleOrigin}</span>
            <span style="font-size:10px; color:#dedede;margin-top:2px">${item.originalMessage}</span>
            </div>
            <p style="margin-top:6px;font-size:12px; color:white;margin-left:8px;font-weight:400">${item.message}</p>
            </div>
        </div>`;
    el.insertAdjacentHTML("beforeend", bubble);
  });
}

startChat();
