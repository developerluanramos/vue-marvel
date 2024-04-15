import CharacterRespository from "@/repositories/CharacterRespository";
import AsteroidsRepository from "@/repositories/AsteroidsRepository";

const repositories = {
    characters: CharacterRespository,
    asteroids: AsteroidsRepository
}

export const BaseRepositoryFactory = {
    get: name => repositories[name]
}