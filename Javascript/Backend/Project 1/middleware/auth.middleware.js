

//uncertainity hai toh try catch laga do
export const isLoggedIn = async (req, res, next) => {
    //get token
    
    //check token
    //get data from token

    try {
        console.log(req.cookies);

        let token = req.cookies?.token;

        console.log("Token found", token? "Yes": "No");

        if(!token){
            console.log("No Token");

            return res.status(401).jason({
                    success: false,
                    message: "Authentication Failed";
                })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); //It will return object
        console.log("decoded data", decoded);
        req.user = decoded;

        next()

    }catch(error){
        console.log("Auth failure", )
        return res.status(500).json({
            succes: false,
            messsage: "Authentication failure"
        })
    }
}

export