export type Project = {
    id: string
    visitlink: string
    isbestproject?: boolean | undefined
    isopensource: boolean
    sourcecodelink?: string | undefined
    title: string
    category: string
    cover: string
    description: string
    url: string
} 

export type Testimonial = {
    id:number
    description:string
    author:{
        name:string
        avatar:string
        role:string
    }
}


export type tTimeline = {
    id: number,
    role: string,
    organisation: string,
    from: string,
    to: string,
    description: string,
    type?:"experience" | "education"
}

export type tBlogView = {
    id: number,
    author: {
        name: string,
        avatar: string
    },
    timeReading: string,
    title: string
}

export type tService = {
    id: number,
    illustration: string,
    title: string,
    description: string
}



export type tTool = {
    id: number,
    icon: "php" | "laravel" | "symphony" | "phpstorm" | "mysql" | string,
    name: string,
    description: string
}

type tool ={
    id:number,
    name:string,
    description:string,
    icon:"php" | "laravel" | "symphony" | "phpstorm" | "mysql"
}
export type socialmedia ={
    url:string
}

export type homehero = {
    title: string, description: string, illustration:string,
    socials:{
        facebook?:socialmedia,
        twitter?:socialmedia,
        instagram?:socialmedia,
        linkedin?:socialmedia,
        github?:socialmedia
    }
}

export type feature ={
    id:number
    icon: string,
    title: string,
    description: string
}

export type bestworkSection ={
    title:string,
    description:string,
    projects:Project[]
}

export type aboutIntrosection = {
    title: string, description: string, image: string
}
export type toolsSection={
    title:string,
    description:string,
    tools:tool[]
}

export type home = {
    hero: homehero,
    features: feature[],
    bestworkSection:bestworkSection,
}

export type about_header = {
    title:string,
    description:string,
} 

export type aboutinfo = {
    headtext:string,
    title:string,
    description:string[],
    image:string
}

export type exp_and_ed ={
    title:string,
    description:string,
    experiences:tTimeline[],
    education:tTimeline[]
}

export type about = {
    hero:about_header,
    about:aboutinfo,
    experience_education:exp_and_ed,
}