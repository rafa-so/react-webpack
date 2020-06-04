'use strict'

import App from './app'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

render(
    <AppContainer>
        <App />
    </AppContainer>, 
    document.querySelector('[data-js="app"]')
)

if (module.hot) {
    module.hot.accept('./app', () => {
        const nextApp = request('./app').default

        render(
            <AppContainer>
                <nextApp />
            </AppContainer>, 
            document.querySelector('[data-js="app"]')
        )
    })
}