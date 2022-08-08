const formLogin = (req, res) => {
    res.render("auth/login", {
        active: true,
    });
};

const formRegister = (req, res) => {
    res.render("auth/register", {
        active: false,
    });
};

export { formLogin, formRegister };
