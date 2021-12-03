<?php
namespace App\Application\GamePokemon\RankingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Ranking Front controller.
 *
 * @Route("/")
 */
class RankingFrontController extends Controller
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

    public function getRepository()
    {
        return $this->getDoctrine()->getRepository('ApplicationGamePokemonRankingBundle:Ranking');
    }

    /**
    * @Route("/ranking", name="front_ranking")
    */
    public function index()
    {
        $ranking = $this->getDoctrine()->getRepository('ApplicationGamePokemonRankingBundle:Ranking')->findBy([],['pontos' => 'DESC']);
        $data = [];
        foreach ($ranking as $key => $rank){
            $data[$key] = [
                'nick' => $rank->getUsuario()->getNick(),
                'pontos' => $rank->getPontos(),
                'jogosRealizados' => $rank->getAcertos() + $rank->getErros(),
                //'jogosPulados' => $rank->getJogosPulados(),
            ];
        }

        return new JsonResponse($data);
    }

    /**
     * @Route("/ranking/top3", name="front_ranking_top5")
     */
    public function top3()
    {
        $ranking = $this->getDoctrine()->getRepository('ApplicationGamePokemonRankingBundle:Ranking')->findBy(
            [],
            ['pontos' => 'DESC'],
            3,
            0
        );

        $data = [];
        foreach ($ranking as $key => $rank){
            $data[$key] = [
                'nick' => $rank->getUsuario()->getNick(),
                'pontos' => $rank->getPontos(),
                'jogosRealizados' => $rank->getAcertos() + $rank->getErros(),
                //'jogosPulados' => $rank->getJogosPulados(),
            ];
        }

        return new JsonResponse($data);
    }


}

