
// Agrupador
describe('pruebas en el archivo demo.test.js',()=>{

    test('deben ser iguales los string ', () => {
        // Inicializar
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
        const mensaje3 = `Hola Mundo1`;
    
        // 2. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 )
        // expect( mensaje ).toBe( mensaje3 )
    })

});


