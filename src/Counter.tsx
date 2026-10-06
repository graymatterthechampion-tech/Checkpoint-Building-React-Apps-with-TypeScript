// Counter.tsx — converted from Counter.js
//
// Conversion steps:
// 1. Renamed the file from .js to .tsx.
// 2. Removed the unused default `React` import (TypeScript error TS6133) and
//    kept only `Component`; imported the JSX type with `import type`.
// 3. Created a type for the props (this component takes none) and a type for
//    the state ({ count: number }).
// 4. Passed both types to Component<Props, State>, so this.state and
//    this.setState are fully type-checked.
// 5. Typed the state property and the increment method (returns void).
// 6. Used the functional form of setState (prev => ...), which always builds
//    on the latest state, even if React batches several updates.
// 7. BUG FIX: in the original, `return` sat alone on its line with `(` on the
//    next line. JavaScript ends the statement right after `return`, so render()
//    returned undefined and nothing appeared on screen (TypeScript error
//    TS2416). The opening `(` now sits on the same line as `return`.

import { Component } from 'react';
import type { JSX } from 'react';

// No props: Record<string, never> means "an object with no properties".
type CounterProps = Record<string, never>;

// The shape of this component's state.
type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  // Initial state, checked against CounterState.
  state: CounterState = {
    count: 0,
  };

  // Arrow function so `this` always refers to the component instance
  // when the button calls it.
  increment = (): void => {
    this.setState((previousState) => ({ count: previousState.count + 1 }));
  };

  render(): JSX.Element {
    // The `(` must be on the same line as `return` (see step 7 above).
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;