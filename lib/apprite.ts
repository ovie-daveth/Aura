import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export type createUserReuest = {
    email: string,
    username: string,
    password: string
}

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.rusti.aura',
    projectId: '66fb9c6a0002736bfcd1',
    databaseId: '66fb9ec9002dd435a064',
    userCollectionId: '66fb9efb00264d4a6f73',
    videoCollectionId: '66fb9f34001e9046c61d',
    storageId: '66fba0a4002e7e6590c8'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 
;

const avatars = new Avatars(client);
const account = new Account(client);
const databases = new Databases(client);

export const CreateAccount = async ({email, password, username} : createUserReuest) => {
    try {
        const newAccount = await account.create(ID.unique(), 
        email, 
        password,
        username
    )

    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);

    await SignIn(email, password);

    const newUser = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(), {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl
    })
        return newUser;
 
       } catch (error) {
        console.log(error)
       }
}

export async function SignIn(email: string, password: string){
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error: any) {
        throw new Error(error);
        
    }
}


export const getCurrentUser = async() => {
    try {
        const user = await account.get();

        if(!user) throw Error;

        const currentUser = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.userCollectionId, [Query.equal('accountId', user.$id)]);

        if(!currentUser) throw Error;

        return currentUser.documents[0];

    } catch (error) {
        console.log(error)
    }
}

export const getPosts = async() => {
    try {
        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId
        );
    
       if(!posts) throw Error;

       return posts.documents;
    } catch (error) {
        console.log(error)
    }
}