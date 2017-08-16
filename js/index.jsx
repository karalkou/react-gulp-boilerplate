import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root.jsx'
import {articles} from './fixtures.jsx'

render(<Root articles={articles} />, document.getElementById('root'));