import { addDoc, collection } from 'firebase/firestore'
import {db} from '../firebase/config'

//Primero obtenemos los productos que queremos guardar
const algoritmoGuardadoAutomatico = async() =>{
    try {
        const productosAGuardar=[];
        productosAGuardar.forEach(async(producto) => {
            const docRef = await addDoc(collection(db,'products'), {
                title: producto.title,
                price: producto.price,
                description: producto.description,
                category: producto.category,
                image: producto.image,
                stock : 20,
            });
            console.log('document written with ID: ' , docRef.id);
        })
    } catch (error) {
        console.log(error);
    }
}
export default algoritmoGuardadoAutomatico;









