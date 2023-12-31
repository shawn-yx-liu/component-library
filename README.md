# React Component Library
The [Component Library](https://component-library-shawnliu.netlify.app/) is a collection of reusable React components for your website, created to practice advanced React topics such as custom hooks, compound components, and context. You can fork this repo and use these components in any of your own React projects. The "pages" folder contains component demos, including different variations of each component and examples of how they can be used. 

### Built With
[![React][React.js]][React-url]\
[![Javascript][Javascript.js]][Javascript-url]\
[![Html][Html.js]][Html-url]\
[![CSS][CSS.js]][CSS-url]\
[![Vite][Vite.js]][Vite-url]

## Getting Started
### Build and Run the demo application:

```
$ npm install
$ npm start
````

# Usage
- [Badge](#badge)
- [Banner](#banner)
- [Card](#card)
- [Testimonial](#testimonial)
- [Toast](#toast)
- [Tooltip](#tooltip)

## Badge
| Property |  Type  |  Values                                              |
| -------- | ------ | ---------------------------------------------------- |
| Shape    | String | square, pill                                         |
| Color    | String | gray, red, yellow, green, blue, indigo, violet, pink |

![image](https://github.com/shawn8913/component-library/assets/119635447/cd9f6181-2822-4600-8e95-0d6ed7c3e0e1)

## Banner
| Property        |  Type  |  Values |
| --------------- |  ----- | ------- |
| Variant         | String | success, error, warning, neutral |
| Title           | String | User Input |
| Text (optional) | String | User Input |

<p float="left">
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/916f069d-2b09-4b26-a9a1-601941b9a880" alt="multi line render" width="49%"/>
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/dc552c41-cdd8-4ada-8dbd-68bda2ca3a42" alt="multi line render" width="49%"/>
</p>

## Card
| Property        |   Type    |  Values    | 
| --------------- | --------- | ---------- |
| Icon            | Image     | User Input |
| Color           | Color Hex | User Input |
| Title           | String    | User Input |
| Text (optional) | String    | User Input |

<img src="https://github.com/shawn8913/component-library/assets/119635447/cf429c90-df6f-46e1-8f64-da0ce06d3ef9" alt="card render" width="50%"/>

## Testimonial
| Property         |  Type  |  Values    | 
| ---------------  | ------ | ---------- |
| Image (optional) | Image  | User Input |
| Logo (optional)  | Image  | User Input |
| Name             | String | User Input |
| Occupation       | String | User Input |
| Text             | String | User Input |

Mobile device versions also supported
<p float="left">
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/622aeb38-08a1-46cd-871c-89ae5a26915d" alt="multi line render" width="49%"/>
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/a1ec1bcf-a8b7-4af2-ac88-e43da1f1d7e5" alt="multi line render" width="49%"/>
</p>
<p float="left">
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/aa0c7aab-0e35-43c1-9fc4-dedac3c83c05" alt="multi line render" width="20%"/>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/6fb58115-86eb-44ad-bc6e-1c01618ca9d3" alt="multi line render" width="20%"/>
</p>

## Toast
| Property         |   Type  |  Values                              | 
| ---------------  | ------- | ----------                           |
| Visible          | Boolean | true, false                          |
| Variant          | String  | success, warning, information error  |
| Text (optional)  | String  | User Input                           |

By default, the toast message disappears after 5 seconds.
<p float="left">
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/541b2d5e-9906-46e9-a81b-afe752308510" alt="multi line render" width="24%"/>
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/e340f7d8-a50c-43de-ba26-107a19223d8d" alt="multi line render" width="24%"/>
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/0dbac00c-d2b9-4510-a696-d131d637bf46" alt="multi line render" width="24%"/>
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/6f375711-6cab-4b53-beae-7575fc50bf71" alt="multi line render" width="24%"/>
</p>

## Tooltip
| Property         |   Type     |  Values              | 
| ---------------  | ---------- | -------------------- |
| Icon             | Image  | User Input               |
| Variant          | String | bold, light              |
| Color            | String | black, blue, pink, green |
| Title            | String | User Input               |
| Text (optional)  | String | User Input               |

Pressing the close button will hide the tooltip.
<p float="left">
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/74e16462-292d-4af3-8d26-994e1e15a791" alt="multi line render" width="49%" height="700px"/>
  <img align="top" src="https://github.com/shawn8913/component-library/assets/119635447/d86b8a16-4118-4a18-beef-e39daa3b52e5" alt="multi line render" width="49%" height="700px"/>
</p>


# Authors
* [Shawn Liu](https://github.com/shawn8913)

# Acknowledgements:
* [Scrimba Frontend Career Path](https://scrimba.com/learn/frontend)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Javascript.js]: https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Html.js]: https://img.shields.io/badge/html-20232A?style=for-the-badge&logo=html5
[Html-url]: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
[CSS.js]: https://img.shields.io/badge/css-20232A?style=for-the-badge&logo=css3
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Vite.js]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev/
