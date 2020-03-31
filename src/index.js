import $ from "jquery";
import 'normalize.css/normalize.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './js/main';
import './js/plugins';
import './styles/css/main.css';
import './styles/scss/main.scss';

library.add(fab)
dom.i2svg()
