React Tailwind Layout Documentation

Introduction:

React Tailwind Layout is a React component library built on top of Tailwind CSS, providing a collection of pre-designed layout components to streamline the development of responsive web applications. With React Tailwind Layout, you can quickly and easily create complex layout structures without having to write custom CSS.

Features:

Responsive Layouts: React Tailwind Layout offers a variety of responsive layout components, ensuring that your application looks great on all devices and screen sizes.

Grid System: The package includes a flexible grid system based on Tailwind CSS's utility classes, allowing you to create responsive grid layouts with ease. You can define the number of columns, gutter spacing, and breakpoints to suit your design needs.

Flexbox Support: React Tailwind Layout leverages Tailwind CSS's powerful Flexbox utilities to enable flexible and dynamic layout designs. You can use flex containers and items to create complex layouts that adapt to different content and viewport sizes.

Customization: The package provides customization options using Tailwind CSS's utility classes. You can easily customize layout styles such as colors, spacing, typography, and more to match your project's design requirements.


HOW TO USE 

install package
npm install react-tailwind-layouts

import basic layouts 
import {NavLayout,SideBarLayout, ThreeBarLayout} from 'react-tailwind-layouts'

pass diffrent views
NavLayout : 
<NavLayout layoutProps={{ mainView: <h1>mainView</h1>, mainView: <h1>mainView</h2>}}></NavLayout>

ThreeLayoutView:

 <ThreeBarLayout   layoutProps={{ mainView: <h1>MainView</h1>, rightView: <h1>rightview</h1>, LeftView: <h1>LeftView</h1>}} ></ThreeBarLayout>


 NOTE
 This package is WIP and is not production ready yet
