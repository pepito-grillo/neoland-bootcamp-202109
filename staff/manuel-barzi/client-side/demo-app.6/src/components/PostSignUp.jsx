import logger from '../logger'

function PostSignUp({ onSignIn }) {
    logger.debug('PostSignUp -> render')

    return <div className="post-signup container container--gapped container--vertical">
        User registered successfully, now you can proceed to <button className="button button--dark button--medium" onClick={() => onSignIn()}>Sign
            in</button>
    </div>
}

export default PostSignUp