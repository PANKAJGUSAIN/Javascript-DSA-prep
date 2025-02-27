import { useContext } from "react"
import { UserContext } from "../Context/userContext"

const Profile = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
         Welcome {user.username}
        </div>
    )
}

export default Profile