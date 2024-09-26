# MultiSelect Component - Shadcn Demo

This is a multi-select component built with React and **shadcn/ui**. This is my first open-source project, and my goal is to continuously improve the components, making them as reusable as possible for a wide range of use cases, accessible to everyone.

## Installation

To get started, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sergiiopm/multi-select-shadcn.git
   cd multi-select-shadcn
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

This will start a local server, and you can view the project at `http://localhost:3000`.

## Usage

Once you have the project set up, you can import and use the `MultiSelect` or `MultiSelectDialog` component in your application:

```jsx
import MultiSelect from "./components/MultiSelect";

const users = [
  { name: "John Doe", email: "john@doe.com" },
  { name: "Jane Doe", email: "jane@doe.com" },
  // Add more users
];

function App() {
  return (
    <div>
      <h1>Invite Friends</h1>

      <MultiSelectDialog items={users}>Invite friends</MultiSelectDialog>

      <MultiSelect items={users} />
    </div>
  );
}

export default App;
```

## Contributing

I welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. **Fork** the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a **pull request**.

Feel free to open an issue if you encounter any bugs or have any suggestions for new features.
