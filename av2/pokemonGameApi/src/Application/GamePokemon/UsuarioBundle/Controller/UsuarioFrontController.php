<?php
namespace App\Application\GamePokemon\UsuarioBundle\Controller;

use App\Application\GamePokemon\UsuarioBundle\ApplicationGamePokemonUsuarioBundle;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Usuario Front controller.
 *
 * @Route("/")
 */
class UsuarioFrontController extends Controller
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

    public function getRepository()
    {
        return $this->getDoctrine()->getRepository('ApplicationGamePokemonUsuarioBundle:Usuario');
    }

    /**
    * @Route("/usuario", name="front_usuario")
    */
    public function index()
    {
      return $this->render('@ApplicationGamePokemonUsuario/front_usuario.html.twig');
    }

    /**
     * @Route("/usuario/{id}", name="front_usuario_id")
     */
    public function userById($id)
    {
        $user = $this->getDoctrine()->getRepository('ApplicationGamePokemonUsuarioBundle:Usuario')->findOneBy(['id'=>$id]);

        $data = [
            'nick' => $user->getNick(),
            'email' => $user->getEmail(),
            //'jogosRealizados' => $user
        ];


        return new JsonResponse($data);
    }

    /**
     * @Route("/usuarioLogar", name="front_usuario_logar", methods={"POST"})
     */
    public function logar(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if ($json = $request->getContent()) {
            $content = json_decode($json, true);
            $user = $content['username'];
            $password = $content['password'];
        }

        $usuario = $this->getDoctrine()->getRepository('ApplicationGamePokemonUsuarioBundle:Usuario')->findOneBy(['nick'=>$user, 'senha' =>$password]);

        if(!$usuario){

            $usuario = new \App\Application\GamePokemon\UsuarioBundle\Entity\Usuario();
            $usuario->setNick($user);
            $usuario->setSenha($password);

            $em->persist($usuario);
            $em->flush();

            $ranking = new \App\Application\GamePokemon\RankingBundle\Entity\Ranking();
            $ranking->setUsuario($usuario);
            $em->persist($ranking);
            $em->flush();
        }

        $usuario = $this->getDoctrine()->getRepository('ApplicationGamePokemonUsuarioBundle:Usuario')->findOneBy(['nick'=>$user, 'senha' =>$password]);

        $data = [
            'id' => $usuario->getId(),
            'nick' => $usuario->getNick(),
            'pontos' => $usuario->getRanking()->getPontos(),
            'acertos' => $usuario->getRanking()->getAcertos(),
            'erros' => $usuario->getRanking()->getErros(),
            'jogosPulados' => $usuario->getRanking()->getJogosPulados(),
            //'email' => $usuario->getEmail(),
        ];

        return new JsonResponse($data);
    }

    /**
     * @Route("/usuarioUpdate", name="front_usuario_update", methods={"POST"})
     */
    public function usuarioUpdate(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        if ($json = $request->getContent()) {
            $content = json_decode($json, true);
            $id = $content['id'];
            $nick = $content['nick'];
            $pontos = $content['pontos'];
            $acertos = $content['acertos'];
            $erros = $content['erros'];
            $jogosPulados = $content['jogosPulados'];
        }else{
            return new JsonResponse(['error'=> true]);
        }

        $usuario = $this->getDoctrine()->getRepository('ApplicationGamePokemonUsuarioBundle:Usuario')->findOneBy(['id'=>$id]);

        if($usuario){

            $ranking = $em->getRepository('ApplicationGamePokemonRankingBundle:Ranking')->findOneBy(['usuario'=>$usuario]);

            $ranking->setAcertos($acertos);
            $ranking->setErros($erros);
            $ranking->setPontos($pontos);
            $ranking->setJogosPulados($jogosPulados);

            $em->persist($ranking);
            $em->flush();

            $data = [
                'id' => $usuario->getId(),
                'nick' => $usuario->getNick(),
                'pontos' => $usuario->getRanking()->getPontos(),
                'acertos' => $usuario->getRanking()->getAcertos(),
                'erros' => $usuario->getRanking()->getErros(),
                'jogosPulados' => $usuario->getRanking()->getJogosPulados(),
                'error' => false
                //'email' => $usuario->getEmail(),
            ];
        }else{
            return new JsonResponse(['error'=> true]);
        }

        return new JsonResponse($data);
    }

    public function getRequest($request, $requestName){
        return $request->query->get($requestName);
    }

}

