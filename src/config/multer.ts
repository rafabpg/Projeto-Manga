import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const storage = multer.diskStorage({
        destination:path.resolve(__dirname,'..','..','tmp','uploads'),
        filename: function(request,file,cb){
            //file = referencia do arquivo que esta sendo criado 
            //cb = callback = ira ser oque vai ser executado no processo
            const hash = crypto.randomBytes(6).toString('hex');
            const fileName = `${hash}-${file.originalname}`;
            cb(null,fileName);
            
        }
})

const upload = multer({
    storage:storage,
    limits:{fileSize:1024*1024},
    fileFilter:(request,file,cb)=>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" ){
            cb(null,true);
        }else{
            cb(null,false);
            return cb(new Error('Tipo de arquivo não suportado'));
        }
    },
})

export {upload};
