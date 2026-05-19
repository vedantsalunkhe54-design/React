import Config from "../Config/Config"

import { Client, Databases, Storage} from "appwrite";


class Configuration{
    client = new Client();
    Databases;
    Storage;

    constructor(){
        this.client
        .setEndpoint(Config.PROJECT_ENDPOINT)
        .setProject(Config.PROJECT_ID);

        this.Databases = new Databases(this.client);
        this.Storage = new Storage(this.client);
    }

    async createPost ({title, content, image, slug, status, userId}){
        try {
            return await this.Databases.createDocument(
                config.DBMS,
                 config.TABLE,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
                );

        } catch (error) {
            throw error;
        }
    }

    async updatePost ({title, content, image, slug, status}){
        try {
            return await this.Databases.updateDocument(
                config.DBMS,
                config.TABLE,
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }
                );
            
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
             await this.Databases.deleteDocument(
                config.DBMS,
                config.TABLE,
                slug
                )
                return true;
            
        } catch (error) {
            throw error;
              return false;
        }
      
    }

    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                config.DBMS,
                config.TABLE,
                slug
                );
            
        } catch (error) {
            throw error;
        }
    }
}

const newConfiguration = new Configuration();

export default newConfiguration;
