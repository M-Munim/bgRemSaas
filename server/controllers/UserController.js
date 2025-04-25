import { Webhook } from "svix"
import userModel from "../models/userModel.js"

// Api controller function to manage clerk users with CRUD operations
// https://localhost:8000/api/user/webhooks

const clerkWebhooks = async (req, res) => {
    try {
        // Create a Svix instance with clerk secret key

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData);
                res.json({
                    message: "User created successfully",
                    success: true,
                    status: 200
                })

                break;
            }
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.json({
                    message: "User updated successfully",
                    success: true,
                    status: 200
                })
                break;
            }
            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({
                    message: "User deleted successfully",
                    success: true,
                    status: 200
                })
                break;
            }
            default:
                break;
        }


    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message,
            success: false,
            status: 400,
        })
    }
}

export { clerkWebhooks }