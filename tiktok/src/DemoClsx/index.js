import React from 'react'
import Button from './Button'

function DemoClsx() {

    const container = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

    return (
        <div style={container}>
            <Button type="primary" value="Primary" />
            <Button type="secondary" value="Secondary" />
            <Button type="success" value="Success" />
            <Button type="danger" value="Danger" />
            <Button type="warning" value="Warning" />
            <Button type="info" value="Info" />
            <Button type="light" value="Light" />
            <Button type="dark" value="Dark" />
        </div>
    )
}

export default DemoClsx