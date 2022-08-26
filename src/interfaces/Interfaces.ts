export interface InitialCats {
    cats: CatsProps[]
    catId: CatsProps[] 
    catImg: [] 
}

export interface CatsProps {
    name: string,
    id: string,
    img: string,
    origin: string,
    lifeSpan: string,
    description: string,
    adaptability: number,
    affectionLevel: number,
    childFriendly: number,
    grooming: number,
    healthIssues: number,
    intelligence: number,
    socialNeeds: number,
    strangerFriendly: number,
    temperament: string
}

