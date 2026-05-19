import Config from "../Config/Config"

import { Client, Databases, Query, Storage} from "appwrite";


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

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.Databases.listDocuments(
                config.DBMS,
                config.TABLE,
                queries
            );
        } catch (error) {
            throw error;
        }

    }

      // upload file

    async uploadFile({file}){
        try {
            return await.this.Storage.createFile(
                config.STORAGE_BUCKET,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
            return false;

        }
}
    // delete file

    async deleteFile(fileId){
        try {
            await this.Storage.deleteFile(
                config.STORAGE_BUCKET,
                fileId
            )
            return true;

        } catch (error) {
            throw error;
            return false;
        }

}

//get file preview

  getFilePreview(fileId){
    return this.Storage.getFilePreview(
        config.STORAGE_BUCKET,
        fileId
    )
}

}


const newConfiguration = new Configuration();

export default newConfiguration;
