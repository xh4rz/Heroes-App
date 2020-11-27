import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>UNIVERSO MARVEL</h1>
            <hr />
            <HeroList publisher="Marvel Comics" />
        </div>
    )
}
