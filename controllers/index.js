import gateway from "../config/gateway.js";

export const index = async (req, res) => {
    try {
        const response = await gateway.clientToken.generate();
        var feedback = {status: "SUCCESS", data: gateway.config}
      } catch (exception) {
        console.log(exception)
        var feedback = {status: "FAILURE", data: exception}
      }
    res.render("index", {feedback});
};

