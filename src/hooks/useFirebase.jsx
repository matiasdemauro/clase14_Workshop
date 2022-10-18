import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useFirebase = (categoryId) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                //1) se genera la query
                const q = categoryId ?
                    query(
                        collection(db, "products"),
                        where("category", '==', categoryId)
                    )
                    :
                    query(collection(db, "products"));
                //2) realizar el llamado a firebase
                //3) obtener el 'snapshot' con los datos crudos.
                const querySnapshot = await getDocs(q);
                const productsFireBase = [];
                querySnapshot.forEach((doc) => {
                    productsFireBase.push({ id: doc.id, ...doc.data() })
                });
                setProductos(productsFireBase);

            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        })();
    }, [categoryId])
    return [loading, productos, error];
};
export default useFirebase