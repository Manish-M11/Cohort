
const registerUser = async (req, res) => {

    //Algorithm steps
    //get data
    //validate
    //check if user already exist
    //create a user in database
    //generate a token
    //send token to database 
    // send token on email to user

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            status: false,
            message: "All fields are required"
        })
    }

    res.send("registered");
}

const getMe = async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');

        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
         })
        }
    }catch(err){

    }
}


const logoutUser = async (req, res) => {
    try {
        res.cookie("token", "", {
            expires: new Date(0);
        });

        res.status()
    } catch (error) {
        
    }
}

const forgotPassword = async (req, res) => {
    try {
        //get email
        //find user based on email
        //set reset token + reset expiry => Date.now() + 10*60*1000 => save.user
        //send email => design url
    } catch (error) {
        
    }
}

const resetPassword = async (req, res) => {
    try {
        //collect token from request
        //password from req.body
        //find user in db

        const {token} = req.params;

        const {password} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {$gt: Date.now()}
        });

        // set password in user
        // empty/reset kardoresetToken, resetExpiry 
        // save
    } catch (error) {
        
    }
}

const verifyUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}



export {registerUser}