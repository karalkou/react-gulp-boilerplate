import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
import {articles} from './fixtures.jsx'

render(<App articles={articles} />, document.getElementById('root'))