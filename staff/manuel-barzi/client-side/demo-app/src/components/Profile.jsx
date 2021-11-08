import { useState } from 'react'
import logger from '../logger'
import Unregister from './Unregister'

function Profile({ onPasswordUpdate, onBack, onUnregister }) {
    logger.debug('Profile -> render')

    const [view, setView] = useState('update-password')

    const goToUnregister = () => setView('unregister')

    const goToUpdatePassword = () => setView('update-password')

    return <>
        {view === 'update-password' && <div className="profile container container--vertical">
            <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                // const oldPassword = event.target.oldPassword.value
                // const password = event.target.password.value
                const { target: { oldPassword: { value: oldPassword }, password: { value: password } } } = event

                onPasswordUpdate(oldPassword, password)
            }}>
                <input className="field" type="password" name="oldPassword" id="oldPassword" placeholder="old password" />
                <input className="field" type="password" name="password" id="password" placeholder="new password" />

                <div className="container">
                    <button className="button button--medium" onClick={event => {
                        event.preventDefault()

                        onBack()
                    }}>Go back</button>
                    <button className="button button--medium button--dark">Update</button>
                </div>
            </form>

            <button className="button button--medium button--dark" onClick={goToUnregister}>Unregister</button>
        </div>}

        {view === 'unregister' && <Unregister onBack={goToUpdatePassword} onUnregister={onUnregister} />}
    </>
}

export default Profile