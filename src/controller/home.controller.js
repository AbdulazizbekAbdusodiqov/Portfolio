import path from 'path'

export const homeCon = (req, res, next) => {
    try{
        const homePath = path.join(
            process.cwd(), 
            "src", 
            "views", 
            "index.html"
        )
        res.status(200).sendFile(homePath)
    }catch(err){
        next(err)
    }
}
export const aboutCon = (req, res, next) => {
    try{
        const homePath = path.join(
            process.cwd(), 
            "src", 
            "views", 
            "about.html"
        )
        res.status(200).sendFile(homePath)
    }catch(err){
        next(err)
    }
}
export const contactCon = (req, res, next) => {
    try{
        const homePath = path.join(
            process.cwd(), 
            "src", 
            "views", 
            "contact.html"
        )
        res.status(200).sendFile(homePath)
    }catch(err){
        next(err)
    }
}