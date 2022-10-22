const axios = require("axios");

async function getAll() {
  const points = await axios({
    url: "http://127.0.0.1:3000/pontos/all",
    method: "GET",
  });
  console.log(points.data);
}

async function criar() {
  try {
    const informacao = {
      "type":"Point",
      "long":"30",
      "lat":"4"
    }
    const inserir = await axios({
      url: "http://localhost:3000/pontos/create",
      data: informacao,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    console.log(inserir);
  } catch (e) {
    console.error(e);
  }
}
criar()
//getAll()