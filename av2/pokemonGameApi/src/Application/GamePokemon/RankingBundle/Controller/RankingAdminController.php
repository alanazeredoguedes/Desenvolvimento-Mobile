<?php
namespace App\Application\GamePokemon\RankingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sonata\AdminBundle\Controller\CRUDController;

/**
 * Ranking Admin controller.
 *
 * @Route("/admin/gamePokemon/ranking/ranking")
 */
class RankingAdminController extends CRUDController
{

    public function getBundleName()
    {
        return 'ApplicationGamePokemonRankingBundle';
    }

    public function getEntityName()
    {
        return 'Ranking';
    }

    public function getFormType()
    {
        return 'App\Application\GamePokemon\RankingBundle\Form\RankingType';
    }
}

