<?php
namespace App\Application\GamePokemon\UsuarioBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sonata\AdminBundle\Controller\CRUDController;

/**
 * Usuario Admin controller.
 *
 * @Route("/admin/gamePokemon/usuario/usuario")
 */
class UsuarioAdminController extends CRUDController
{

    public function getBundleName()
    {
        return 'ApplicationGamePokemonUsuarioBundle';
    }

    public function getEntityName()
    {
        return 'Usuario';
    }

    public function getFormType()
    {
        return 'App\Application\GamePokemon\UsuarioBundle\Form\UsuarioType';
    }
}

