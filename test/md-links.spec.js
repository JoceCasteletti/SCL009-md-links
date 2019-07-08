const mdLinks = require('../index');
const path = require('path');
//https://stackoverflow.com/questions/24825860/code-coverage-for-jest
//file:///C:/Users/jocel/OneDrive/Laboratoria/Commoncore009/Frontend/SCL009-md-links/coverage/index.js.html
//para ver un archivo html y su cobertura
const linkArrayFile1 = [
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: path.resolve(__dirname, './pruebatest1.md')
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: path.resolve(__dirname, './pruebatest1.md')
  },
];

const linkArrayFileAll = [
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: path.resolve(__dirname, './pruebatest1.md')
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: path.resolve(__dirname, './pruebatest1.md')
  },
  {
    href: 'https://nic.cl',
    text: 'nic',
    file: path.resolve(__dirname, './pruebatest2.md')
  },
];

describe('mdLinks un solo archivo', () => {

  //https://jestjs.io/docs/en/expect#tobeinstanceofclass
  it('el resultado debe ser una arreglo', () => {
    return expect(mdLinks(path.resolve(__dirname, './pruebatest1.md'))).resolves.toBeInstanceOf(Array);
  });

  //https://jestjs.io/docs/en/expect#tohavelengthnumber
  it('resultado debe contener dos objetos', () => {
    return expect(mdLinks(path.resolve(__dirname, './pruebatest1.md'))).resolves.toHaveLength(2);
  });

  //https://jestjs.io/docs/en/expect#tohavepropertykeypath-value
  it('debe contener atributo file', () => {
    return expect(mdLinks(path.resolve(__dirname, './pruebatest1.md'))).resolves.toHaveProperty([0, 'file']);
  });

  it('debe contener atributo href', () => {
    return expect(mdLinks(path.resolve(__dirname, './pruebatest1.md'))).resolves.toHaveProperty([0, 'href']);
  });

  it('debe contener atributo text', () => {
    return expect(mdLinks(path.resolve(__dirname, './pruebatest1.md'))).resolves.toHaveProperty([0, 'text']);
  });
});

describe('mdLinks todos los archivo', () => {

 
  it('el resultado debe ser una arreglo', () => {
    return expect(mdLinks(path.resolve(__dirname, './'))).resolves.toBeInstanceOf(Array);
  });

  it('resultado debe contener dos objetos', () => {
    return expect(mdLinks(path.resolve(__dirname, './'))).resolves.toHaveLength(3);
  });
});

