const app = require("express")();
const cors = require("cors");
const compression = require("compression");
const server = require("http").Server(app);
const stockData = require("../data/data.js");
const io = require("socket.io")(server);

app.use(cors());
app.use(compression());

io.of("/stocks")
.on("connection", socket => {
	
	console.log("A client just connected");

	let count = 0;
	const length = stockData.length;

	// Emit information to the frontend
	const dumper = setInterval(() => {
		socket.emit("data", stockData[count]);
		console.log(stockData[count]);
		count++;

		if (count >= length) {
			clearInterval(dumper);
		}
	}, 2000);

	// On client disconnec
	socket.on("disconnect", () => {
		clearInterval(dumper);
	});
});

app.get("/stocks", (req, res) => {
	res.json(stockData[0]);

	io.emit("data", stockData[1]);
});

const PORT = process.env.PORT || 4040;
server.listen(PORT, () => {
	console.log(`Service is running at ${PORT}`);
});