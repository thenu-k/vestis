import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";


class dbFunctions{
    constructor(){
    }
    itemSearch( search:string,priceFilter:string, sizeFilter:string){
        return new Promise<any>(async (resolve, reject) => {
            const q = query(collection(db, "items"))
            try{
                const rawPostData = await getDocs(q)
                const data = rawPostData.docs.map(doc => ({
                    itemID: doc.id,
                    imageURL: doc.data().imageURL,
                    title: doc.data().title,
                    description: doc.data().description,
                    price : doc.data().price
                  }))
                  resolve(data)  
            } catch(err){
                reject(err)
            }
        })
    }
}

export default dbFunctions;