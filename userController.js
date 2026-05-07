export const submitUser = (req, res) => {

    const { username, email } = req.body;

    console.log("Received Data:");
    console.log(username);
    console.log(email);

    res.status(200).json({
        success: true,
        message: "Data received successfully",
        data: req.body
    });
};