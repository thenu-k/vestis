import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";


class dbFunctions{
    constructor(){
    }
    itemSearch( search?:string,priceFilter?:string, sizeFilter?:string){
        return new Promise<any>(async (resolve, reject) => {
            let q;
            if(priceFilter){
                q = query(
                    collection(db, "items"),
                    //@ts-ignore
                    orderBy('price', priceFilter)
                )
            }
            if(sizeFilter){
                q = query(
                    collection(db, "items"),
                    //@ts-ignore
                    where('size', '==', sizeFilter)
                )
            }
            if(priceFilter && sizeFilter){
                q = query(
                    collection(db, "items"),
                    //@ts-ignore,
                    orderBy('price', priceFilter),
                    where('size', '==', sizeFilter)
                )
            }
            if(!priceFilter && !sizeFilter){
                q = query(
                    collection(db, "items"),
                )
            }
            try{
                //@ts-ignore,
                const rawPostData = await getDocs(q)
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