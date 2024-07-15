const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req, res) => {
		const url = "mongodb+srv://mohandhumal07:SbUQ7pZf347ruzPT@cluster0.k56nujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
		const client = new MongoClient(url);
		const db = client.db("passwordapp2");
		const coll = db.collection("passwords");
		const record = {"_id":req.body.sno,"website":req.body.website,"email":req.body.email,"pass":req.body.pass};
		coll.insertOne(record)
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});

app.get("/gs",(req, res) => {
		const url = "mongodb+srv://mohandhumal07:SbUQ7pZf347ruzPT@cluster0.k56nujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
		const client = new MongoClient(url);
		const db = client.db("passwordapp2");
		const coll = db.collection("passwords");
		coll.find({}).toArray()
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});

app.delete("/ds", (req, res) => {
		const url = "mongodb+srv://mohandhumal07:SbUQ7pZf347ruzPT@cluster0.k56nujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
		const client = new MongoClient(url);
		const db = client.db("passwordapp2");
		const coll = db.collection("passwords");
		const record = {"_id":req.body.sno};
		coll.deleteOne(record)
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});

app.put("/us", (req, res) => {
		const url = "mongodb+srv://mohandhumal07:SbUQ7pZf347ruzPT@cluster0.k56nujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
		const client = new MongoClient(url);
		const db = client.db("passwordapp2");
		const coll = db.collection("passwords");
		const whom = {"_id": req.body.sno};
		const what = {"$set":{"website":req.body.website,"email":req.body.email,"pass":req.body.pass}}
		coll.updateOne(whom, what)
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});
		
app.listen(9002, () => {console.log("ready @ 9002");});
		