# better-auth-components

**better-auth-components** is a React component library designed to seamlessly integrate with the [better-auth](https://www.better-auth.com) authentication framework. It provides a modern, visually appealing, and customizable set of components to simplify the implementation of authentication flows.

## NOTICE

In the current state of the project, the library is still in the early stages of development. While it is functional, there may be some bugs and issues. We encourage you to use it in your projects, but please be aware that it may not be suitable for production use yet.

## Features

- **Clean, Minimal Design:** Light mode only with subtle highlights and borders for detail.
- **Customizable Footer:** Default footer reads "Made with ❤️ by better-auth-components" but can be removed or replaced.
- **Plug-and-Play Components:** Easy to use with `better-auth`.
- **Built with TypeScript:** Strong typing ensures reliability and a better developer experience.

## Installation

Install the package via npm or yarn:

```bash
npm install better-auth-components
# or
yarn add better-auth-components
```

Ensure you also have `better-auth` installed (not required, but recommended):

```bash
npm install better-auth
# or
yarn add better-auth
```

## Usage

---

**NOTE**

A proper documentation will follow as more components are added and the project goes out of the alpha-stage.

---

Here’s an example of how to use the components in your React application:

### Login Form Example

```tsx
import { SignInForm } from "better-auth-components";

const App = () => {
  const handleSignin = async (email: string, password: string) => {
    // Call your better-auth API
    console.log("Logging in:", email, password);
  };

  return (
    <div>
      <SignInForm onSignin={handleSignin} footer="Custom footer text here" />
    </div>
  );
};

export default App;
```

## Styling

The library uses plain CSS. As of now, each component has its own scoped styles to avoid conflicts. This is subject to change in the future. You can override these styles by targeting their class names in your application.

### Example Customization:

```css
/* Override styles for SignInForm */
.better-auth-signin-form {
  border: 1px solid #ddd;
  border-radius: 8px;
}
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed explanation of your changes.

### Setup for development

1. `git clone` the project
2. `npm install` to install the dependencies
3. `npm run storybook` to start the storybook server
4. `npm run rollup` to build the library
5. `npm link` to link the library to your project

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Made with ❤️ by [better-auth-components](https://github.com/TheReal-Flo/better-auth-components).
