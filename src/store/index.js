import {createStore } from 'redux'
import reducer from '../reducers'

const initialState = { tech : "Redux1"}

export const store = createStore(reducer, initialState )

