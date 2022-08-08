const index = (req, res) => {
    res.render("index", {
        active: true,
    });
}

export { index }