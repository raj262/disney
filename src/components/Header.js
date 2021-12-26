import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" alt="logo" />
            <NavMenu>
               <a>
                   <img src="/images/home-icon.svg" alt="home icon" />
                   <span>Home</span>
               </a>
               <a>
                   <img src="/images/search-icon.svg" alt="home icon" />
                   <span>SEARCH</span>
               </a>
               <a>
                   <img src="/images/watchlist-icon.svg" alt="home icon" />
                   <span>WATCHLIST</span>
               </a>
               <a>
                   <img src="/images/original-icon.svg" alt="home icon" />
                   <span>ORIGINALS</span>
               </a>
               <a>
                   <img src="/images/movie-icon.svg" alt="home icon" />
                   <span>MOVIES</span>
               </a>
               <a>
                   <img src="/images/series-icon.svg" alt="home icon" />
                   <span>SERIES</span>
               </a>
            </NavMenu>
            <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I6np8fXRl8RzryJ2IMqNKFk-woKwVU995kYKh-KiQ=s32-c-mo" alt="user" />
        </Nav>
    )
}

export default Header

const Nav = styled.div`     
     height: 70px;
     background-image: linear-gradient(to bottom, #141b29, #0c111b 300px);
     display: flex;
     align-items: center;
     padding: 0 35px;
`
const Logo = styled.img`
    width:80px;

`

const NavMenu = styled.div`
   display: flex;
   /* -webkit-flex: 1; IE 10 */
   flex: 1;
   margin-left: 25px;
   align-items: center;

   a {
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: #fff;
                position: absolute;               
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
   }
`

const UserImg = styled.img`
     width: 48px;
     height: 48px;
     border-radius: 50%;
     cursor: pointer;
`