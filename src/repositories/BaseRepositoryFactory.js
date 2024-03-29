import CharacterRespository from "@/repositories/CharacterRespository";

const repositories = {
    characters: CharacterRespository
}

export const BaseRepositoryFactory = {
    get: name => repositories[name]
}