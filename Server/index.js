const express = require("express");
const router = express();

router.use(express.json());


router.listen("5001", () => {
    console.log("Server is running")
})