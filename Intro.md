## React

- JavaScript Library.
- React creates component which internally creates and updates DOM .
- React is collection of component.
- It is a type of SPA.

### Components
- Component helps us write reuasble, modular and better organized code.
- Example : Header, navigation, content, footer.
- Component :
  - publisher (exports component)
  - consumer (imports component)
- Default component of React is **App**.
- extention : tsx, jsx

### Creating react app
- Two ways to create :
  - Vite  
  - Create React App (CRP)

- Configuration : 
  - node -v
  - npm -v
  - Vite Approach
    - npm create vite@4.1.0           (via vite) 
    - cd projectname
    - npm install 
  - CRA Approach
    - npx create-react-app appName    (via CRP)
    - cd projectname
    - npm start
  - code .
  
- Run application
  - npm run dev
  
### File Structure
- index.html -> main.tsx -> app

### Component
- Class Component       (rarely used; state managent; limited)
- Functional Component  (widely used; easy to write; module concept)

- export and import keywords
- export - to make a function publically available to other components
- import - to access functions from other components

### Virtual DOM
- Whenever there is a change, only that is changed in the component is rendered.
- updating the changes only
- Whenever new packages are added in node_modules, package.json updates.
- React has to install different packages for UI, routing, Http, Form validation etc from npm (hence library) whereas in Angular all packages will be available (Hence framework)
- Javascript library - react - virtual DOM
- Javascript Framework - angular - DOM
- React package - UI related 
- React dom package - dom elements related (virtual dom aswell)

### Binding
- Interpolation - {variable}

### Note
- Instead of div tag use Fragment tag in return
- Use Empty tags <> </> instead of fragment
- ts - plain TypeScript
- tsx - TypeScript as xml

# 26 - 05 -2023

### Map()
- use .map() to iterate array (dynamic contents)
- example
  - const menuItems = ["Home", "About us", "Our work", "Gallery", "Contact us"];
  - {menuItems.map((menu) => (
          <li className="list-group-item" key={menu}>{menu}</li>
        ))}
  - key={menu} is used to overcome, Warning: Each child in a list should have a unique "key" prop. 
  - Map holds key-value pairs.

### Conditional (if else)
- example :
  - {menuItems.length === 0 && <p>No Menu Items</p>}
        {menuItems.map((menu) => (
          <li className="list-group-item">{menu}</li>
        ))}
  - if  menuItems.length === 0 then <p>No Menu Items</p>
  - else  {menuItems.map((menu) => (
          <li className="list-group-item">{menu}</li>
        ))}

### Anonymous function (Arrow function)
- const handleClick = (event: MouseEvent) => console.log(event);
- <li className="list-group-item" key={index} onClick={handleClick}>

## StateManagement
- capture state data
- capture any data ; any type like string, int, boolean, object etc
- Two ways to capture stateManagement
  - Server side stateManagement
  - Client side stateManagement
- Use of stateManagement :
  - Capture the current state
  - SessionStorage and LocalStorage
  - LocalStorage.setItem(key,value)
  - LocalStorage.getItem(key)
- React functional component provides react hooks for stateManagement 
  - useState(initial value of the state)
    - ex : const ['color', 'setColor'] = useState("red");
  - this returns array with 2 elements :
    - arr[0] - current state
    - arr[1] - function which change the state
    - ex :  
      - arr[0] = color; get or read value;
      - arr[1] = setColor('color'); 
- React Class Component use stateManagement setState to get state limited

- StateManagement in other techno
  - ViewBag ViewData in MVC
  - TempData in MVC
  - Asp.net Session(key, value)

- In JS we use http/https protocols are used; it is stateless
- with the help of programming language we have to maintain state 
  - local function level
  - Global function
  - 
---
## Props
- Props -> Property elements props or property
- React Function -> Function parameter/Inputs/Arguments
- <h1 backgraongColor="red"></h1>
    |         |         |
element   property    value

- Example : 
  - interface Props {text: string;}
  - function Message(prop: Props) { return <p>{prop.text}</p>;}
  - OR
  - function Message({ text }: Props) { return <p>{text}</p>;}
  - <Message text="This my new property" />
- Client interact with interface and interface interacts with Publisher. (Repository Pattern)
- Client X Publisher (return some result)
- **Repository Pattern** : App->Props->defined by Message
- (client - App.tsx; interface - Props; Service - Message.tsx)

### Why props interface ?
- Type Safe
- Client interact with interface not directly with service
- (client - App.tsx; interface - Props; Service - Message)
- Abstraction : Hide the implementation part and just show what is required.

### Special Props
- Similar to normal props but usually for long text this is used. (children?: ReactNode;)
- Example:
  - interface AlertProps {children?: ReactNode;}
  - const Alert = (children : AlertProps) => { return <div className="alert alert-primary" role="alert">{children}</div>};
  - <Alert><b>This is optional special prop</b> Normally for long text</Alert>
---
### Extensions used
- Prettier - Code formatter
- ES7 React/Redux/GraphQL/React-Native snippets v1.9.3 rodrigovallades
  - rafc

---
### Installations

- Bootstrap
- 
- API
  - npm i axios@1.3.4