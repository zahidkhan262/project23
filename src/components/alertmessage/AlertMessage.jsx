import React, { useState } from 'react'
import alerts from './alert.module.css'
import css from 'classnames'
const AlertMessage = ({ children, type, message }) => {
    const [closeMsg, setCloseMsg] = useState(false);

    const renderAlert = () => React.cloneElement(children)
    return (
        <>
            <div className={css(alerts.alertMsg, alerts[type], !closeMsg && alerts.hide)} onClick={() => setCloseMsg(!closeMsg)}>
                {children ? renderAlert() : message}
            </div>
        </>
    )
}

export default AlertMessage