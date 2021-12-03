<?php  
         
namespace App\Application\GamePokemon\RankingBundle;
                
use Symfony\Component\HttpKernel\Bundle\Bundle;
                
class ApplicationGamePokemonRankingBundle extends Bundle
{
    /**
    * {@inheritdoc}
    */
    public function getParent()
    {
        return 'ApplicationGamePokemonRankingBundle';
    }
}