const mysql = require('mysql')
const express = require('express')
const fileUpload = require('express-fileupload');
const path = require('path');
var fs = require('fs');

const router = express.Router()

// Default options
router.use(fileUpload());

// EJEMPLO DE HTTP GET.
router.get("/src/:tipo/:id", (req, res) => {

    var tipo = req.params.tipo;
    var id = req.params.id;

    if (tipo === "sprite") {
        var pathImg = path.resolve(__dirname, `../src/${tipo}/${id}.png`);
    } else if (tipo === "gif") {
        var pathImg = path.resolve(__dirname, `../src/${tipo}/${id}.gif`);
    } else if (tipo === "gif_shiny") {
        var pathImg = path.resolve(__dirname, `../src/${tipo}/${id}.gif`);
    } else if (tipo === "png") {
        var pathImg = path.resolve(__dirname, `../src/${tipo}/${id}.png`);
    }

    if (fs.existsSync(pathImg)) {
        res.sendFile(pathImg)
    } else {
        return res.status(200).json({
            state: true,
            message: "No img"
        });
    }
})
module.exports = router