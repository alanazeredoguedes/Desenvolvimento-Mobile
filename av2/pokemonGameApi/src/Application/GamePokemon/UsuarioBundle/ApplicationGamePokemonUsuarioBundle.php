<?php  
         
namespace App\Application\GamePokemon\UsuarioBundle;
                
use Symfony\Component\HttpKernel\Bundle\Bundle;
                
class ApplicationGamePokemonUsuarioBundle extends Bundle
{
    /**
    * {@inheritdoc}
    */
    public function getParent()
    {
        return 'ApplicationGamePokemonUsuarioBundle';
    }
}