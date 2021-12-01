import { useState } from 'react'
import logger from '../logger'
import Unregister from './Unregister'
import { updateUserPassword, unregisterUser } from '../logic'

function Profile({ onBack, onSignOut, onFlowStart, onFlowEnd, onFeedback }) {
    logger.debug('Profile -> render')

    const [view, setView] = useState('update-password')

    const goToUnregister = () => setView('unregister')

    const goToUpdatePassword = () => setView('update-password')

    const updatePassword = (oldPassword, password) => {
        onFlowStart()

        try {
            updateUserPassword(sessionStorage.token, oldPassword, password, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                onFlowEnd()

                onFeedback('Password updated', 'success')
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    const unregister = password => {
        onFlowStart()

        try {
            unregisterUser(sessionStorage.token, password, error => {
                if (error) {
                    onFlowEnd()

                    onFeedback(error.message)

                    return
                }

                logger.info('User unregistered')

                onFlowEnd()

                onFeedback('User unregistered', 'success')

                onSignOut()
            })
        } catch ({ message }) {
            onFlowEnd()

            onFeedback(message, 'warn')
        }
    }

    return <>
        {view === 'update-password' && <div className="profile container container--vertical">
            <button className="button" onClick={onBack}>Go back</button>

            <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                updatePassword(oldPassword, password)
            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                <input className="field" type="password" name="password" id="password" placeholder="new password" />

                <div className="container">
                    <button className="button button--medium button--dark">Update</button>
                </div>
            </form>

            <button className="button button--medium" onClick={goToUnregister}>Unregister</button>
        </div>}

        {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={unregister} />}
    </>
}

export default Profile