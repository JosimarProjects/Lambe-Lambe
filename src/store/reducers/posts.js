import { ADD_POST } from "../actions/actionTypes";

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: "fulano de tal",
            email: "a@a.com",
            image: require("../../../assets/imgs/fence.jpg"),
            comments: [
                { nickname: "beltrano de tal", comment: "Legal" },
                { nickname: "ciclano de tal", comment: "Legal tal" }
            ]
        },
        {
            id: Math.random(),
            nickname: "fulano de tal",
            email: "a@a.com",
            image: require("../../../assets/imgs/bw.jpg"),
            comments: [
                { nickname: "beltrano de tal", comment: "Legal" },
                { nickname: "ciclano de tal", comment: "Legal tal" }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
                
            }
        default:
            return state
        }
}



export default reducer