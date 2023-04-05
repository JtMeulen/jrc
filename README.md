# Joe React Components Library

Joe React Components (JRC) is a collection of reusable React components that can be used to build user interfaces. It includes components such as buttons, forms, input fields, and more.

## Installation

To [install JRC](https://www.npmjs.com/package/joe-react-components) in your project, you can use npm:

```bash
npm install joe-react-components
```

## Usage

To use a component from JRC, simply import it into your React application:

```js
import { Button } from 'joe-react-components';

class MyComponent extends React.Component {
  render() {
    return (
      <Button onClick={this.handleClick}>Click me</Button>
    );
  }
}
```

## Development

To develop and contribute to JRC, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/JtMeulen/jrc.git
```

2. Install the dependencies:
```bash
npm install
```

3. Start the Storybook development server:
```bash
npm run start
```

4. Make changes to the components in the src directory.

5. Build the components using Rollup:
```bash
npm run build
```

6. Publish the library to npm:
```bash
npm publish
```

## Demo
To see a live demo of the components in action including the documentation on how to use the components, check out [this Storybook instance](https://joe-react-components.netlify.app/) on Netlify.
