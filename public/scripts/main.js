"use strict";$(".customer-list").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><img src=\"../images/arrow-left.svg\" /></button>",nextArrow:"<button type='button' class='slick-next pull-right'><img src=\"../images/arrow-right.svg\" /></button>",responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0,arrows:!1}}]});var toggleMenu=document.querySelector(".toggle-menu"),headerMenu=document.querySelector(".header-menu");function handleMenu(e){console.log(e.target),headerMenu.classList.add("is-show")}toggleMenu.addEventListener("click",handleMenu),document.addEventListener("click",function(e){headerMenu.contains(e.target)||e.target.matches(".toggle-menu")||headerMenu.classList.remove("is-show")});