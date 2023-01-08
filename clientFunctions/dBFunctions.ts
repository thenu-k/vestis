import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";


class dbFunctions{
    constructor(){
    }
    itemSearch( search:string,priceFilter:string, sizeFilter:string){
        return new Promise<any>(async (resolve, reject) => {
            let q;
            if(priceFilter){
                //@ts-ignore
                q = query(collection(db, "items"), orderBy('price', priceFilter))
            }
            else{
                q = query(collection(db, "items"))
            }
            try{
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