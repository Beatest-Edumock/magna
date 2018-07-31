import ADD_USER from "../../actions/user"
import LoginUser from "../../../_Api/User"

function add_user_action_create_api(user) {


    return (dispatch) => {

        dispatch({type: ADD_USER, user: user});

        LoginUser("swapnildey94@gmail.com", "test123").then(({data}) => {
            console.log("IN HERE");
            console.log(data);
            dispatch({type: ADD_USER, user: null});
        })

    };


}


export default add_user_action_create_api;