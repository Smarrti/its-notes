import './materialize.min';
import './init';
import '../css/materialize.min.css';
import * as pages from "./pages";

const app = document.querySelector('.root');
app.append(pages.auth());