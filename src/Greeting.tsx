// Greeting.tsx — converted from Greeting.js
//
// Conversion steps:
// 1. Renamed the file from .js to .tsx (.tsx = TypeScript + JSX).
// 2. Removed `import React from 'react'`: with the modern JSX transform
//    ("jsx": "react-jsx" in tsconfig) it is no longer needed, and TypeScript
//    reports it as unused (error TS6133).
// 3. Imported the JSX *type* with `import type`, so the return type can be
//    written explicitly. `import type` is erased when compiling.
// 4. Described the component's props with a type (GreetingProps).
// 5. Applied that type to the destructured props, which fixes error TS7031
//    ("Binding element 'name' implicitly has an 'any' type").

import type { JSX } from 'react';

// Props this component accepts. `name` is required and must be text.
type GreetingProps = {
  name: string;
};

// `{ name }: GreetingProps` destructures the props AND tells TypeScript their type.
// `: JSX.Element` states that the component returns JSX.
const Greeting = ({ name }: GreetingProps): JSX.Element => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;