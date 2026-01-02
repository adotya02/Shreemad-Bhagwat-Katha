import fs from "fs";

app.post("/save-chat", (req, res) => {
  const chats = JSON.parse(fs.readFileSync("data/chats.json"));
  chats.push({
    message: req.body.message,
    reply: req.body.reply,
    time: new Date().toLocaleString()
  });
  fs.writeFileSync("data/chats.json", JSON.stringify(chats, null, 2));
  res.sendStatus(200);
});

app.get("/admin/chats", (req, res) => {
  const chats = JSON.parse(fs.readFileSync("data/chats.json"));
  res.json(chats.reverse());
});

app.post("/save-lead", (req, res) => {
  const leads = JSON.parse(fs.readFileSync("data/leads.json"));
  leads.push({
    name: req.body.name,
    mobile: req.body.mobile,
    city: req.body.city,
    time: new Date().toLocaleString()
  });
  fs.writeFileSync("data/leads.json", JSON.stringify(leads, null, 2));
  res.sendStatus(200);
});

app.get("/admin/leads", (req, res) => {
  const leads = JSON.parse(fs.readFileSync("data/leads.json"));
  res.json(leads.reverse());
});
