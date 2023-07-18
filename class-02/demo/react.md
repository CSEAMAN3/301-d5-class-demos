# State and Props

- Props are short for properties
- Props are a way of passing data from a parent component to it's child component
- Props are read only, once passed to a component they should not be modified directlly within that component.
- Props can be any javascript value such as:
  - Strings
  - numbers
  - arrays
  - boolean
  - functions
- Components can be reused and in each instance they can recieve different props and or different values.

- State is mutable. Unlike props, state can be modified using the setState method provided by react.
- When state changes it triggers any part of the user interface that uses that state to be re-rendered.
- state should be initialised using the setState hook (or in the components constructor constructor - reference to class based components)
