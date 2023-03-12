import {createGlobalStyle, css} from 'styled-components';
import bgpattern from '../assets/images/bg-pattern.svg';

const variables = ({theme}) => css`
  :root {
    --base-gutter: 15px;
    --base-spacing: 15px;
    --base-color: ${theme.baseColor};
    --base-font-size: ${theme.baseFontSize};
    --base-line-height: ${theme.baseLineHeight};
    --bg-main: ${theme.color.background.main};
    --color-primary: ${theme.color.primary};
    --color-primary-alt: ${theme.color.primaryAlt};
    --color-secondary: ${theme.color.secondary};
    --color-secondary-alt: ${theme.color.secondaryAlt};
    --color-warning: ${theme.color.warning};
    --color-warning-alt: ${theme.color.warningAlt};
    --color-white: ${theme.color.white};
    --color-selection: var(--color-primary-alt);
    --font-family: ${theme.baseFont};
    --font-family-alt: ${theme.fontSerifAlt};
  }
`;

const GlobalStyle = createGlobalStyle`
${variables}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

main {
  display: block
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible
}

pre {
  font-family: monospace, monospace;
  font-size: 1em
}

a {
  background-color: transparent
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted
}

b,
strong {
  font-weight: bolder
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em
}

small {
  font-size: 80%
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

img {
  border-style: none
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}

button,
input {
  overflow: visible
}

button,
select {
  text-transform: none
}

[type=button],
[type=reset],
[type=submit],
button {
  -webkit-appearance: button
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0
}

[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText
}

fieldset {
  padding: .35em .75em .625em
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal
}

progress {
  vertical-align: baseline
}

textarea {
  overflow: auto
}

[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

details {
  display: block
}

summary {
  display: list-item
}

template {
  display: none
}

[hidden] {
  display: none
}

html {
  box-sizing: border-box;
}

html, body {
  // height: 100%;
  width: 100%;
}


body {
  background-color: var(--bg-main);
  background-image: url(${bgpattern});
  background-position: center;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  font: normal normal normal var(--base-font-size)/var(--base-line-height) var(--font-family);
  color: var(--base-color);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  position: relative;
}

::selection { 
  color: #fff;
  background-color: var(--color-selection);
}

img {
  max-width: 100%;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

p {
  margin: calc(var(--base-gutter) - 5px) 0;
}

label[for] {
  cursor: pointer;
}

strong {
  font-weight: 700;
}

.page {
  min-height: 100vh;
}

a,
a:active, 
a:focus {
  color: inherit;
  text-decoration: none;
  outline: none;
}

pre {
  margin-top: 0;
}

code {
  color: #737373;
  background: 0;
  padding: 0;
  pre {
    font-family: 'Overpass Mono', Monaco,Consolas,monospace;
  }
}

.__json-key__{
color: #ccc;
}

code em, 
.__json-string__{
  color: #83c487;
  font-style: normal;
}

a {
  background: transparent;
}

@keyframes MoveUpInitial {
	to {
		transform: translate3d(0,-105%,0);
	}
}

@keyframes MoveUpEnd {
	from {
		transform: translate3d(0,100%,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
}

`;

export default GlobalStyle;
