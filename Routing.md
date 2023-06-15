# Routing

- Routing means how we can navigate from ine page to another back or forward the URL
- protocol://IPaddress or DomainName/ pageName or ScreenName
- Ex: http://localhost/home/index
- Home -> Default controller
- Index ->default action method
- http://localhost/ by default it must navigate to home/index
- Routing methods :
  - Conventional Routing - Config file where we define list of routes.
  - Attribute base routing - routes are defined in controller level or action method level.
  
### Add react router
- **npm i -D react-router-dom@latest**
- D -> dependency
- import pagackage
- wrap with browser routers then with routes and then with individual route.
- Order of routes matter.
- react-router-dom - routing package
#### **Configuration**
- <BrowserRouter> - Type of router
- Routes </>- collection of objects
- Route path="contactus/:id" element={<contact/>} </>
  #### **Usage**
- import {Outlet, Link} from "react-router-dom";
- <Link to="/contactus/67">Contact</Link>
- Outlet  tag <>
- Via Button navigation: 
  - import {useNavigate} from "react-router-dom";
  - const navigate = useNavigate();
  - navigate("/");
- Fetch data from url :
  - import {useParams} from "react-router-dom";
  - let { id } = useParams();
- On clicking link, the outlet will be changing that is rendered.

---

# useEffect()
- It is a react hook
- This function runs after the components is rendered completely or on every subsequent re-render. (ie initialization)
- use Effect is combination of :
  - componentDidMount
  - componentDidUpdate
  - componentWillUnMount
- Multiple useEffect() can be used in single component
- Accept input as:(call back function , dependency value)
  - UseEffect(()=>{call back function}, dependency value)
  - UseEffect(()=>{call back function}, [value1,value2])
  - UseEffect(()=>{call back function})
  - UseEffect(()=>{call back function},)
  - Without dependency it may run infinitely.
- In development mode it uses strictmode so it may print twice. It will be once when deployed in QA.

# useRef()
- It is a react hook
- Reference variable :
  - const ref = useRef<type>(null);
- Can manipulate html dom elements
- Can refer any html tag or html control

---

# API 
- WebAPI
- REST API - Rest endpoints; simple http we can request the api and we can response from API.
- SOAP API - Complex; return is xmm as response

- React is client side application.
- Client app cannot directly interact with Server DB
- Hence Interface is required.
- Client app (react/frontend) -> Interface(web API/backend) -> backend DB

### Web API
- Web API is a collection of API end points
- Web API response is always in JSON format.
- Example : 
  - http://localhost/GetEmployee;     (get)
  - http://localhost/AddEmployee;     (post)
  - http://localhost/UpdateEmployee;  (put)
  - http://localhost/DeleteEmployee;  (delete)

#### Create the Backend API
- net core, java, express

#### Custom hook
- User defined hook, similar to builtin hook
- Code logic can be reused in different components
- Naming convention : useEmployee, useUserx

#### Update delete add
Optimistic Update
- Update the UI and Call the server
Pessimistic update
- Call the server and update the UI


# Deploying project :
- VM server deployment for react application
- API -> .net api server deployment dedicated to APIs
- SQL server (mysql,mongodb) server for backend

- CICD -> dev Ops / Jenkins 

Two ways of deployment :
- Manual development
- CICD pipeline
---
React app deployment
- using azure

# Forms :
div.mb-3>label.form-label+input.form-control
Shortcut markup
div.mb-3>label.form-label+input[type=number].form-control
- use useRef over useState

# Redux
- npm install --save redux react-redux
- 