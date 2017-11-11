import { next, createSpinStates } from './spin-animation-state'

test('next', () => {
  function back() {}
  function forward() {}
  const motionState = { v: 1, setRef: () => {}, velocity: 2, setStateTo: { back, forward } }
  expect(next({ ...motionState, state: 'forward' })).toBe(back)
  expect(next({ ...motionState, state: 'back' })).toBe(forward)
})

test('createSpinStates', () => {
  const states = createSpinStates({})
  expect(typeof states.back).toBe('function')

  const value: any = () => {}
  value.get = () => 1
  value.previousState = 'back'
  value.setStateTo = {
    back: () => {},
    forward: () => {},
  }

  const backEvent: any = { value }
  expect(typeof states.forward).toBe('function')
  states.back(backEvent)
})