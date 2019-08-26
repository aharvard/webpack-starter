import { Header } from "./app/header";
import { Footer } from "./app/footer";
import "../src/style.css";
import "./styles/scss/main.scss";
import webpackgif from "./assets/images/webpack.gif";

let footer = new Footer();
let header = new Header();

let firstHeading = header.getFirstHeading();
let footerText = footer.getFooterText();

console.log(footerText);
console.log(firstHeading);
