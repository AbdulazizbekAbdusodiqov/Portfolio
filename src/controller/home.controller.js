import {join} from 'path'

export const homeCon = (req, res, next) => {
    try{
        const homePath = join(
            process.cwd(), 
            "src", 
            "views", 
            "pages", 
            "index.ejs"
        )
        res.render(homePath, {title: "Abdulaziz Dev Home"})
    }catch(err){
        next(err)
    }
}
export const aboutCon = (req, res, next) => {
    try{
        const homePath = join(
            process.cwd(), 
            "src", 
            "views", 
            "pages", 
            "about.ejs"
        )
        res.render(homePath, {title: "Abdulaziz Dev About"})
    }catch(err){
        next(err)
    }
}
export const contactCon = (req, res, next) => {
    try{
        const homePath = join(
            process.cwd(), 
            "src", 
            "views", 
            "pages", 
            "contact.ejs"
        )
        res.render(homePath, {title: "Abdulaziz Dev Contact"})
    }catch(err){
        next(err)
    }
}