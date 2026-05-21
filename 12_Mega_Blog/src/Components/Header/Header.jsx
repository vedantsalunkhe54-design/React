import React from "react";
import { Container, LogoutBtn, Logo } from "../Index";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

const navItems = [
  {name: "Home",
    slug:'/',
    active: true
  }, {
    name: "Login",
    slug: '/login',
    active: false
  }, {
    name : "Sign Up",
    slug: '/signup',
    active: !authStatus
  },{
    name: "All posts",
    slug: '/all-posts',
    active: !authStatus
  },  {
    name: "Add Post",
    slug: '/Add-post',
    active: !authStatus
  }
]

  return (
    <div className="header">
      <Header className="py-4 shadow-sm bg-gray-100">
      <Container>
        <nav className= "flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="120px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item ) => 
            item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)} 
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
            
            )}
            {authStatus && <LogoutBtn />} 
          </ul>
        </nav>
      </Container>
      </Header>
    </div>
  );
};

export default Header;