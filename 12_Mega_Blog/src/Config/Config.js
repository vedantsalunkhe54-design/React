const Config ={
    DBMS: String(import.meta.env.VITE_DBMS),
    TABLE: String(import.meta.env.VITE_TABLE),
    PROJECT_ID: String(import.meta.env.VITE_PROJECT_ID),
    PROJECT_ENDPOINT: String(import.meta.env.VITE_PROJECT_ENDPOINT),
    STORAGE_BUCKET: String(import.meta.env.VITE_STORAGE_BUCKET)

}

export default Config;