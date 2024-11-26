import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes";

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
            };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        return {
                            ...post,
                            comments: post.comments 
                                ? post.comments.concat(action.payload.comment) 
                                : [action.payload.comment]
                        };
                    }
                    return post;
                })
            };
        default:
            return state;
    }
};



export default reducer