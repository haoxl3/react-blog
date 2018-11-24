import {
  createGlobalStyle
} from 'styled-components';

export const Iconfont = createGlobalStyle `
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1543064556583'); /* IE9*/
    src: url('./iconfont.eot?t=1543064556583#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAWQAAsAAAAACBgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8kkpEY21hcAAAAYAAAABrAAABstbroX9nbHlmAAAB7AAAAZQAAAG84ap6omhlYWQAAAOAAAAAMQAAADYTXR3WaGhlYQAAA7QAAAAgAAAAJAfdA4ZobXR4AAAD1AAAABMAAAAUFAD//2xvY2EAAAPoAAAADAAAAAwA4AE8bWF4cAAAA/QAAAAfAAAAIAETADxuYW1lAAAEFAAAAUUAAAJtPlT+fXBvc3QAAAVcAAAAMQAAAEKTclL6eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeybwIZG7438AQw9zI0AAUZgTJAQDlpwxTeJztkcENgCAQBOcEjSGWYAm+fduCffiyaEIXuHA+LMIlQ+42yz0OYASC2EQEuzGaLrnW/UDqfuRQn5gZGPKa95LKWSt861emnB+UDnqrWTbxa+n38Xaxbc/Rnsi7036kJKdlyulgD3unF9cAeJw1UE1vElEUvfe9GV5sKmD4GGiACM+ZsTEOBJiZYgSGpCYm6sKNMdgUYqIL2q5k425MN2zf1o2JW9esaKePhX+gq/oP/BHAdKAlN7k355ybnJMDBCD0aTSQhDIAshJm4shsptkddJtGdQPTWc21cM1kyKJv1eh04vvBUj1cbLZ3R5HLvjXuTabU831PXQaffp/fX28rAA3D0FeA/oAH8DDyBDSNSgI112mihibqJv3/Lt/LD+Uwt/gpyY5cHmEjoIW3udxADvO95b8rosjFr+8BKFH2kEoKwCABT6AKUOZmmXFspKhh8hijqtOoF5HbPMYrht3sYpNXmBbHTDrbqDttJPLr69XNqy+Y+Hx4osaIykZ4U+t8O8Byz3JHx96L6uBp8fGeXru+prDax27S4KnVXC2M/1ad2v6H+O4b/aNayGcKdb0EAFGfAHRMn8EjKALodcfVXLODtoVmfN1uqoSRP4tgB/FPa2TNXs64rkgh5ooyF6eCUnF6JggRvs4v2rPnJ607RUjynoiz7QPALXXmb1V4nGNgZGBgAGIebrZJ8fw2Xxm4WRhA4IZ8zhsY/f///wYWBuZGIJeDgQkkCgASMwsNAAAAeJxjYGRgYG7438AQw8Lw/z8DAwsDA1AEBbACAHXcBGx4nGNhYGBgAeP//1mgbAAT8QITAAAAAAAAOABeAKgA3nicY2BkYGBgZTBgYGEAASYg5gJCBob/YD4DAA3dAVAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAlZGJkZmRhZGVkY2BpbggM4+5IDWPyTGRrTg1sSg5g4EBAEzlBk8AAAA=') format('woff'),
    url('./iconfont.ttf?t=1543064556583') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1543064556583#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`