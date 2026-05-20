import Config from "../Config/Config"

import { Client, Account, ID } from "appwrite";

class Auth{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(Config.PROJECT_ENDPOINT)
        .setProject(Config.PROJECT_ID);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);

           if(userAccount){
            // call another method
            return this.Login({email, password});
           }
           else{
            return userAccount;
           }
        } catch (error) {
            throw error;
        }   
    }

    async Login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error;
        }
    
 }

 async getCurrentUser(){
    try {
          console.log("Calling Appwrite...");
        return await this.account.get();
    } catch (error) {
        console.log("Error while accessing getCurrent User");
        return null;
    }
 }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Error while accessing logout");
            throw False;
        }
}
}


const AuthService= new Auth();

export default AuthService;