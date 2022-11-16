const fs =  require ('fs');
const colour =  require ('colour');

const crearArchivo= async(base,l, h =10)=>{
    
    
    const  fileName=`.\\salida\\tabla-${base}.txt`;
    try {
    
    let line= '';

    for (let index = 1; index <= h; index++) {
    
         line+=`${base} x ${index} = ${base*index}\n`;
    
    } 
        if(l)
        {
            console.log('===============================');
            console.log( `Tabla del ${base}`.red);
            console.log('===============================');
            console.log(line);
        }

        fs.writeFileSync(fileName,line);    

    } catch (error) {
        throw error;
    }
    
return fileName;

};

module.exports= {
    crearArchivo
}