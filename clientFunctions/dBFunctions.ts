import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";


class dbFunctions{
    constructor(){
    }
    itemSearch( search?:string,priceFilter?:string, sizeFilter?:string){
        return new Promise<any>(async (resolve, reject) => {
            // const q = query(
            //     collection(db, "items"),
            //     //@ts-ignore
            //     //orderBy('price', priceFilter), 
            //     //where('tags', 'array-contains', search ? search : null),
            //     //where('size', '==', sizeFilter ? sizeFilter : null)
            // )
            //Building the query step by step as a string and then executing it
            let priceFilterString = ''; 
            let sizeFilterString = '';
            (priceFilter)
                ? priceFilterString = ",orderBy('price', priceFilter)"
                : null;
            (sizeFilter)
                ? sizeFilterString = ",where('size', '==', sizeFilter)"
                : null;
            const qString = `query(collection(db, "items")`+`${priceFilterString}`+`${sizeFilterString})`
            console.log(qString)
            // const q = eval(qString)
            try{
                const rawPostData = await getDocs(eval(qString))
                const data = rawPostData.docs.map(doc => ({
                    itemID: doc.id,
                    imageURL: doc.data().imageURL,
                    title: doc.data().title,
                    description: doc.data().description,
                    price : doc.data().price
                  }))
                  setTimeout(()=>{
                      resolve(data)  
                  }, 500)
            } catch(err){
                reject(err)
            }
        })
    }
}

export default dbFunctions;