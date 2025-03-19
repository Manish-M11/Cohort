export const registerUser = async (req, res) => {
    const {email, password, name} = req.body;

    try {
         //hash the passawait 
    const hashedPassword = await bcrypt.hash(password, 10)
    const verificationToken = crypto.randomBytes(32).toString()

    prisma.user.create({
        data: {
            name, 
            email,
            phone,
            password: hashedPassword,
            verificationToken
        }
    })

    //send email - TODO
    } catch (error) {
        res.status(500).jason({
            success: false,
            message: ""
        })
    }

}


export const loginUSer = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message: "all fields are required"
        })
    }

    try {
        const user = await prisma.user.findUnique({
            where: {email}
        })

        if(!user){
            return res.status(400).json({
                success:false,
                message: "invalid email or password"
            })
        }

        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                success:false,
                message: "Invalid email or password"
            })
        }

        jwt.sign({id: user.id, role: user.role, },
            process.env.JWT_SECRET,
            {expiresIn: "24h"}
        )

        const cookieOptions = {
            httpOnly: true
        }

        res.cookie("token", token, cookieOptions)

        return res.status(201).json({
            success:false,
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            message: "User already  exist"
        });

    } catch (error) {
            return res.status(400).json({
            success:false,
            message: "Login failed"
        })
    }

}

