import { type } from "@testing-library/user-event/dist/type"

function StartScreen({numQuestions , dispatch}) {
    return (
        <div className="start">
            <h1>Welcom to this react Quiz!</h1>
            <h3>{numQuestions} question to test your react mesery</h3>
            <button className="btn btn-ui " onClick={() => dispatch({type : "start"})} >Let 's start</button>
        </div>
    )
}

export default StartScreen
