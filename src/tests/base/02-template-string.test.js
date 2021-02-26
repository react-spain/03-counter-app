import { getSaludo } from '../../base/02-template-string';

// Agrupador
describe('pruebas en el archivo 02-template-string.test.js',()=>{

    test('getSaludo -> debe retornar hola fernando', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );
        
        expect( saludo ).toBe('Hola ' + nombre);

    })

    test('getSaludo -> debe retornar hola Carlos', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos');
    })

});