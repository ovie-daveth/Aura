import { PostInterface } from "@/variables/Post";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: any) => {
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const getAllPosts = async() => {
        setIsLoading(true);
        fn()
        .then((res: any) => {
            setPosts(res);
        })
        .catch((error: any) => {
            console.log(error);
            Alert.alert("Error", error.message)
        })
        .finally(() => {
              
         } )
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    const refetch = () => getAllPosts();

    return {posts, isLoading, refetch}

   
}


export  default useAppwrite